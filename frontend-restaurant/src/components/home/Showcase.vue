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
  background-image: url("~@/assets/images/bg-restaurant.jpg");
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
      padding-top: 2rem;
      font-family: "Anton", sans-serif;
      font-size: 3rem;
      color: #a8890f;
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
    background: #a8890f;
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
    color: #a8890f;
    border-color: #a8890f;
    padding-left: 2rem;
    font-weight: 700;
    padding-right: 2rem;
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
}
</style>