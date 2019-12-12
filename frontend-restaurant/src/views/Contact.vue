<template>
  <div class="contact-wrapper">
    <div class="contact-content">
      <header>Contact us</header>
      <DotDivider />
      <SocialIcons />
      <form @submit.prevent="submit">
        <div class="contact-form">
          <div class="input-form">
            <label>Name</label>
            <input type="text" v-model="form.name" placeholder="eg. John Doe" />
          </div>
          <div class="input-form">
            <label>email</label>
            <input type="email" v-model="form.email" placeholder="eg. Johndoe@email.com" />
          </div>
          <div class="text-form">
            <label>Message</label>
            <textarea v-model="form.message" placeholder="Hello, we..."></textarea>
          </div>
          <button type="submit">SEND</button>
        </div>
      </form>
      <div class="address-info">
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>Street. Kurfürstendamm 64, City Rostock Mecklenburg-Vorpommern
        </h1>
      </div>
      <Map />
    </div>
    <section id="footer">
      <div class="container">
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import Map from "@/components/contact/Map.vue";
import SocialIcons from "@/components/contact/SocialIcons.vue";
import DotDivider from "@/components/DotDivider.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    DotDivider,
    SocialIcons,
    Map,
    Footer
  },
  data() {
    return {
      form: {}
    };
  },
  methods: {
    submit() {}
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #a8890f;
.contact-wrapper {
  background: url("https://cdn.pixabay.com/photo/2015/10/12/15/10/road-984251_960_720.jpg");
  background-position: bottom;
  background-size: cover;
  padding-top: 5rem;
  font-family: "Bebas Neue", cursive;
  header {
    font-size: 2rem;
    font-weight: 900;
    text-transform: uppercase;
    font-family: "Anton", sans-serif;
    color: $mainColor;
    text-shadow: -3px 0 #f0efef, 0 1px #f4f1f1, 3.5px 3px #998c8c,
      2px 3px #847f7a;
    letter-spacing: 5px;
    margin-bottom: 2rem;
  }
  .contact-content {
    min-height: 90vh;
    .contact-form {
      margin-top: 2rem;
      margin-bottom: 2rem;
      max-width: 500px;
      padding: 2rem 2rem;
      margin-right: auto;
      margin-left: auto;
      border: 3px solid $mainColor;
      background: #110c059d;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.62);
      label {
        font-size: 20px;
        color: $mainColor;
        font-weight: 900;
        text-shadow: 0px 0px 0px #a48474, -1px -1px 0px #110c05,
          1px -1px 1px #413f3f, -1px 1px 1px #ffd805, 0px 0px 0px #413f3f;
        padding: 1rem;
        letter-spacing: 2px;
      }
      .input-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        label {
          width: 100px;
          text-align: center;
        }
        input {
          width: 100%;
          border: none;
          border-bottom: 3px solid $mainColor;
          text-align: center;
          background: aliceblue;
          padding: 1rem 10px;
        }
      }
      .text-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        textarea {
          width: 100%;
          font-size: 17px;
          border: none;
          border-bottom: 3px solid $mainColor;
          text-align: left;
          background: aliceblue;
          padding: 1rem 10px;
        }
      }
      button {
        margin-top: 10px;
        padding: 1rem 2rem;
        background: $mainColor;
        border-radius: 10%;
        cursor: pointer;
        color: aliceblue;
        transition: 0.7s;
        font-weight: 900;
        text-transform: uppercase;
        border: rgb(116, 85, 0) solid 3px;
        display: flex;
        align-items: center;
        margin-right: auto;
        margin-left: auto;
        &:hover {
          background: aliceblue;
          border: 2px solid $mainColor;
          color: #333;
        }
        svg {
          margin-bottom: -2px;
        }
      }
    }
    .address-info {
      background: $mainColor;
      margin-top: 5rem;
      padding: 0.5rem 0;
      color: aliceblue;
      font-size: 20px;
      letter-spacing: 1.5px;
      // width: 80%;
      margin-right: auto;
      margin-left: auto;
    }
  }
  #footer {
    background: $mainColor;
  }
}
</style>