<template>
  <div class="logos">
    <h3>Trusted by over 300 companies and organizations</h3>
    <Icons :mobileSlideshow="true" :icons="icons"/>
  </div>
</template>

<style lang="scss">
  .logos {
    h3 {
      font-size: .875rem;
      color: var(--c-brand-light);
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
</style>

<script>
export default {
  data() {
    return {
      icons: [
        {src: 'images/logos/autodesk.png', alt: 'Autodesk company logo.'},
        {src: 'images/logos/accenture.png', alt: 'Accenture company logo.'},
        {src: 'images/logos/cbs.png', alt: 'CBS company logo.'},
        {src: 'images/logos/cagov.png', alt: 'CA.gov logo.'},
        {src: 'images/logos/tata.png', alt: 'Tata company logo.'},
        {src: 'images/logos/yale.png', alt: 'Yale university logo.'},
      ],
    };
  },
};
</script>
