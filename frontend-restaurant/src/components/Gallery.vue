<template>
  <div class="gallery-wrapper">
    <div class="gallery container">
      <div
        class="images"
        v-for="(image, index) in images"
        :key="index"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="bottom"
      >
        <img :src="image.small" @click="selectImage(index)" />
      </div>
    </div>
    <!-- imageShown -->
    <transition name="fade">
      <div class="light-box" @click="closeLightbox" v-if="showImage">
        <svg
          @click.stop="toggleLeft"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="11 17 6 12 11 7" />
          <polyline points="18 17 13 12 18 7" />
        </svg>
        <transition name="slide-fade" mode="out-in">
          <div :key="currentIndex">
            <img :src="showImage" />
          </div>
        </transition>
        <svg
          @click.stop="toggleRight"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="13 17 18 12 13 7" />
          <polyline points="6 17 11 12 6 7" />
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>
import Restaurant from "@/assets/restaurant.json";
export default {
  data() {
    return {
      images: Restaurant["gallery"],
      showImage: undefined,
      currentIndex: 0
    };
  },
  methods: {
    selectImage(index) {
      this.showImage = this.images[index].large;
      this.currentIndex = index;
    },
    toggleLeft() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.images.length - 1;
      }
      this.showImage = this.images[this.currentIndex].large;
    },
    toggleRight() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.showImage = this.images[this.currentIndex].large;
    },
    closeLightbox() {
      this.showImage = "";
      this.currentIndex = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #a8890f;
.gallery-wrapper {
  padding: 3rem 0;
  .gallery {
    // background: aliceblue;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    // border: 5px solid aliceblue;
    // grid-column-gap: 10px;
    align-items: center;
    .images {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: auto;
        cursor: pointer;
        width: 100%;
        opacity: 85%;
        border: 5px solid aliceblue;
        &:hover {
          opacity: 100%;
          transition: 0.5s;
          // border: 5px solid aliceblue;
          border: none;
          margin: 5px 0;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.62);
          width: 90%;
        }
      }
    }
  }
  .light-box {
    background: #000000ab;
    position: fixed;
    top: 0;
    z-index: 9999;
    height: 100vh;
    width: 100%;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      height: auto;
      width: 500px;
      background: aliceblue;
      padding: 1rem;
    }
    svg {
      color: aliceblue;
      width: 30px;
      height: 30px;
      stroke-width: 3px;
      padding: 1rem;
      cursor: pointer;
    }
  }
}
</style>