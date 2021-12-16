<template>
  <div class="feature-left">
    <div class="feature-content">
      <h3>Start coding <div class="emphasis">instantly</div></h3>
      <p>Lando creates your dev environment and seeds it. Because you don't have time to configure Docker, debug tooling, or any of that space snarge.</p>
      <div class="logos">
        <img class="logo" src="">
        <img class="logo" src="">
      </div>
    </div>
    <div class="feature-image">
      <img src="/images/code-instantly.png">
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.feature-left {
  display: flex;
  gap: 4rem;
  .feature-content,
  .feature-image {
    flex-grow: 1;
    flex-basis: 50%;
  }
  .feature-content {
    h3 {
      font-weight: 800;
      font-size: 3rem;
      line-height: 3.25rem;
      letter-spacing: -0.03em;
      .emphasis {
        color: var(--c-brand-light);
      }
    }
  }
  .feature-image {
  }
}
</style>
