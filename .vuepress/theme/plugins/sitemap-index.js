const {fs, path} = require('@vuepress/utils');

const escapeXml = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const sitemapIndexPlugin = ({outFile = 'sitemap.xml', sitemaps = []} = {}) => app => {
  return {
    name: '@lando/website-sitemap-index',
    onGenerated: () => {
      if (!app.env.isBuild) return;

      const destFile = path.resolve(app.options.dest, outFile);
      const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...sitemaps.map(sitemap => `  <sitemap><loc>${escapeXml(sitemap)}</loc></sitemap>`),
        '</sitemapindex>',
        '',
      ].join('\n');

      fs.writeFileSync(destFile, xml);
    },
  };
};

module.exports = {sitemapIndexPlugin};
