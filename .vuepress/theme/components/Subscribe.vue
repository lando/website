<template>
  <div :class="{ subscribe: true, 'subscribe-dark': theme === 'dark' }" :style="customStyles">
    <h3>{{ title }}</h3>
    <div id="mc_embed_signup">
      <form action="https://dev.us12.list-manage.com/subscribe/post?u=59874b4d6910fa65e724a4648&amp;id=613837077f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate subscribe-form" target="_blank" novalidate>
        <input
          id="mce-EMAIL"
          type="email"
          v-model="email"
          placeholder="Email address"
          name="EMAIL"
          class="subscribe-input" />

        <ul style="display: none;" v-if="interests.length > 0">
          <li v-for="(interest, index) in interests" :key="index">
            <input
              type="checkbox"
              :checked="interest.checked"
              :value="interest.id"
              :name="`group[${interest.group}][${interest.id}]`"
              :id="`mce-group[${interest.group}]-${interest.group}-${index}`">
            <label :for="`mce-group[${interest.group}]-${interest.group}-${index}`">{{ interest.label }}</label>
          </li>
        </ul>

        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_59874b4d6910fa65e724a4648_613837077f" tabindex="-1" value="">
        </div>

        <input
          id="mc-embedded-subscribe"
          class="btn btn-primary"
          :class="{ button: true, disabled: !email }"
          :disabled="!email"
          type="submit"
          :value="buttonLabel"
          name="subscribe" />
      </form>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    buttonLabel: {
      type: String,
      default: 'Subscribe',
    },
    customStyles: {
      type: Object,
      default: () => ({
        width: '90%',
      }),
    },
    interests: {
      type: Array,
      default: () => ([]),
    },
    hideInterests: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: 'Get the latest updates',
    },
    theme: {
      type: String,
      default: 'light',
    },
  },
  data() {
    return {
      email: '',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';

.subscribe {
  margin: auto;
  padding: 2em 0;
  h3 {
    font-weight:400;
    font-size: .875rem;
    line-height: 150%;
    color: var(--c-text);
    margin-bottom: 0px;
    padding-top: 0;
  }
  &.subscribe-dark {
    background-color: hsl(var(--c-bg), 12%);
    h3 {
      color: hsl(var(--c-bg), 90%);
    }
  }
  .hidden-field {
    visibility: hidden;
  }
  .subscribe-form {
    display: flex;
    .subscribe-input {
      width: 100%;
      box-sizing: border-box;
      padding: 10px 80px 10px 20px;
      margin-bottom: 1em;
      height: 50px;
      border: none;
      font-size: 16px;
      background-color: rgba(238, 237, 239, 0.1);
      &:focus {
        outline: none;
        border-color: hsl(var(--c-brand), 18%);
      }
      &.disabled {
        opacity: .5;
      }
    }
    input.btn {
      opacity: 1;
      display: inline-block;
      border-radius: 0px 6px 6px 0px;
      height: 50px;
      border: none;
      :after {
        content: url('../../public/images/button-arrow.svg');
        color: white;
      }
    }
    .subscribe-error,
    .subscribe-success {
      padding: 1em;
      color: red;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 0.75rem;
    }
    .subscribe-success {
      color: var(--c-brand);
    }
  }
}
@media (max-width: $MQMobile) {
  .subscribe {
    .subscribe-input {
      width: 90%;
    }
  }
}
</style>
