<template>
  <div class="home">
    <section id="showcase">
      <Showcase :scrollTarget="'#signature_dish'" @scrollTo="scrollTo" />
    </section>
    <section class="container" id="signature_dish">
      <SignatureDish />
    </section>
    <section class="container" id="schedule">
      <Schedule />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Showcase from "@/components/home/Showcase.vue";
import SignatureDish from "@/components/SignatureDish.vue";
import Schedule from "@/components/Schedule.vue";
export default {
  name: "home",
  components: {
    Showcase,
    SignatureDish,
    Schedule
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
.home {
  background: aliceblue;
}
</style>