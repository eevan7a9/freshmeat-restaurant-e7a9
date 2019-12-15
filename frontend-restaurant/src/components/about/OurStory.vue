<template>
  <div class="our-story-wrapper">
    <header>Our Story</header>
    <DotDivider />
    <div class="introduction-wrapper">
      <img src="https://ik.imagekit.io/wr5lnrww0q8/restaurant-resource/people-chefs_ytH3lDk9O.jpg" />
      <div class="introduction">
        <h1>We Started</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quibusdam vel voluptate mollitia culpa! Provident est reprehenderit ad et repellendus nulla cum iusto quos, deserunt ipsam accusantium aperiam aut? Reprehenderit aut voluptas earum expedita nam, enim blanditiis commodi delectus tenetur omnis, cupiditate quasi porro. Maiores similique eligendi dolorum? Sapiente, recusandae.</p>
        <h1>Our Vision</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet temporibus veniam nulla laudantium veritatis iste amet magni earum at.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, nesciunt!</p>
        <h1>Our Mission</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam voluptates perferendis obcaecati! Odit deleniti neque eligendi. Ad praesentium, ipsa officia porro voluptatum, amet at aliquid illum nam officiis rerum maiores cupiditate culpa nisi perspiciatis rem!</p>
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
.our-story-wrapper {
  padding: 130px 0 3rem 0;
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
  .introduction-wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    img {
      grid-column: 1/6;
      width: 100%;
      height: auto;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.62);
    }
    .introduction {
      grid-column: 6/13;
      padding: 1rem;
      h1 {
        font-weight: 600;
        font-size: 18px;
        font-family: "Anton", sans-serif;
        padding: 1rem;
        text-align: left;
      }
      p {
        font-family: "Archivo Narrow", sans-serif;
        padding: 1rem;
        padding-top: 0;
        text-align: left;
        line-height: 20px;
      }
    }
  }
}
@media (max-width: 850px) {
  .our-story-wrapper .introduction-wrapper {
    grid-template-columns: 1fr;
    img {
      grid-column: 1;
    }
    .introduction {
      grid-column: 1;
    }
  }
}
</style>