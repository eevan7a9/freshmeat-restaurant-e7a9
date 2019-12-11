<template>
  <div class="make-reservation-wrapper">
    <header>Make Reservation</header>
    <DotDivider />
  </div>
</template>

<script>
import DotDivider from "@/components/DotDivider.vue";
export default {
  components: {
    DotDivider
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #a8890f;
.make-reservation-wrapper {
  padding: 2rem 0;
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
</style>