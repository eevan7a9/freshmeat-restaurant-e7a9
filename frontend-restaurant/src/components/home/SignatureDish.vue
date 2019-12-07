<template>
  <div class="signature-wrapper">
    <header>Signature Dish</header>
    <div class="card">
      <h1>Something</h1>
    </div>
    <div>
      <h1>Something</h1>
    </div>
    <div>
      <h1>Something</h1>
    </div>
  </div>
</template>

<script>
export default {};
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
.card {
  width: 300px;
  padding: 1rem;
  background: #fff;
  border: 2px solid $mainColor;
}
</style>