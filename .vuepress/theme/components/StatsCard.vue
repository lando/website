<template>
  <li class="stats-card">
    <div class="stats-card-content">
      <h3 class="stats-card-title">Open Source <span class="emphasis">Stats</span></h3>
      <dl class="stats-list">
        <div class="stats-row">
          <dt>Merged PRs</dt>
          <dd>{{ formatStat(stats.mergedPullRequests) }}</dd>
        </div>
        <div class="stats-row">
          <dt>Closed issues</dt>
          <dd>{{ formatStat(stats.closedIssues) }}</dd>
        </div>
        <div class="stats-row">
          <dt>Latest release</dt>
          <dd>
            <a :href="stats.latestRelease.url" target="_blank" rel="noopener noreferrer">
              {{ stats.latestRelease.name }}
            </a>
          </dd>
        </div>
      </dl>
      <div class="stats-context">Since {{ stats.sinceLabel }}</div>
      <div class="stats-card-kicker">Throughput</div>
    </div>
  </li>
</template>

<script setup>
import {onMounted, ref} from 'vue';

const fallbackStats = {
  sinceLabel: 'Jan 1, 2026',
  mergedPullRequests: 500,
  closedIssues: 75,
  latestRelease: {
    name: 'v3.26.4',
    url: 'https://github.com/lando/core/releases/tag/v3.26.4',
  },
};

const stats = ref(fallbackStats);

const asNumber = value => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const normalizeStats = payload => {
  if (!payload || !payload.stats) return null;

  const mergedPullRequests = asNumber(payload.stats.mergedPullRequests);
  const closedIssues = asNumber(payload.stats.closedIssues);
  const latestRelease = payload.stats.latestRelease || {};

  if (mergedPullRequests === null || closedIssues === null || !latestRelease.name || !latestRelease.url) {
    return null;
  }

  return {
    sinceLabel: payload.since && payload.since.label ? payload.since.label : fallbackStats.sinceLabel,
    mergedPullRequests,
    closedIssues,
    latestRelease: {
      name: latestRelease.name,
      url: latestRelease.url,
    },
  };
};

const formatStat = value => value.toLocaleString('en-US');

onMounted(async () => {
  try {
    const response = await globalThis.fetch('/api/lando-stats', {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) return;

    const nextStats = normalizeStats(await response.json());
    if (nextStats) stats.value = nextStats;
  } catch (error) {
    stats.value = fallbackStats;
  }
});
</script>

<style lang="scss" scoped>
.stats-card {
  border: 1.5px dashed #794993;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  filter: drop-shadow(0px 2px 60px rgba(38, 29, 45, 0.2));
  height: 100%;
  padding: 1.25rem;
  text-align: left;
}

.stats-card-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.stats-card-title {
  color: var(--c-brand-lighter) !important;
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0 0 1rem !important;
  padding-top: .5em;
}

.stats-list {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin: .5rem 0 0;
  margin-top: 1em;
}

.stats-row {
  align-items: baseline;
  border-bottom: 1px solid rgba(121, 73, 147, .5);
  display: grid;
  gap: .65rem;
  grid-template-columns: 1fr auto;
  padding-bottom: .55rem;
}

.stats-row:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.stats-row dt {
  color: var(--c-text-lightest);
  font-size: .825rem;
  font-weight: 700;
}

.stats-row dd {
  color: #DEDB8E;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
  margin: 0;
  text-align: right;
}

.stats-row a {
  color: inherit;
  text-decoration: none;
}

.stats-row a:hover,
.stats-row a:focus-visible {
  color: var(--c-brand);
  text-decoration: underline;
}

.stats-context {
  color: var(--c-text-lightest);
  font-size: .75rem;
  font-weight: 700;
  margin-top: .7rem;
  opacity: .48;
  text-transform: uppercase;
}

.stats-card-kicker {
  color: var(--c-brand);
  font-size: .875rem;
  font-weight: 800;
  letter-spacing: .08rem;
  margin-top: auto;
  padding-top: 1.25rem;
  text-transform: uppercase;
}
</style>
