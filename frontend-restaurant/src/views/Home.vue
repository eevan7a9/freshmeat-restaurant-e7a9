<template>
  <div class="home">
    <section id="showcase">
      <Showcase :scrollTarget="'#gallery'" @scrollTo="scrollTo" />
    </section>
    <div class="gallery-wrapper" id="gallery"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Showcase from "@/components/home/Showcase.vue";
export default {
  name: "home",
  components: {
    Showcase
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
.gallery-wrapper {
  height: 900px;
  background: red;
}
</style>