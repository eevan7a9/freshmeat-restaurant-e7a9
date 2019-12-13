<template>
  <div class="chefs">
    <div v-for="chef in chefs" :key="chef.id" class="card">
      <div class="img-container">
        <img :src="chef.image_src" alt />
      </div>
      <div class="chef-info">
        <h1>{{ chef.name }}</h1>
        <h2>{{ chef.role }}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, molestiae amet tempore nulla quaerat assumenda architecto pariatur totam doloribus corrupti?</p>
      </div>
    </div>
  </div>
</template>

<script>
import Restaurant from "@/assets/restaurant.json";
export default {
  data() {
    return {
      chefs: Restaurant["chefs"]
    };
  },
  created() {
    console.log(this.chefs);
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #a8890f;
.chefs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  margin-bottom: 5rem;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #333;
    width: 100%;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.62);
    .img-container {
      width: 100%;
      height: 400px;
      img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .chef-info {
      background: #fff;
      border: 25px solid #b88846;
      border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E")
        25;
      max-width: 100%;
      h1 {
        font-weight: 900;
        font-size: 20px;
        padding: 1rem;
        text-shadow: 0px 0px 0px #a48474, -1px -1px 0px #392d2a,
          1px -1px 1px #413f3f, -1px 1px 1px #413f3f, 0px 0px 0px #413f3f;
        color: $mainColor;
      }
      h2 {
        padding: 10px;
      }
      p {
        text-align: left;
        padding: 0 2rem;
        color: #333;
        font-family: "Archivo Narrow", sans-serif;
        letter-spacing: 2px;
        line-height: 20px;
      }
    }
  }
}
@media (max-width: 800px) {
  .chefs {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
  }
}
@media (max-width: 500px) {
  .chefs {
    grid-template-columns: 1fr;
  }
}
</style>