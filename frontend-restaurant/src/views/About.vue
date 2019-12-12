<template>
  <div class="about-wrapper">
    <div class="about-content">
      <div class="container">
        <OurStory />
      </div>
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
import Footer from "@/components/Footer.vue";
export default {
  components: {
    OurStory,
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