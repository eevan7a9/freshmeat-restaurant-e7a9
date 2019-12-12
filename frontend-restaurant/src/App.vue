<template>
  <div id="app">
    <Navbar></Navbar>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import url("./assets/reset.css");
@import url("./assets/main.css");
@import url("https://fonts.googleapis.com/css?family=Anton&display=swap");
@import url("https://fonts.googleapis.com/css?family=Archivo+Narrow&display=swap");
@import url("https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap");
</style>
