<template>
  <div class="chefs-wrapper">
    <header>Our Top Chefs</header>
    <DotDivider />
    <div class="chef">
      <img src="@/assets/images/chef-woman.png" />
      <div class="chef-info">
        <h1>Jane Doe</h1>
        <h2>Head Chef</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odio nemo numquam molestias earum voluptatem suscipit exercitationem repellendus quidem commodi repellat aliquid cum explicabo reiciendis fuga illo? Dolores, sint reprehenderit.</p>
      </div>
    </div>
    <div class="chef">
      <img src="@/assets/images/chef-redhat.png" />
      <div class="chef-info">
        <h1>Jasmine Smith</h1>
        <h2>Sous Chef</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias sapiente tenetur architecto quas minus aliquid dolore consequuntur optio dolor veniam tempore, totam similique sint.</p>
      </div>
    </div>
    <button>
      TEAM
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="13 17 18 12 13 7" />
        <polyline points="6 17 11 12 6 7" />
      </svg>-->
    </button>
  </div>
</template>

<script>
import DotDivider from "@/components/DotDivider.vue";
export default {
  components: {
    DotDivider
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #a8890f;
.chefs-wrapper {
  padding: 3rem 0;
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
  .chef {
    display: grid;
    grid-template-columns: 190px 1fr;
    background: #333;
    border: 3px $mainColor solid;
    max-width: 900px;
    padding-right: 2rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 5rem;
    .chef-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(5, 5, 5, 0.082);
      border: 25px solid #b88846;
      border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E")
        25;
      height: 50%;
      margin-top: auto;
      margin-bottom: auto;
      h1 {
        font-size: 2rem;
        font-weight: 900;
        text-shadow: 2px 0 rgb(0, 0, 0), 0 1px #827373, 3.5px 3px #443f3c,
          2px 3px #201f1e;
        color: $mainColor;
        font-family: "Archivo Narrow", sans-serif;
      }
      h2 {
        color: aliceblue;
        font-size: 16px;
        font-weight: 900;
        padding: 10px 0 1rem 0;
      }
      p {
        padding: 0 2rem;
        color: aliceblue;
        font-family: "Archivo Narrow", sans-serif;
        text-shadow: 0px 0px 0px #a48474, -1px -1px 0px #392d2a,
          1px -1px 1px #413f3f, -1px 1px 1px #413f3f, 0px 0px 0px #413f3f;
        letter-spacing: 2px;
        line-height: 20px;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.459);
        transition: 0.5s;
      }
    }
  }
  button {
    background: #333;
    border: 3px solid $mainColor;
    padding: 10px 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    font-family: "Anton", sans-serif;
    font-weight: bold;
    font-size: 25px;
    color: $mainColor;
    text-shadow: 0px 0px 0px #a48474, -1px -1px 0px #392d2a,
      1px -1px 1px #413f3f, -1px 1px 1px #413f3f, 0px 0px 0px #413f3f;
    letter-spacing: 2px;
    svg {
      margin-left: 3px;
    }
    &:hover {
      background: aliceblue;
      transition: 1s;
    }
  }
}
</style>