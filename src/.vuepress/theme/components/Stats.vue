<template>
  <div class="stats">
    <!-- Should break these out into a StatsItem component -->
    <div class="stats-item">
      <div class="stat-number">
        50,000+
      </div>
      <div class="stat-title">
        Delighted Devs
      </div>
    </div>
    <div class="stats-item">
      <div class="stat-number">
        3,000+
      </div>
      <div class="stat-title">
        Github Stars
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../styles/palette.scss';
  .stats {
    display: flex;
    position: relative;
    z-index: 10;
    .stats-item {
      margin-right: 2.5rem;
      .stat-number {
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.25rem;
      }
      .stat-title {
        color: var(--c-brand-light);
        font-size: 1.375rem;
        line-height: 1.875rem;
      }
    }
  }


  @media (max-width: $MQMobileNarrow) {
    .stats {
      .stats-item {
        .stat-number {
          font-size: 1.5rem;
        }
        .stat-title {
          font-size: 1.125rem;
        }
      }
    }
  }
</style>
