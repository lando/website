<template>
  <div class="mission-page">
    <header class="brief-hero">
      <img src="../../public/images/yellow-planet.svg" alt="" />
      <p class="mission-kicker">Lando Alliance - 501(c)(3) Nonprofit</p>
      <h1>{{ content.title }}</h1>
      <p>{{ content.intro }}</p>
    </header>

    <section class="brief-snapshot" aria-label="Nonprofit eligibility snapshot">
      <a
        v-for="item in content.snapshot"
        :key="item.label"
        :href="item.href"
        :target="isExternal(item.href) ? '_blank' : undefined"
        :rel="isExternal(item.href) ? 'noopener noreferrer' : undefined"
      >
        <strong>{{ item.label }}</strong>
        <span>{{ item.detail }}</span>
      </a>
    </section>

    <section class="brief-grid brief-lead-grid" aria-label="Mission and public benefit">
      <article class="brief-panel brief-panel-primary mission-thesis-panel">
        <p class="mission-kicker">Mission</p>
        <h2 class="mission-thesis">
          <template v-for="part in getEmphasizedMissionParts()"
            :key="`${part.text}-${part.emphasized}`">
            <span v-if="part.emphasized" class="emphasis">{{ part.text }}</span>
            <template v-else>{{ part.text }}</template>
          </template>
        </h2>
      </article>
      <article class="brief-panel benefit-panel">
        <p class="mission-kicker">Public Benefit</p>
        <h2>Who benefits</h2>
        <ul class="benefit-list">
          <li v-for="item in content.publicBenefit" :key="item.audience">
            <strong>{{ item.audience }}</strong>
            <span>{{ item.benefit }}</span>
          </li>
        </ul>
      </article>
    </section>

    <section class="brief-section">
      <div class="brief-section-heading">
        <p class="mission-kicker">Programs</p>
        <h2>Tools, learning, and stewardship</h2>
      </div>
      <ul class="brief-program-list">
        <li v-for="program in content.programs" :key="program.href" :class="`program-${program.icon}`">
          <a
            class="brief-program-card"
            :href="program.href"
            :target="isExternal(program.href) ? '_blank' : undefined"
            :rel="isExternal(program.href) ? 'noopener noreferrer' : undefined"
          >
            <svg class="program-planet" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
              <defs>
                <clipPath :id="`program-planet-clip-${program.icon}`">
                  <circle cx="32" cy="32" r="17" />
                </clipPath>
              </defs>
              <circle class="program-planet-body" cx="32" cy="32" r="17" />
              <g :clip-path="`url(#program-planet-clip-${program.icon})`">
                <path class="program-planet-band" d="M17 29c7-5 14-3 22 0 5 2 10 1 16-3 1 4 1 8 0 12-6 4-13 5-21 3-8-3-13-5-21 0-1-4 0-8 4-12Z" />
                <circle class="program-planet-shine" cx="26" cy="23" r="4" />
              </g>
            </svg>
            <span>
              {{ getProgramCopy(program).before }}<strong class="program-emphasis">{{ program.emphasis }}</strong>{{ getProgramCopy(program).after }}
            </span>
          </a>
        </li>
      </ul>
    </section>

    <section id="access" class="brief-callout">
      <div>
        <p class="mission-kicker">Free and Open Access</p>
        <h2>Public access to <span class="emphasis">developer tools</span> and learning resources</h2>
      </div>
      <div>
        <p>{{ content.access.paragraphs[0] }}</p>
        <p>{{ content.access.paragraphs[1] }}</p>
        <p>
          Our GitHub organization is public, and project code is published under the
          <a :href="content.access.license.href" target="_blank" rel="noopener noreferrer">
            {{ content.access.license.text }}
          </a>.
        </p>
      </div>
    </section>

    <section class="impact-governance-grid">
      <article class="brief-panel impact-panel">
        <p class="mission-kicker">Impact</p>
        <h2>Community <span class="emphasis">impact</span></h2>
        <p>{{ content.impact.intro }}</p>
        <dl class="impact-stat-list">
          <div v-for="metric in content.impact.metrics" :key="metric.key" class="impact-stat-row">
            <dt>{{ metric.label }}</dt>
            <dd>{{ getImpactMetricValue(metric) }}</dd>
            <p>{{ getImpactMetricDescription(metric) }}</p>
          </div>
        </dl>
      </article>
      <article class="brief-panel governance-panel">
        <p class="mission-kicker">Governance</p>
        <h2>Mission <span class="emphasis">governance</span></h2>
        <p>{{ content.governance.summary }}</p>
        <div class="governance-practice-list">
          <a
            v-for="practice in content.governance.practices"
            :key="practice.href"
            :href="practice.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>{{ practice.title }}</strong>
            <span>{{ practice.detail }}</span>
          </a>
        </div>
      </article>
    </section>

    <section id="board" class="brief-section">
      <div class="brief-section-heading">
        <p class="mission-kicker">Board</p>
        <h2>Stewarded by longtime open source contributors and community organizers</h2>
      </div>
      <ul class="brief-board-list">
        <li v-for="member in content.governance.members" :key="member.name">
          <a class="brief-board-card" :href="member.github.href" target="_blank" rel="noopener noreferrer">
            <img :src="member.github.avatar" :alt="`${member.name} GitHub profile picture`" loading="lazy" />
            <strong><span class="emphasis">{{ member.name }}</span></strong>
            <span>{{ member.role }}</span>
            <span class="brief-board-link">
              @{{ member.github.username }}
            </span>
          </a>
        </li>
      </ul>
    </section>

    <section class="brief-section evidence-section">
      <div class="brief-section-heading">
        <p class="mission-kicker">Evidence</p>
        <h2>References</h2>
      </div>
      <div class="brief-reference-groups">
        <section
          v-for="group in content.references"
          :key="group.title"
          class="brief-reference-group"
        >
          <h3>{{ group.title }}</h3>
          <nav class="brief-reference-list" :aria-label="`${group.title} references`">
            <a
              v-for="item in group.links"
              :key="item.href"
              :href="item.href"
              :target="isExternal(item.href) ? '_blank' : undefined"
              :rel="isExternal(item.href) ? 'noopener noreferrer' : undefined"
            >
              {{ item.text }}
            </a>
          </nav>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import content from '../data/mission-content';

const isExternal = href => href.startsWith('http');
const fallbackImpactStats = {
  sinceLabel: 'Jan 1, 2026',
  issuesAddressed: 575,
};
const impactStats = ref(fallbackImpactStats);

const asNumber = value => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const formatStat = value => value.toLocaleString('en-US');

const getEmphasizedMissionParts = () => {
  const parts = [];
  let remaining = content.mission.text;

  content.mission.emphasis.forEach(phrase => {
    const index = remaining.indexOf(phrase);

    if (index === -1) return;
    if (index > 0) {
      parts.push({
        text: remaining.slice(0, index),
        emphasized: false,
      });
    }

    parts.push({
      text: phrase,
      emphasized: true,
    });

    remaining = remaining.slice(index + phrase.length);
  });

  if (remaining) {
    parts.push({
      text: remaining,
      emphasized: false,
    });
  }

  return parts;
};

const getProgramCopy = program => {
  const index = program.text.indexOf(program.emphasis);

  if (index === -1) {
    return {
      before: '',
      after: program.text,
    };
  }

  return {
    before: program.text.slice(0, index),
    after: program.text.slice(index + program.emphasis.length),
  };
};

const normalizeImpactStats = payload => {
  if (!payload || !payload.stats) return null;

  const mergedPullRequests = asNumber(payload.stats.mergedPullRequests);
  const closedIssues = asNumber(payload.stats.closedIssues);

  if (mergedPullRequests === null || closedIssues === null) return null;

  return {
    sinceLabel: payload.since && payload.since.label ? payload.since.label : fallbackImpactStats.sinceLabel,
    issuesAddressed: mergedPullRequests + closedIssues,
  };
};

const getImpactMetricValue = metric => {
  if (metric.key !== 'issuesAddressed') return metric.value;

  return `${formatStat(impactStats.value.issuesAddressed)}+`;
};

const getImpactMetricDescription = metric => {
  if (metric.key !== 'issuesAddressed') return metric.description;

  return `Closed issues and merged pull requests since ${impactStats.value.sinceLabel}.`;
};

onMounted(async () => {
  try {
    const response = await globalThis.fetch('/api/lando-stats', {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) return;

    const nextStats = normalizeImpactStats(await response.json());
    if (nextStats) impactStats.value = nextStats;
  } catch (error) {
    impactStats.value = fallbackImpactStats;
  }
});
</script>

<style lang="scss" scoped>
@import '../styles/palette.scss';

.mission-page {
  margin: 0 0 6rem 50%;
  padding-top: 5rem;
  transform: translateX(-50%);
  width: min(1040px, calc(100vw - 3rem));
}

.brief-hero {
  margin: 0 auto 2.5rem;
  max-width: 920px;
  position: relative;
  text-align: center;
  z-index: 2;
}

.brief-hero::before,
.brief-hero::after {
  border-bottom: 1.5px dashed #794993;
  border-radius: 100%;
  content: '';
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: -1;
}

.brief-hero::before {
  height: 260px;
  top: -150px;
  width: 620px;
}

.brief-hero::after {
  height: 420px;
  top: -250px;
  width: 1180px;
}

.brief-hero img {
  filter: drop-shadow(0px 4px 80px rgba(232, 218, 88, .45));
  margin-bottom: 1rem;
  width: 76px;
}

.brief-hero h1 {
  color: var(--c-text-lightest);
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.05;
  margin: 0 0 1.5rem !important;
}

.brief-hero p:last-child {
  font-size: 1.35rem;
  line-height: 1.65;
  margin: 0;
}

.mission-kicker {
  color: var(--c-brand);
  font-size: .875rem;
  font-weight: 800;
  letter-spacing: .08rem;
  margin: 0 0 .65rem;
  text-transform: uppercase;
}

.brief-snapshot {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0 0 4rem;
}

.brief-snapshot a {
  background: rgba(38, 29, 45, .18);
  border: 1.5px dashed #794993;
  border-radius: 8px;
  box-sizing: border-box;
  color: inherit;
  display: block;
  padding: 1.15rem;
  text-decoration: none !important;
}

.brief-snapshot a:hover,
.brief-snapshot a:focus-visible {
  border-color: var(--c-brand);
  border-style: solid;
  color: inherit;
  text-decoration: none !important;
}

.brief-snapshot strong {
  color: var(--c-brand-light);
  display: block;
  font-size: .85rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: .45rem;
  text-transform: uppercase;
}

.brief-snapshot span {
  display: block;
  font-size: .95rem;
  line-height: 1.45;
}

.brief-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 2rem 0;
}

.brief-lead-grid {
  align-items: stretch;
}

.brief-panel,
.brief-callout {
  border: 1.5px dashed #794993;
  border-radius: 8px;
  box-sizing: border-box;
  filter: drop-shadow(0px 2px 60px rgba(38, 29, 45, .2));
  padding: 2rem;
}

.brief-panel-primary {
  background: radial-gradient(102.17% 322.14% at -4.98% 92.25%, rgba(221, 63, 143, .35) 13.06%, rgba(65, 43, 107, .45) 100%);
}

.mission-thesis-panel {
  display: flex;
  flex-direction: column;
}

.mission-thesis {
  font-size: 2.75rem !important;
  line-height: 1.08 !important;
  margin-bottom: 0 !important;
}

.mission-thesis .emphasis {
  color: #DEDB8E;
}

.benefit-panel {
  display: flex;
  flex-direction: column;
}

.benefit-list {
  display: grid;
  gap: .85rem;
  list-style: none;
  margin: .5rem 0 0;
  padding: 0;
}

.benefit-list li {
  border-top: 1px solid rgba(121, 73, 147, .65);
  padding-top: .85rem;
}

.benefit-list li:last-child {
  border-bottom: 1px solid rgba(121, 73, 147, .65);
  padding-bottom: .85rem;
}

.benefit-list strong {
  color: var(--c-brand-light);
  display: block;
  font-size: .875rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: .25rem;
  text-transform: uppercase;
}

.benefit-list span {
  display: block;
  font-size: .98rem;
  line-height: 1.5;
}

.brief-panel h2,
.brief-callout h2,
.brief-section-heading h2 {
  color: var(--c-text-lightest);
  font-size: 2.3rem;
  line-height: 1.15;
  margin: 0 0 1.25rem !important;
}

.brief-section-heading h2 {
  max-width: 780px;
}

.brief-panel p,
.brief-callout p {
  font-size: 1rem;
  line-height: 1.65;
  margin: 0;
}

.brief-panel p + p,
.brief-callout p + p {
  margin-top: 1rem;
}

.brief-section {
  margin: 5rem 0;
}

.brief-section-heading {
  margin-bottom: 2rem;
}

.brief-program-list,
.brief-board-list {
  display: grid;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.brief-program-list {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.brief-program-list li,
.brief-board-list li {
  border: 1.5px dashed #794993;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1.55;
  padding: 1.25rem;
}

.brief-program-list li {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.brief-program-list li:hover,
.brief-program-list li:focus-within {
  border-color: var(--c-brand);
  border-style: solid;
}

.brief-program-card {
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none !important;
}

.brief-program-card:hover,
.brief-program-card:focus-visible {
  color: inherit;
  text-decoration: none !important;
}

.brief-program-card:hover *,
.brief-program-card:focus-visible * {
  text-decoration: none !important;
}

.program-planet {
  display: block;
  height: 2.65rem;
  margin-bottom: 1rem;
  overflow: visible;
  width: 2.65rem;
}

.program-planet-body {
  fill: var(--program-body);
  filter: drop-shadow(0 2px 14px var(--program-glow));
}

.program-planet-band {
  fill: var(--program-band);
  opacity: .72;
}

.program-planet-shine {
  fill: #fff;
  opacity: .45;
}

.program-emphasis {
  color: var(--c-brand-light);
  font-weight: 800;
}

.program-software {
  --program-body: #DD3F8F;
  --program-band: #412B6B;
  --program-glow: rgba(221, 63, 143, .45);
}

.program-docs {
  --program-body: #43D9FF;
  --program-band: #2C7EA2;
  --program-glow: rgba(67, 217, 255, .35);
}

.program-events {
  --program-body: #DEDB8E;
  --program-band: #BDAF47;
  --program-glow: rgba(222, 219, 142, .4);
}

.program-support {
  --program-body: #7E5BEF;
  --program-band: #412B6B;
  --program-glow: rgba(126, 91, 239, .4);
}

.program-stewardship {
  --program-body: #F56EB3;
  --program-band: #C9287A;
  --program-glow: rgba(245, 110, 179, .38);
}

.brief-callout {
  align-items: start;
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
  margin: 5rem 0;
}

.brief-callout h2 .emphasis {
  color: #DEDB8E;
}

.brief-callout a {
  color: var(--c-brand-light);
  font-weight: 800;
  text-decoration: none;
}

.brief-callout a:hover,
.brief-callout a:focus-visible {
  color: var(--c-brand);
  text-decoration: underline;
}

.impact-governance-grid {
  align-items: stretch;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, .92fr);
  margin: 5rem 0;
}

.impact-panel,
.governance-panel {
  display: flex;
  flex-direction: column;
}

.impact-stat-list {
  display: grid;
  margin: 2rem 0 0;
}

.impact-stat-row {
  align-items: baseline;
  border-top: 1px solid rgba(121, 73, 147, .65);
  display: grid;
  gap: .45rem 1rem;
  grid-template-columns: minmax(0, 1fr) auto;
  padding: 1rem 0;
}

.impact-stat-row:last-child {
  border-bottom: 1px solid rgba(121, 73, 147, .65);
}

.impact-stat-row dt {
  color: var(--c-text-lightest);
  font-size: .875rem;
  font-weight: 800;
  line-height: 1.25;
  text-transform: uppercase;
}

.impact-stat-row dd {
  color: #DEDB8E;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  margin: 0;
  text-align: right;
}

.impact-stat-row p {
  font-size: .95rem;
  grid-column: 1 / -1;
  line-height: 1.55;
  margin: 0;
}

.governance-practice-list {
  display: grid;
  margin-top: 2rem;
}

.governance-practice-list a {
  border-top: 1px solid rgba(121, 73, 147, .65);
  color: inherit;
  display: block;
  padding: 1rem 0;
  text-decoration: none;
}

.governance-practice-list a:last-child {
  border-bottom: 1px solid rgba(121, 73, 147, .65);
}

.governance-practice-list a:hover,
.governance-practice-list a:focus-visible {
  color: inherit;
  text-decoration: none;
}

.governance-practice-list a:hover strong,
.governance-practice-list a:focus-visible strong {
  color: var(--c-brand-light);
}

.governance-practice-list strong {
  color: var(--c-brand);
  display: block;
  font-size: .875rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: .45rem;
  text-transform: uppercase;
}

.governance-practice-list span {
  display: block;
  font-size: .95rem;
  line-height: 1.55;
}

.brief-board-list {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.brief-board-list li {
  border: 1.5px dashed #794993;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
}

.brief-board-list li:hover,
.brief-board-list li:focus-within {
  border-color: var(--c-brand);
  border-style: solid;
}

.brief-board-card {
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none !important;
}

.brief-board-card:hover,
.brief-board-card:focus-visible {
  color: inherit;
  text-decoration: none !important;
}

.brief-board-card:hover *,
.brief-board-card:focus-visible * {
  text-decoration: none !important;
}

.brief-board-list img {
  aspect-ratio: 1;
  border-radius: 100%;
  display: block;
  margin-bottom: 1.25rem;
  object-fit: cover;
  width: 6.75rem;
}

.brief-board-card strong {
  color: var(--c-brand-lighter);
  display: block;
  font-size: 1.65rem;
  line-height: 1.2;
  margin-bottom: .75rem;
}

.brief-board-card .emphasis {
  color: var(--c-brand-light);
}

.brief-board-card > span:not(.brief-board-link) {
  display: block;
  font-size: 1rem;
  line-height: 1.55;
}

.brief-board-link {
  color: var(--c-brand);
  display: block;
  font-size: .95rem;
  font-weight: 800;
  margin-top: auto;
  padding-top: 1.25rem;
}

.brief-board-card:hover .brief-board-link,
.brief-board-card:focus-visible .brief-board-link {
  color: var(--c-brand-light);
}

.brief-reference-groups {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.brief-reference-group h3 {
  color: var(--c-brand);
  font-size: .875rem;
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 .45rem;
  text-transform: uppercase;
}

.brief-reference-list {
  display: grid;
}

.brief-reference-list a {
  border-bottom: 1px solid rgba(121, 73, 147, .65);
  color: var(--c-text-lightest);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  padding: .85rem 0;
  text-decoration: none;
}

.brief-reference-list a:hover,
.brief-reference-list a:focus-visible {
  color: var(--c-brand-light);
  text-decoration: none;
}

@media (max-width: $MQNarrow) {
  .brief-snapshot,
  .brief-program-list,
  .brief-reference-groups {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .brief-board-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .impact-governance-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: $MQMobile) {
  .mission-page {
    padding-top: 3rem;
    width: min(100%, calc(100vw - 2rem));
  }

  .brief-hero {
    margin-bottom: 3rem;
  }

  .brief-hero h1 {
    font-size: 2.75rem;
  }

  .brief-hero p:last-child {
    font-size: 1.1rem;
  }

  .brief-grid,
  .impact-governance-grid,
  .brief-snapshot,
  .brief-program-list,
  .brief-callout,
  .brief-board-list,
  .brief-reference-groups {
    grid-template-columns: 1fr;
  }

  .brief-panel h2,
  .brief-callout h2,
  .brief-section-heading h2 {
    font-size: 2rem;
  }

  .brief-board-list {
    grid-template-columns: 1fr;
  }

  .brief-board-list img {
    width: 5.75rem;
  }
}
</style>
