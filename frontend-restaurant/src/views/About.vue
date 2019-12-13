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
      background-image: linear-gradient(
          0deg,
          rgba(21, 20, 21, 0.7),
          rgba(0, 0, 0, 0.3)
        ),
        url("https://ik.imagekit.io/wr5lnrww0q8/restaurant-resource/people-chefs_ytH3lDk9O.jpg");
      /* Full height */
      height: 100%;

      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        font-weight: 600;
        font-size: 2.5rem;
        color: aliceblue;
        font-family: "Anton", sans-serif;
        padding: 11rem 0;
        text-shadow: 2px 0 #221d1d, 0 1px #827373, 3.5px 3px #443f3c,
          2px 3px #201f1e;
        line-height: 3rem;
        text-align: left;
      }
    }
  }
  #footer {
    background: $mainColor;
  }
}
</style>