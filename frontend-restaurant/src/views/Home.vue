<template>
  <div class="home">
    <section id="showcase">
      <Showcase :scrollTarget="'#signature_dish'" @scrollTo="scrollTo" />
    </section>
    <section id="signature_dish">
      <div class="container">
        <SignatureDish />
      </div>
    </section>

    <section id="schedule">
      <div class="container">
        <Schedule />
      </div>
      <div class="skew-c"></div>
    </section>

    <section id="whyus">
      <WhyUs />
    </section>
    <div class="skew-c-2"></div>
    <section id="carousel">
      <div class="container">
        <RestaurantCarousel />
      </div>
    </section>

    <section id="chefs">
      <div class="container">
        <TopChefs />
      </div>
    </section>
    <div class="skew-cc"></div>

    <section id="gallery">
      <Gallery />
    </section>
    <section id="makeReservation">
      <MakeReservation :pulse="1" />
    </section>
    <section id="footer">
      <div class="container">
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Showcase from "@/components/home/Showcase.vue";
import SignatureDish from "@/components/SignatureDish.vue";
import Schedule from "@/components/Schedule.vue";
import WhyUs from "@/components/WhyUs.vue";
import RestaurantCarousel from "@/components/RestaurantCarousel";
import TopChefs from "@/components/team/TopChefs.vue";
import Gallery from "@/components/Gallery.vue";
import MakeReservation from "@/components/MakeReservation.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "home",
  components: {
    Showcase,
    SignatureDish,
    Schedule,
    WhyUs,
    RestaurantCarousel,
    TopChefs,
    Gallery,
    MakeReservation,
    Footer
  },
  methods: {
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({
        behavior: "smooth"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
$mainColor: #a8890f;
.home {
  background: aliceblue;
  #signature_dish {
    background: url("https://ik.imagekit.io/wr5lnrww0q8/restaurant-resource/snow-bg_5m8MHYLai.png");
    background-size: cover;
    background-position: bottom;
  }
  #schedule,
  #carousel,
  #gallery,
  #footer {
    background: $mainColor;
  }
  #schedule {
    margin-bottom: 4rem;
  }
  #whyus {
    padding-bottom: 10rem;
  }
  #carousel {
    padding-top: 5rem;
    padding-bottom: 2rem;
  }
  #gallery {
    padding-top: 5rem;
  }
  #makeReservation {
    background-image: url("https://ik.imagekit.io/wr5lnrww0q8/restaurant-resource/bg-1200_KhS-Mlk8m.jpg");
    /* Full height */
    height: 100%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  /*------------------*/
  /*  SKEW CLOCKWISE  */
  /*------------------*/
  .skew-cc {
    width: 100%;
    height: 100px;
    position: absolute;
    left: 0px;
    background: linear-gradient(to right bottom, aliceblue 49%, $mainColor 50%),
      linear-gradient(-50deg, $mainColor 16px, #000 0);
  }
  .skew-cc-2 {
    width: 100%;
    height: 100px;
    position: absolute;
    left: 0px;
    background: linear-gradient(to right bottom, $mainColor 49%, aliceblue 50%),
      linear-gradient(-50deg, aliceblue 16px, #000 0);
  }

  /*-------------------------*/
  /* SKEW COUNTER CLOCKWISE  */
  /*-------------------------*/
  .skew-c {
    width: 100%;
    height: 100px;
    position: absolute;
    left: 0px;
    background: linear-gradient(to left bottom, $mainColor 49%, aliceblue 50%);
  }
  .skew-c-2 {
    width: 100%;
    height: 100px;
    position: absolute;
    left: 0px;
    background: linear-gradient(to left bottom, aliceblue 49%, $mainColor 50%);
  }
}
</style>