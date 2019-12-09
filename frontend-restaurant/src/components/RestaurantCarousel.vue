<template>
  <div class="carousel-wrapper">
    <carousel
      :per-page="1"
      :navigationEnabled="true"
      :navigationClickTargetSize="21"
      :mouse-drag="true"
      paginationPosition="bottom"
      :centerMode="true"
      :autoplay="true"
      :autoplayTimeout="4000"
      :loop="true"
      paginationColor="#333"
      paginationActiveColor="aliceblue"
      class="inner-carousel"
    >
      <slide v-for="carousel in carousel_items" v-bind:key="carousel.id">
        <div
          class="img-container"
          :style="{'background-image': 'url(' + require('../assets/images/' + carousel.img_src)+')'}"
        >
          <div class="text-container">
            <header>{{ carousel.header }}</header>
            <p>{{ carousel.text }}</p>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Restaurant from "@/assets/restaurant.json";
export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      carousel_items: []
    };
  },
  created() {
    this.carousel_items = Restaurant["carousel"];
  }
};
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  // background: #333;
  padding: 2rem 2rem 0 2rem;
  .img-container {
    height: 700px;
    width: 100%;
    background-size: cover;
    background-position: center;
    cursor: move;
    .text-container {
      background: rgba(0, 0, 0, 0.281);
      bottom: 0;
      width: 100%;
      padding: 2rem;
      position: absolute;
      header {
        font-weight: 700;
        color: aliceblue;
        text-shadow: 2px 0 #221d1d, 0 1px #827373, 3.5px 3px #443f3c,
          2px 3px #201f1e;
        font-size: 2rem;
        font-family: "Anton", sans-serif;
        margin-bottom: 1rem;
      }
      p {
        color: aliceblue;
        font-weight: 600;
        text-shadow: 0px 0px 0px #a48474, -1px -1px 0px #392d2a,
          1px -1px 1px #413f3f, -1px 1px 1px #413f3f, 0px 0px 0px #413f3f;
        letter-spacing: 2px;
      }
    }
  }
}
</style>