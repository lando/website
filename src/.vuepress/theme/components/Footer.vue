<template>
  <div id="footer">
    <div class="theme-default-content">
      <div class="footer-top">
        <div class="footer-image">
          <img src="/images/logo-small-white.png" alt="lando logo">
        </div>
        <div class="footer-newsletter">
          <Subscribe
            :customStyles="customStyles"
            :interests="interests"
            :title="title"/>
        </div>
      </div>
      <div class="footer-content">
        <div class="footer-column opensource">
          <h3>Open Source</h3>
          <div class="footer-column-inner">
            <div class="footer-column-third">
              <h4>Getting Started</h4>
              <ul>
                <li><a href="https://docs.lando.dev/basics/" target="_blank">Introduction</a></li>
                <li><a href="https://docs.lando.dev/basics/basics.html" target="_blank">Basics</a></li>
                <li><a href="https://docs.lando.dev/basics/installation.html" target="_blank">Installation</a></li>
                <li><a href="https://docs.lando.dev/basics/first-app.html" target="_blank">First App</a></li>
                <li><a href="https://docs.lando.dev/basics/usage" target="_blank">Usage</a></li>
                <li><a href="https://docs.lando.dev/config/lando.html" target="_blank">Landofile</a></li>
              </ul>
            </div>
            <div class="footer-column-third">
              <h4>Repos</h4>
              <ul>
                <li><a href="https://github.com/lando/lando" target="_blank">Lando</a></li>
                <li><a href="https://github.com/lando/hyperdrive" target="_blank">Hyperdrive</a></li>
                <li><a href="https://github.com/lando/leia" target="_blank">Leia</a></li>
                <li><a href="https://github.com/lando/lando/tree/master/docs" target="_blank">Docs</a></li>
                <li><a href="https://github.com/lando/website" target="_blank">Website</a></li>
                <li><a href="https://github.com/lando/blog" target="_blank">Blog</a></li>
                <li><a href="https://github.com/lando/events" target="_blank">Events</a></li>
              </ul>
            </div>
            <div class="footer-column-third">
              <h4>Community</h4>
              <ul>
                <li><a href="https://docs.lando.dev/guides/lando-info.html" target="_blank">Slack</a></li>
                <li><a href="https://docs.lando.dev/help/logs.html" target="_blank">GitHub Issues</a></li>
              </ul>
              <h4>Sponsor</h4>
              <ul>
                <li><a href="https://github.com/sponsors/lando" target="_blank">GitHub</a></li>
                <li><a href="https://www.patreon.com/join/devwithlando?" target="_blank">Patreon</a></li>
                <li><a href="https://opencollective.com/lando" target="_blank">OpenCollective</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-column lando-cloud">
          <h3>Lando Cloud</h3>
          <div class="footer-column-inner">
            <div class="footer-column-third">
              <h4>Lando Cloud Beta</h4>
              <ul>
                <li><a href="">Overview</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Beta Signup</a></li>
              </ul>
              <h4>For Partners</h4>
              <ul>
                <li><a href="https://docs.lando.dev/guides/lando-info.html" target="_blank">Hosting Companies</a></li>
                <li><a href="https://docs.lando.dev/help/logs.html" target="_blank">Enterprise</a></li>
                <li><a href="https://docs.lando.dev/contrib/contributing.html" target="_blank">Universities</a></li>
                <li><a href="https://docs.lando.dev/contrib/contributing.html" target="_blank">Dev Tool Providers</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-column company">
          <h3>Company</h3>
          <div class="footer-column-inner">
            <div class="footer-column-half">
              <h4>About Us</h4>
              <ul>
                <li><a href="https://blog.lando.dev/tag/case-study/">Case Studies</a></li>
                <li><a href="https://blog.lando.dev/tag/lando/">Blog</a></li>
                <li><a href="https://events.lando.dev">Events</a></li>
                <li><a href="/contact/">Contact</a></li>
              </ul>
              <h4>Legal</h4>
              <ul>
                <li><a href="/terms/">Terms</a></li>
                <li><a href="/privacy/">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copyright">© 2022 Lando System, Inc.</div>
      <ul class="footer-bottom-menu">
        <li><a href="/terms">Terms</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
      </ul>
      <div class="footer-social">
        <a class="social-icon" href="https://github.com/lando/lando" target="_blank">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
        <a class="social-icon" href="https://twitter.com/devwithlando" target="_blank">
          <svg aria-labelledby="simpleicons-twitter-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-twitter-icon" lang="en">Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>
        </a>
        <a class="social-icon" href="https://www.youtube.com/channel/UCl_QBNuGJNoo7yH-n18K7Kg" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><title>YouTube icon</title><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// Lando components
import Subscribe from './Subscribe.vue';

export default {
  components: {Subscribe},
  data() {
    return {
      customStyles: {
        padding: 0,
      },
      title: 'Get the latest updates',
      interests: [{
        id: 1,
        group: 37781,
        checked: true,
        hidden: true,
        label: 'Updates',
      }],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/palette.scss';
#footer {
  background-color: var(--c-bg);
  color: hsl(var(--c-bg), 44%);
  font-size: 0.875em;
  padding: 6.25rem;

  .footer-top {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .footer-image {
      flex-grow: 3;
    }
    .footer-newsletter {
      .subscribe-input {
        width: 100%;
        box-sizing: border-box;
        padding: 10px 80px 10px 20px;
        height: 50px;
        border: 0;
        font-size: 16px;
        background-color: hsl(var(--c-bg), 95%);
        &:focus {
          outline: none;
          border-color: hsl(var(--c-brand), 18%);
        }
      }
    }
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    background-color: hsl(var(--c-bg), 12%);
    padding: 2em 0;
    gap: 4rem;
    ul {
      padding: 0;
      li {
        list-style: none;
        color: hsl(var(--c-bg), 90%);
        font-size: .875em;
        font-weight: 700;
        margin: 0;
        a {
          color: hsl(var(--c-bg), 90%);
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
    .footer-image {
      padding-top: 2em;
      padding-bottom: 2em;
      text-align: left;
    }
    .footer-column {
      display: inline-block;
      vertical-align: top;
      &.company {
        margin-left: auto;
      }
      h3 {
        color: var(--c-brand);
        font-size: 1.125rem;
      }
    }
    .footer-column-inner {
      padding-top: 2em;
      padding-bottom: 2em;
      border-top: 1px solid rgba(232, 231, 233, 0.1);
      display: flex;
      gap: 2rem;
    }
  }
}
.footer-bottom {
  background-color: var(--c-brand);
  color: var(--c-text);
  display: flex;
  align-items: center;
  font-size: .875rem;
  padding: 1rem 6.25rem;
  .footer-copyright {
    color: hsl(var(--c-bg), 99%);
  }
  .footer-bottom-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
    li a {
      color: var(--c-text);
    }
  }
  .footer-social {
    display: flex;
    gap:1.5rem;
    margin-left: auto;
    a {
      svg {
        height: 1.5625rem;
        fill: var(--c-text);
      }
    }
  }
}
@media (max-width: $MQMobile) {
  #footer {
    .footer-column {
      width: auto;
    }
  }
}
@media (max-width: $MQMobileNarrow) {
  #footer {
    .footer-top {
      h4,
      li {
        text-align: center;
      }
      li {
        font-size: .875rem;
      }
    }
    .footer-column-third {
      width: 100%;
      padding-left: 0;
      text-align: center;
    }
    .footer-column-half {
      width: 100%;
      padding-left: 0;
    }
    .footer-column {
      width: 80%;
      margin: 0;
      padding: 0;
      text-align: center;
    }
    .footer-newsletter {
      h3 {
        font-size: 1.8em
      }
    }
  }
}
</style>
