<template>
  <div class="about-wrapper">
    <div class="about-content">
      <section class="container">
        <OurStory />
      </section>
      <section class="motto">
        <h1>"We built our reputation by taking care of our customers, with healthy foods."</h1>
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
    .motto {
      height: 350px;
      background-image: url("https://ik.imagekit.io/wr5lnrww0q8/restaurant-resource/bg-restaurant_RyZTyT0GE.jpg");
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        font-weight: 600;
        font-size: 2.5rem;
        color: aliceblue;
        font-family: "Anton", sans-serif;
        padding: 1rem;
        text-shadow: 2px 0 #221d1d, 0 1px #827373, 3.5px 3px #443f3c,
          2px 3px #201f1e;
        text-align: left;
      }
    }
  }
  #footer {
    background: $mainColor;
  }
}
</style>