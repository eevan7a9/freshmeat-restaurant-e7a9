<template>
  <div class="footer-wrapper">
      <div class="items">
          <header>Title</header>
      </div>
      <div class="items">
          <header>Title</header>
      </div>
      <div class="items">
          <header>Title</header>
      </div>
      <div class="items">
          <header>Title</header>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer-wrapper{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>