<template>
  <li class="card">
    <component
      :is="link ? 'a' : 'div'"
      class="card-content"
      :href="link || undefined"
      :target="link ? '_blank' : undefined"
      :rel="link ? 'noopener noreferrer' : undefined"
    >
      <h3 v-html="title" class="card-title"></h3>
      <p class="card-text">{{ text }}</p>
      <div class="card-kicker">{{ kicker }}</div>
    </component>
  </li>
</template>

<script setup>
defineProps({
  kicker: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.card {
  border: 1.5px dashed #794993;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 2px 60px rgba(38, 29, 45, 0.2));
  height: 100%;
  padding: 1.25rem;
  text-align: left;
}

.card:has(.card-content[href]):hover,
.card:has(.card-content[href]):focus-within {
  border-color: var(--c-brand);
  border-style: solid;
}

.card-content {
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none !important;
}

.card-content[href]:hover,
.card-content[href]:focus-visible {
  color: inherit;
  text-decoration: none !important;
}

.card-content[href]:hover *,
.card-content[href]:focus-visible * {
  text-decoration: none !important;
}

.card-title {
  color: var(--c-brand-lighter) !important;
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0 0 1rem !important;
  padding-top: .5em;
}

.card-text {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.card-kicker {
  color: var(--c-brand);
  font-size: .875rem;
  font-weight: 800;
  letter-spacing: .08rem;
  margin-top: auto;
  padding-top: 1.25rem;
  text-transform: uppercase;
}
</style>
