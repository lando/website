<template>
<div ref="codeBlock">
  <pre :class="languageClass"><code><slot /></code></pre>
</div>
</template>

<script>
import Prism from 'prismjs';

export default {
  name: 'code-highlight',
  props: {
    language: {
      type: String,
      default: 'javascript',
    },
  },
  computed: {
    languageClass() {
      return `language-${this.language}`;
    },
  },
  mounted() {
    Prism.highlightAllUnder(this.$refs.codeBlock);
  },

  beforeUpdate() {
    if ( typeof this.$slots.default[0] === 'string' ) {
      const newText = this.$slots.default[0].replace(/^[\r\n\s]*|[\r\n\s]*$/g, '');
      this.$el.querySelector('code').textContent = newText;
      Prism.highlightAllUnder(this.$refs.codeBlock);
    }
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/palette.scss';
  div pre[class*="language-"] {
    display: inline-block;
    padding-top: 3rem;
    border-radius: 6px;
    background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');
    background-repeat: no-repeat;
    background-position: 16px 16px;
    box-shadow: 5px 5px 15px 0px rgba(50, 50, 50, 0.75);
  }
  @media (max-width: $MQNarrow) {
    div pre[class*="language-"] {
      font-size: 1rem;
    }
  }
  @media (max-width: $MQMobileNarrow) {
    div pre[class*="language-"] {
      font-size: .8rem;
      padding: 3.3rem 1rem 1.5rem 1rem;
    }
  }
</style>
