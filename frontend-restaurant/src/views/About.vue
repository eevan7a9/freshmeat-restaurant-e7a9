<template>
  <div class="about-wrapper">
    <div class="about-content">
      <section class="container">
        <OurStory />
      </section>
      <section id="whyus">
        <WhyUs />
      </section>
    </div>
    <footer id="footer">
      <div class="container">
        <Footer />
      </div>
    </footer>
  </div>
</template>
<script>
import OurStory from "@/components/about/OurStory.vue";
import WhyUs from "@/components/WhyUs.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    OurStory,
    WhyUs,
    Footer
  }
};
</script>
<style lang="scss" scoped>
$mainColor: #a8890f;
.about-wrapper {
  min-height: 100vh;
  .about-content {
    min-height: 100vh;
  }
  #footer {
    background: $mainColor;
  }
}
</style>