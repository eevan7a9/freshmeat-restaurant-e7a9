<template>
  <div class="showcase-wrapper">
    <div class="img-wrapper">
      <img src="~@/assets/images/showcase_img.png" />
    </div>
    <div class="showcase-texts">
      <h1>100% Non-GMO</h1>
      <h2>I want more, I want food. Fresh Food - it's like heaven!</h2>
    </div>
    <SocialIcons />
    <button>Reservation</button>
  </div>
</template>
<script>
import SocialIcons from "@/components/contact/SocialIcons";
export default {
  name: "Showcase",
  components: {
    SocialIcons
  }
};
</script>
<style lang="scss" scoped>
.showcase-wrapper {
  padding: 80px 0 50px 0;
  min-height: calc(100vh - 210px);
  background: url("~@/assets/images/bg-restaurant.jpg");

  background-size: cover;
  align-items: center;
  .img-wrapper {
    text-align: center;
    padding: 0 1rem;
    img {
      background: #0f0e0f36;
      border-radius: 50%;
      max-width: 100%;
      height: auto;
    }
    // img:hover {
    //   background: none;
    //   transition: 0.5s;
    // }
  }
  .showcase-texts {
    h1 {
      padding-top: 2rem;
      font-family: "Anton", sans-serif;
      font-size: 3rem;
      color: #c8530e;
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
    background: #c8530e;
    color: aliceblue;
    padding: 1rem;
    border: 2px solid aliceblue;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
  }
  button:hover {
    background: aliceblue;
    transition: 1s;
    color: #c8530e;
    border-color: #c8530e;
    padding-left: 2rem;
    font-weight: 700;
    padding-right: 2rem;
  }
}
</style>