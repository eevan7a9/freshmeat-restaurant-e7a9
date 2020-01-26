<template>
  <div class="whyus-wrapper">
    <div class>
      <header>Why us?</header>
      <DotDivider />
      <div class="parallax">
        <div class="inner-whyus">
          <div
            class="info"
            data-aos="zoom-out-down"
            data-aos-duration="800"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-easing="linear"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="bottom"
          >
            <img src="@/assets/images/chef.svg" alt srcset />
            <div class="left">
              <h1>Delicious</h1>
              <h2>Experienced and high level Chefs</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quo veritatis exercitationem dicta ipsam in nisi rerum laborum tempora labore!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis sequi aut tempore quas suscipit!</p>
            </div>
          </div>
          <div
            class="info"
            data-aos="zoom-out-down"
            data-aos-duration="800"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="bottom"
          >
            <div class="right">
              <h1>Healthy</h1>
              <h2>100% Non-GMO Ingredients</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere cupiditate labore pariatur accusantium. Quo quidem voluptatum tempore eius distinctio? Hic ullam maxime perspiciatis sit vitae excepturi, id saepe nostrum.</p>
            </div>
            <img src="@/assets/images/doctor.svg" alt srcset />
          </div>
          <div
            class="info"
            data-aos="zoom-out-down"
            data-aos-duration="800"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-easing="ease-out-sine"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="bottom"
          >
            <img src="@/assets/images/waitress.svg" alt srcset />
            <div class="left">
              <h1>Customer Service</h1>
              <h2>Prompt and Attentive</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quam dicta reprehenderit repudiandae nostrum iure vel commodi sapiente eveniet incidunt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DotDivider from "@/components/DotDivider.vue";
export default {
  components: {
    DotDivider
  }
};
</script>
<style lang="scss" scoped>
$mainColor: #a8890f;

.whyus-wrapper {
  background: aliceblue;
  padding-top: 4rem;
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
  .parallax {
    background-image: url("https://ik.imagekit.io/wr5lnrww0q8/restaurant-resource/bg-1200_KhS-Mlk8m.jpg");
    /* Full height */
    height: 100%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .inner-whyus {
      padding: 5rem 2rem;
    }
  }
  .info {
    display: grid;
    max-width: 1100px;
    grid-template-columns: auto auto;
    background: rgba(0, 0, 0, 0.274);
    border: 3px solid $mainColor;
    padding: 1rem 10px;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px rgba(107, 79, 37, 0.91);
    margin-bottom: 2rem;
    // background: aliceblue;
    img {
      max-height: 300px;
      width: 300px;
      background: #e0dbb6;
      border-radius: 50%;
      border: 3px solid $mainColor;
    }
    h1 {
      font-family: "Anton", sans-serif;
      font-size: 27px;
      color: aliceblue;
      //   color: $mainColor;
      letter-spacing: 1.5px;
      padding: 1rem 0;
    }
    h2 {
      font-size: 20px;
      color: #c69f07;
      font-family: "Bebas Neue", cursive;
      background: #110c0594;
      font-weight: bolder;
      text-shadow: 0px 0px 0px #a48474, -1px -1px 0px #110c05, 1px -1px 1px #000,
        -1px 1px 1px #000, 0px 0px 0px #413f3f;
      padding: 1rem;
      letter-spacing: 2px;
    }
    p {
      padding: 1rem;
      background: #110c0594;
      font-family: "Archivo Narrow", sans-serif;
      font-size: 17px;
      color: aliceblue;
      line-height: 20px;
      font-family: "Archivo Narrow", sans-serif;
      text-shadow: 0px 0px 0px #a48474, -1px -1px 0px #392d2a,
        1px -1px 1px #413f3f, -1px 1px 1px #413f3f, 0px 0px 0px #413f3f;
      letter-spacing: 2px;
      //   color: $mainColor;
      font-weight: 600;
    }

    .left {
      text-align: left;
      p,
      h2 {
        margin-left: 1rem;
      }
    }
    .right {
      text-align: right;
      p,
      h2 {
        margin-right: 1rem;
      }
    }
    &:hover {
      background: rgba(15, 15, 15, 0.753);
      transition: 1s;
      p,
      h2 {
        background: none;
        transition: 1s;
      }
    }
  }
}
@media (max-width: 800px) {
  .whyus-wrapper .info {
    grid-template-columns: 1fr;
    // text-align: center;
    align-items: center;
    justify-items: center;
    img {
      order: 1;
    }
    .left,
    .right {
      text-align: center;
      order: 2;
    }
  }
}
</style>