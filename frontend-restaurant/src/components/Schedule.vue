<template>
  <div class="schedule-wrapper">
    <header>We Are Open</header>
    <div class="schedules">
      <p :class="currentDay === 1 ? 'active' : ''">Monday : 6:30 AM - 10:30 PM</p>
      <p :class="currentDay === 2 ? 'active' : ''">Tuesday : 7:30 AM - 10:30 PM</p>
      <p :class="currentDay === 3 ? 'active' : ''">Wednesday : 7:30 AM - 10:30 PM</p>
      <p :class="currentDay === 4 ? 'active' : ''">Thursday : 7:30 AM - 10:30 PM</p>
      <p :class="currentDay === 5 ? 'active' : ''">Friday : 7:30 AM - 3:00 AM</p>
      <p :class="currentDay === 6 ? 'active' : ''">Saturday : 12:30 PM - 9:30 PM</p>
      <p :class="currentDay === 0 ? 'active' : ''">Sunday : 6:30 AM - 8:30 PM</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDay: new Date().getDay()
    };
  }
};
</script>

<style lang="scss" scoped>
$mainColor: aliceblue;
.schedule-wrapper {
  padding: 3rem 0;
  header {
    font-size: 2rem;
    font-weight: 900;
    font-family: "Anton", sans-serif;
    text-transform: uppercase;
    color: $mainColor;
    text-shadow: 2px 0 #221d1d, 0 1px #827373, 3.5px 3px #443f3c,
      2px 3px #201f1e;
    letter-spacing: 5px;
  }
  .schedules {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 10px;
    p {
      font-family: "Archivo Narrow", sans-serif;
      font-size: 18px;
      font-weight: 900;
      border: 2px solid $mainColor;
      padding: 1rem;
      color: $mainColor;
    }
    p.active {
      background: $mainColor;
      color: #a8890f;
      animation: pulsate 1s ease-out infinite;
      opacity: 0.5;
    }
  }
}
</style>