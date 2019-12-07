<template>
  <div class="signature-wrapper">
    <header>Signature Dishes</header>
    <div class="card-wrapper">
      <div class="card" v-for="(dish, index) of signature_dishes" :key="index">
        <div class="card-body">
          <img src="https://via.placeholder.com/250" alt="image" />
          <h1>{{ dish.name }}</h1>
          <p>{{ dish.description }}</p>
          <div>${{ dish.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["signature_dishes"]),
  methods: {
    ...mapActions(["getSignatureDish"])
  },
  created() {
    this.getSignatureDish();
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #a8890f;
.signature-wrapper {
  padding: 3rem 0;
  header {
    font-size: 2rem;
    font-weight: 900;
    font-family: "Anton", sans-serif;
    color: $mainColor;
    text-shadow: 2px 0 #221d1d, 0 1px #827373, 3.5px 3px #443f3c,
      2px 3px #201f1e;
    letter-spacing: 2px;
  }
}
.card-wrapper {
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  .card {
    padding: 1rem;
    .card-body {
      max-width: 300px;
      background: #fff;
      border: 2px solid $mainColor;
      padding-bottom: 1rem;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.62);
        transition: 0.7s;
      }
      img {
        width: 100%;
      }
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
      }
      div {
        padding: 1rem;
        background: $mainColor;
        width: 100px;
        font-weight: 900;
      }
    }
  }
}
</style>