<template>
  <div class="whyus-wrapper">
    <div class="container">
      <header>Why us?</header>
      <div class="info">
        <img src="@/assets/images/chef.svg" alt srcset />
        <div class="left">
          <h1>Delicious</h1>
          <h2>Experienced and high level Chefs</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quo veritatis exercitationem dicta ipsam in nisi rerum laborum tempora labore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis sequi aut tempore quas suscipit!</p>
        </div>
      </div>
      <div class="info">
        <div class="right">
          <h1>Healthy</h1>
          <h2>100% Non-GMO Ingredients</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere cupiditate labore pariatur accusantium. Quo quidem voluptatum tempore eius distinctio? Hic ullam maxime perspiciatis sit vitae excepturi, id saepe nostrum.</p>
        </div>
        <img src="@/assets/images/doctor.svg" alt srcset />
      </div>
      <div class="info">
        <img src="@/assets/images/waitress.svg" alt srcset />
        <div class="left">
          <h1>Customer Service</h1>
          <h2>Prompt and Attentive</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quam dicta reprehenderit repudiandae nostrum iure vel commodi sapiente eveniet incidunt.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
$mainColor: #a8890f;

.whyus-wrapper {
  margin-top: 4rem;
  padding: 4rem 0;
  header {
    font-size: 2rem;
    font-weight: 900;
    text-transform: uppercase;
    font-family: "Anton", sans-serif;
    color: $mainColor;
    text-shadow: 2px 0 #221d1d, 0 1px #827373, 3.5px 3px #443f3c,
      2px 3px #201f1e;
    letter-spacing: 5px;
    margin-bottom: 2rem;
  }
  .info {
    display: grid;
    grid-template-columns: auto auto;
    // background: aliceblue;
    img {
      max-height: 300px;
      width: 300px;
      background: rgba(240, 248, 255, 0.205);
      border-radius: 50%;
    }
    h1 {
      font-family: "Anton", sans-serif;
      font-size: 22px;
      //   color: $mainColor;
      padding: 1rem 0;
    }
    h2 {
      font-size: 18px;
      color: $mainColor;
      font-family: "Archivo Narrow", sans-serif;
      text-decoration: underline;
      padding: 1rem;
    }
    p {
      padding: 0 1rem;
      font-family: "Archivo Narrow", sans-serif;
      font-size: 17px;
      //   color: $mainColor;
      font-weight: 600;
    }

    .left {
      text-align: left;
    }
    .right {
      text-align: right;
    }
  }
}
</style>