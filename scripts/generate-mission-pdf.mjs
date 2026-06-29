import {createWriteStream, readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createContext, runInContext} from 'node:vm';

import PDFDocument from 'pdfkit';

const root = resolve(fileURLToPath(import.meta.url), '../..');
const missionContentPath = resolve(root, '.vuepress/theme/data/mission-content.js');
const logoPath = resolve(root, '.vuepress/public/images/logo.png');
const outputPath = resolve(root, '.vuepress/public/lando-alliance-mission.pdf');
const baseUrl = 'https://lando.dev';
const pdfUrl = `${baseUrl}/lando-alliance-mission.pdf`;
const pdfDate = new Date('2026-01-01T00:00:00Z');
const page = {
  height: 792,
  margin: 42,
  width: 612,
};
const contentWidth = page.width - (page.margin * 2);
const colors = {
  dark: '#261D2D',
  line: '#E7DCEB',
  muted: '#5E5566',
  pink: '#DD3F8F',
  pinkLight: '#FCEAF4',
  purple: '#412B6B',
  purpleLight: '#F4EFF7',
  white: '#FFFFFF',
};

const loadMissionContent = () => {
  const source = readFileSync(missionContentPath, 'utf8')
    .replace(/const\s+missionContent\s*=/, 'globalThis.missionContent =')
    .replace(/export\s+default\s+missionContent;?\s*$/, '');
  const context = {};
  createContext(context);
  runInContext(source, context, {filename: missionContentPath});
  return context.missionContent;
};

const absoluteUrl = href => {
  if (href.startsWith('http://') || href.startsWith('https://')) return href;
  if (href.startsWith('#')) return `${baseUrl}/mission/${href}`;
  if (href.startsWith('/')) return `${baseUrl}${href}`;
  return `${baseUrl}/${href}`;
};

const collectReferences = content => {
  const refs = [];
  const add = (text, href, group) => {
    const url = absoluteUrl(href);
    if (url === pdfUrl || refs.some(ref => ref.url === url)) return;
    refs.push({
      group,
      number: refs.length + 1,
      text,
      url,
    });
  };

  content.snapshot.forEach(item => add(item.label, item.href, 'Snapshot'));
  content.programs.forEach(item => add(item.emphasis, item.href, 'Programs'));
  add(content.access.license.text, content.access.license.href, 'Access');
  content.governance.practices.forEach(item => add(item.title, item.href, 'Governance'));
  content.governance.members.forEach(member => add(member.name, member.github.href, 'Board'));
  content.references.forEach(group => group.links.forEach(item => add(item.text, item.href, group.title)));
  return refs;
};

const refForHref = (refs, href) => refs.find(ref => ref.url === absoluteUrl(href));

const drawHeader = doc => {
  doc.image(logoPath, page.margin, 36, {
    width: 114,
  });
  doc
    .fillColor(colors.purple)
    .font('Helvetica-Bold')
    .fontSize(8)
    .text('501(c)(3) nonprofit', page.margin, 40, {
      align: 'right',
      width: contentWidth,
    })
    .fillColor(colors.muted)
    .font('Helvetica')
    .fontSize(7.5)
    .text('lando.dev/mission', page.margin, 52, {
      align: 'right',
      width: contentWidth,
    })
    .moveTo(page.margin, 78)
    .lineTo(page.width - page.margin, 78)
    .strokeColor(colors.line)
    .lineWidth(0.7)
    .stroke();
};

const drawFooter = (doc, pageNumber) => {
  doc
    .moveTo(page.margin, page.height - 34)
    .lineTo(page.width - page.margin, page.height - 34)
    .strokeColor(colors.line)
    .lineWidth(0.7)
    .stroke()
    .fillColor(colors.muted)
    .font('Helvetica')
    .fontSize(7)
    .text('Lando Alliance - https://lando.dev/mission', page.margin, page.height - 24)
    .text(`Page ${pageNumber}`, page.margin, page.height - 24, {
      align: 'right',
      width: contentWidth,
    });
};

const drawCard = (doc, x, y, width, height, fill = colors.white) => {
  doc
    .roundedRect(x, y, width, height, 4)
    .fillAndStroke(fill, colors.line);
};

const drawCitation = (doc, ref, x, y) => {
  if (!ref) return;
  doc
    .fillColor(colors.pink)
    .font('Helvetica-Bold')
    .fontSize(6.6)
    .text(`[${ref.number}]`, x, y, {
      link: ref.url,
      underline: false,
    });
};

const drawSnapshot = (doc, content, refs) => {
  const gap = 8;
  const cardWidth = (contentWidth - (gap * 3)) / 4;
  const top = 238;
  const height = 60;

  content.snapshot.forEach((item, index) => {
    const x = page.margin + (index * (cardWidth + gap));
    drawCard(doc, x, top, cardWidth, height, colors.pinkLight);
    doc
      .fillColor(colors.pink)
      .font('Helvetica-Bold')
      .fontSize(7.1)
      .text(item.label, x + 8, top + 9, {
        width: cardWidth - 34,
      });
    drawCitation(doc, refForHref(refs, item.href), x + cardWidth - 24, top + 9);
    doc
      .fillColor(colors.muted)
      .font('Helvetica')
      .fontSize(6.8)
      .text(item.detail, x + 8, top + 28, {
        lineGap: 1,
        width: cardWidth - 16,
      });
  });
};

const drawBulletList = (doc, items, x, y, width, options = {}) => {
  let nextY = y;
  items.forEach(item => {
    doc
      .fillColor(colors.dark)
      .font('Helvetica-Bold')
      .fontSize(options.size || 7.5)
      .text('-', x, nextY);
    doc
      .font('Helvetica')
      .fontSize(options.size || 7.5)
      .text(item, x + 9, nextY, {
        lineGap: 1.1,
        width: width - 9,
      });
    nextY = doc.y + 3;
  });
};

const drawSectionBox = (doc, title, x, y, width, height, drawContent) => {
  drawCard(doc, x, y, width, height);
  doc
    .fillColor(colors.purple)
    .font('Helvetica-Bold')
    .fontSize(10.4)
    .text(title, x + 10, y + 9);
  drawContent(x + 10, y + 29, width - 20);
};

const drawBenefitsAndPrograms = (doc, content, refs) => {
  const top = 316;
  const height = 137;
  const gap = 12;
  const colWidth = (contentWidth - gap) / 2;
  const benefits = content.publicBenefit.map(item => `${item.audience}: ${item.benefit}`);
  const programs = content.programs.map(item => {
    const ref = refForHref(refs, item.href);
    return `${item.text}${ref ? ` [${ref.number}]` : ''}`;
  });

  drawSectionBox(doc, 'Who Benefits', page.margin, top, colWidth, height, (x, y, width) => {
    drawBulletList(doc, benefits, x, y, width);
  });
  drawSectionBox(doc, 'Programs', page.margin + colWidth + gap, top, colWidth, height, (x, y, width) => {
    drawBulletList(doc, programs, x, y, width);
  });
};

const drawImpact = (doc, content) => {
  const top = 479;
  doc
    .fillColor(colors.purple)
    .font('Helvetica-Bold')
    .fontSize(10.5)
    .text('Impact', page.margin, top)
    .fillColor(colors.dark)
    .font('Helvetica')
    .fontSize(8)
    .text(content.impact.intro, page.margin, top + 16, {
      width: contentWidth,
    });

  const gap = 8;
  const cardWidth = (contentWidth - (gap * 2)) / 3;
  const cardTop = top + 38;
  const cardHeight = 70;
  content.impact.metrics.forEach((metric, index) => {
    const x = page.margin + (index * (cardWidth + gap));
    drawCard(doc, x, cardTop, cardWidth, cardHeight, colors.purpleLight);
    doc
      .fillColor(colors.purple)
      .font('Helvetica-Bold')
      .fontSize(15)
      .text(metric.value, x + 8, cardTop + 9, {
        align: 'center',
        width: cardWidth - 16,
      })
      .fillColor(colors.pink)
      .fontSize(6.7)
      .text(metric.label.toUpperCase(), x + 8, cardTop + 28, {
        align: 'center',
        width: cardWidth - 16,
      })
      .fillColor(colors.muted)
      .font('Helvetica')
      .fontSize(6.7)
      .text(metric.description, x + 9, cardTop + 42, {
        align: 'center',
        lineGap: 0.6,
        width: cardWidth - 18,
      });
  });
};

const drawAccessAndGovernance = (doc, content, refs) => {
  const top = 605;
  const height = 108;
  const gap = 12;
  const colWidth = (contentWidth - gap) / 2;
  const licenseRef = refForHref(refs, content.access.license.href);
  const accessItems = [
    ...content.access.paragraphs,
    `Project code is published under the ${content.access.license.text}${licenseRef ? ` [${licenseRef.number}]` : ''}.`,
  ];
  const governanceSummary = {
    'Auditable records': 'Minutes, recordings, and core records.',
    'Board composition': 'At least three directors.',
    'Regular meetings': 'Mission, operations, and stewardship.',
  };
  const governanceItems = content.governance.practices.map(item => {
    const ref = refForHref(refs, item.href);
    return `${item.title}${ref ? ` [${ref.number}]` : ''}: ${governanceSummary[item.title] || item.detail}`;
  });

  drawSectionBox(doc, 'Access', page.margin, top, colWidth, height, (x, y, width) => {
    let nextY = y;
    accessItems.forEach(item => {
      doc
        .fillColor(colors.dark)
        .font('Helvetica')
        .fontSize(7.2)
        .text(item, x, nextY, {
          lineGap: 1,
          width,
        });
      nextY = doc.y + 4;
    });
  });
  drawSectionBox(doc, 'Governance', page.margin + colWidth + gap, top, colWidth, height, (x, y, width) => {
    doc
      .fillColor(colors.dark)
      .font('Helvetica')
      .fontSize(6.6)
      .text(content.governance.summary, x, y, {
        lineGap: 0.6,
        width,
      });
    drawBulletList(doc, governanceItems, x, doc.y + 3, width, {
      size: 6.25,
    });
    doc
      .fillColor(colors.dark)
      .font('Helvetica')
      .fontSize(6.25)
      .text(`Board: ${content.governance.members.map(member => member.name).join(', ')}.`, x, doc.y + 2, {
        lineGap: 0.6,
        width,
      });
  });
};

const drawFirstPage = (doc, content, refs) => {
  drawHeader(doc);
  doc
    .fillColor(colors.dark)
    .font('Helvetica-Bold')
    .fontSize(18)
    .text('Lando Alliance Mission Snapshot', page.margin, 104)
    .fontSize(16)
    .text(content.mission.text, page.margin, 135, {
      lineGap: 1.2,
      width: contentWidth,
    })
    .fillColor(colors.dark)
    .font('Helvetica')
    .fontSize(8.15)
    .text(content.intro, page.margin, 178, {
      lineGap: 1,
      width: contentWidth,
    });

  drawSnapshot(doc, content, refs);
  drawBenefitsAndPrograms(doc, content, refs);
  drawImpact(doc, content);
  drawAccessAndGovernance(doc, content, refs);
  doc
    .fillColor(colors.muted)
    .font('Helvetica')
    .fontSize(7.2)
    .text('References are clickable in the PDF and printed in full on page 2.', page.margin, 735);
  drawFooter(doc, 1);
};

const groupReferences = refs => refs.reduce((groups, ref) => {
  const group = groups.find(item => item.title === ref.group);
  if (group) {
    group.refs.push(ref);
    return groups;
  }
  return [...groups, {title: ref.group, refs: [ref]}];
}, []);

const drawReferenceEntry = (doc, ref, x, y, width) => {
  doc
    .fillColor(colors.pink)
    .font('Helvetica-Bold')
    .fontSize(6.7)
    .text(`[${ref.number}] ${ref.text}`, x, y, {
      link: ref.url,
      underline: false,
      width,
    })
    .fillColor(colors.muted)
    .font('Helvetica')
    .fontSize(5.9)
    .text(ref.url, x, doc.y + 1, {
      lineGap: 0.3,
      width,
    });
  return doc.y + 5;
};

const drawReferencePage = (doc, refs) => {
  doc.addPage();
  drawHeader(doc);
  doc
    .fillColor(colors.dark)
    .font('Helvetica-Bold')
    .fontSize(18)
    .text('References', page.margin, 104)
    .fillColor(colors.dark)
    .font('Helvetica')
    .fontSize(8.4)
    .text('Clickable references used by the mission snapshot. Full URLs are included for printed copies.', page.margin, 129, {
      width: contentWidth,
    });

  const columns = [
    {x: page.margin, y: 162},
    {x: page.margin + (contentWidth / 2) + 14, y: 162},
  ];
  const colWidth = (contentWidth / 2) - 14;
  let columnIndex = 0;

  groupReferences(refs).forEach(group => {
    const estimatedHeight = 17 + (group.refs.length * 25);
    if (columns[columnIndex].y + estimatedHeight > 722 && columnIndex === 0) columnIndex = 1;
    const column = columns[columnIndex];
    doc
      .fillColor(colors.purple)
      .font('Helvetica-Bold')
      .fontSize(8.6)
      .text(group.title, column.x, column.y);
    column.y = doc.y + 7;
    group.refs.forEach(ref => {
      column.y = drawReferenceEntry(doc, ref, column.x, column.y, colWidth);
    });
    column.y += 7;
  });
  drawFooter(doc, 2);
};

const generateMissionPdf = () => new Promise((resolvePdf, reject) => {
  const content = loadMissionContent();
  const refs = collectReferences(content);
  const doc = new PDFDocument({
    autoFirstPage: true,
    info: {
      Author: 'Lando Alliance',
      CreationDate: pdfDate,
      ModDate: pdfDate,
      Subject: content.description,
      Title: 'Lando Alliance Mission Snapshot',
    },
    margin: 0,
    size: 'LETTER',
  });
  const stream = createWriteStream(outputPath);

  stream.on('finish', resolvePdf);
  stream.on('error', reject);
  doc.on('error', reject);

  doc.pipe(stream);
  drawFirstPage(doc, content, refs);
  drawReferencePage(doc, refs);
  doc.end();
});

await generateMissionPdf();
console.log(`Wrote ${outputPath.replace(`${root}/`, '')}`);
