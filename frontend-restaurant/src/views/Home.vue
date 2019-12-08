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
    </section>
    <section id="whyus">
      <WhyUs />
    </section>
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
}
</style>