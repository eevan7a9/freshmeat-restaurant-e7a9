<template>
  <div class="home">
    <section id="showcase">
      <Showcase :scrollTarget="'#signature_dish'" @scrollTo="scrollTo" />
    </section>
    <section class="container" id="signature_dish">
      <SignatureDish />
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
  </div>
</template>

<script>
// @ is an alias to /src
import Showcase from "@/components/home/Showcase.vue";
import SignatureDish from "@/components/SignatureDish.vue";
import Schedule from "@/components/Schedule.vue";
import WhyUs from "@/components/WhyUs.vue";
import RestaurantCarousel from "@/components/RestaurantCarousel";
export default {
  name: "home",
  components: {
    Showcase,
    SignatureDish,
    Schedule,
    WhyUs,
    RestaurantCarousel
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
  #schedule,
  #carousel {
    background: $mainColor;
  }
  #carousel {
    padding-top: 10rem;
    padding-bottom: 1rem;
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