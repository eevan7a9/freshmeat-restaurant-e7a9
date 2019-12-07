<template>
  <div class="home">
    <section id="showcase">
      <Showcase :scrollTarget="'#gallery'" @scrollTo="scrollTo" />
    </section>
    <div class="container" id="gallery">
      <SignatureDish />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Showcase from "@/components/home/Showcase.vue";
import SignatureDish from "@/components/home/SignatureDish.vue";
export default {
  name: "home",
  components: {
    Showcase,
    SignatureDish
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