<template>
  <div class="wrapper">
    <div class="divider div-transparent div-dot"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  padding-bottom: 90px;
}

.divider {
  position: relative;
  margin-top: 0px;
  height: 1px;
}

.div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 3px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
}

.div-dot:after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -9px;
  left: calc(50% - 9px);
  width: 18px;
  height: 18px;
  background-color: goldenrod;
  border: 2px solid rgb(48, 49, 51);
  border-radius: 10%;
  box-shadow: inset 0 0 0 2px white, 0 0 0 4px white;
}
</style>