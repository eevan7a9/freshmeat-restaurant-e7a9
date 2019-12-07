<template>
  <div class="home">
    <Showcase />
  </div>
</template>

<script>
// @ is an alias to /src
import Showcase from "@/components/home/Showcase.vue";
export default {
  name: "home",
  components: {
    Showcase
  }
};
</script>
