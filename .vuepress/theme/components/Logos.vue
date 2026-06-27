<template>
  <div class="logos">
    <h3>Used by 50,000+ developers across 300+ organizations and teams, with roots going back to 2012</h3>
    <Icons :mobileSlideshow="true" :icons="icons"/>
  </div>
</template>

<style lang="scss">
  @import '../styles/palette.scss';
  .logos {
    margin-bottom: 5rem;
    h3 {
      font-size: .875rem;
      color: var(--c-brand-light) !important;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
    }
    .icons {
      gap: 5.375rem;
      justify-content: center;
      .icon {
        height: 3rem;
        img {
          height: 80px;
          object-fit: none;
        }
      }
    }
  }
@media (max-width: $MQMobile) {
  .logos {
    h3 {
      font-size: 1em;
    }
    .icons {
      display: flex;
    }
  }
}

</style>

<script>
export default {
  data() {
    return {
      icons: [
        {src: 'images/logos/autodesk.png', alt: 'Autodesk logo.'},
        {src: 'images/logos/accenture.png', alt: 'Accenture logo.'},
        {src: 'images/logos/cbs.png', alt: 'CBS logo.'},
        {src: 'images/logos/cagov.png', alt: 'CA.gov logo.'},
        {src: 'images/logos/tata.png', alt: 'Tata logo.'},
        {src: 'images/logos/yale.png', alt: 'Yale University logo.'},
      ],
    };
  },
};
</script>
