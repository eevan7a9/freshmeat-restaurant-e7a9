<template>
  <div class="reservation-wrapper">
    <div class="reservation-content">
      <section id="makeReservation">
        <MakeReservation />
      </section>
    </div>
    <section id="footer">
      <div class="container">
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import MakeReservation from "@/components/MakeReservation.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    MakeReservation,
    Footer
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #a8890f;
.reservation-wrapper {
  .reservation-content {
    background: url("https://ik.imagekit.io/wr5lnrww0q8/restaurant-resource/brick-wall_N1uwkzJdG.jpg");
    background-size: cover;
    background-position: bottom;
    padding-bottom: 3rem;
    min-height: 100vh;
  }
  #footer {
    // margin-top: 2.5rem;
    background: $mainColor;
  }
}
</style>