import { defineClientAppEnhance } from "@vuepress/client";
import Navbar from "./theme/components/Navbar.vue";
import FooterCta from "./theme/components/FooterCta.vue";
import Footer from "./theme/components/Footer.vue";
import Subscribe from "./theme/components/Subscribe.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("Navbar", Navbar);
  app.component("FooterCta", FooterCta);
  app.component("Footer", Footer);
  app.component("Subscribe", Subscribe);
});
