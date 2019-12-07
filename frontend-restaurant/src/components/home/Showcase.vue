<template>
  <div class="showcase-wrapper">
    <div class="img-wrapper">
      <img src="~@/assets/images/showcase_img.png" />
    </div>
    <div class="showcase-texts">
      <h1>100% Non-GMO</h1>
      <h2>I want more, I want food. Fresh Food - it's like heaven!</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "Showcase"
};
</script>
<style lang="scss" scoped>
.showcase-wrapper {
  padding: 100px 0 50px 0;
  min-height: calc(100vh - 230px);
  background: url("~@/assets/images/bg-restaurant.jpg");

  background-size: cover;
  align-items: center;
  .img-wrapper {
    text-align: center;
    max-width: 100%;
    img {
      background: #0f0e0f36;
      border-radius: 50%;
    }
  }
  .showcase-texts {
    h1 {
      padding-top: 2rem;
      font-family: "Anton", sans-serif;
      font-size: 4rem;
      color: #c8530e;
      text-shadow: 2px 0 #221d1d, 0 1px #827373, 3.5px 3px #443f3c,
        2px 3px #201f1e;
    }
    h2 {
      color: white;
      text-shadow: 4px 0 #221d1d, 0 1px #201c1c, 0.5px 0 #443f3c,
        2px 4px #201f1e;
      font-size: 2rem;
      padding-top: 1rem;
    }
  }
}
</style>