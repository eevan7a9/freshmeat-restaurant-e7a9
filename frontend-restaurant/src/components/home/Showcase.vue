<template>
  <div class="showcase-wrapper">
    <div class="img-wrapper">
      <img src="https://ik.imagekit.io/wr5lnrww0q8/restaurant-resource/showcase_img_ad8muMdxR.png" />
    </div>
    <div class="showcase-texts">
      <h1>100% Non-GMO</h1>
      <h2>I want more, I want food. Fresh Food - it's like heaven!</h2>
    </div>
    <SocialIcons class="social-icons" />
    <router-link to="/reservation">
      <button>Reservation</button>
    </router-link>
    <MouseScroller @scrollTo="scrollTo" :target="scrollTarget" />
  </div>
</template>
<script>
import SocialIcons from "@/components/contact/SocialIcons";
import MouseScroller from "@/components/MouseScroller";
export default {
  name: "Showcase",
  props: {
    scrollTarget: String
  },
  components: {
    SocialIcons,
    MouseScroller
  },
  methods: {
    scrollTo() {
      this.$emit("scrollTo", this.scrollTarget);
    }
  }
};
</script>
<style lang="scss" scoped>
$mainColor: #a8890f;
.showcase-wrapper {
  padding: 130px 0 50px 0;
  min-height: calc(100vh - 100px);
  background-image: url("https://ik.imagekit.io/wr5lnrww0q8/restaurant-resource/bg-1200_KhS-Mlk8m.jpg");
  /* Full height */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  overflow: hidden;

  .img-wrapper {
    text-align: center;
    padding: 0 1rem;
    img {
      background: #0f0e0f36;
      border-radius: 50%;
      max-width: 100%;
      height: auto;
      animation: float 6s ease-in-out infinite;
    }
    // img:hover {
    //   background: none;
    //   transition: 0.5s;
    // }
  }
  .showcase-texts {
    h1 {
      padding-top: 1rem;
      font-family: "Anton", sans-serif;
      font-size: 3rem;
      color: $mainColor;
      text-shadow: 2px 0 #221d1d, 0 1px #827373, 3.5px 3px #443f3c,
        2px 3px #201f1e;
    }
    h2 {
      color: white;
      text-transform: uppercase;
      text-shadow: 1px 0 #221d1d, 0 1px #201c1c, 0.5px 0 #443f3c,
        2px 3px #201f1e;
      font-size: 20px;
      padding-top: 1rem;
    }
  }
  button {
    background: $mainColor;
    color: aliceblue;
    padding: 1rem;
    font-weight: bold;
    font-family: "Archivo Narrow", sans-serif;
    border: 2px solid aliceblue;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
  }
  button:hover {
    background: aliceblue;
    transition: 1s;
    color: $mainColor;
    border-color: $mainColor;
  }
  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatex(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatex(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatex(0px);
    }
  }
  .social-icons {
    padding: 1.5rem 0;
  }
}
</style>