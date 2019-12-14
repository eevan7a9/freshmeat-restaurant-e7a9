<template>
  <div class="team-wrapper">
    <header>Our Staff</header>
    <DotDivider />
    <div class="team-content container">
      <Chefs />
      <TopChefs />
    </div>
    <section id="footer">
      <div class="container">
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import DotDivider from "@/components/DotDivider.vue";
import Chefs from "@/components/team/Chefs.vue";
import TopChefs from "@/components/team/TopChefs.vue";
import Footer from "@/components/Footer.vue";
import { mapActions } from "vuex";
export default {
  components: {
    DotDivider,
    Chefs,
    TopChefs,
    Footer
  },
  methods: {
    ...mapActions(["withColor"]),
    submit() {}
  },
  created() {
    this.withColor();
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #a8890f;
.team-wrapper {
  padding-top: 130px;
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
}
#footer {
  // margin-top: 2.5rem;
  background: $mainColor;
}
</style>