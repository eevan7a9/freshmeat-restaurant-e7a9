<template>
  <div class="contact-wrapper">
    <div class="contact-content">
      <div class="map">
        <LMap :zoom="zoom" :maxZoom="13" :minZoom="13" :center="center">
          <LTileLayer :url="url"></LTileLayer>
          <LMarker :lat-lng="markerLatLng"></LMarker>
        </LMap>
      </div>
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
            <textarea v-model="form.message" placeholder="Hello, we want to know..."></textarea>
          </div>
        </div>
      </form>
    </div>
    <section id="footer">
      <div class="container">
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    Footer
  },
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 13,
      center: [47.41322, -1.219482],
      markerLatLng: [47.41322, -1.219482],
      form: {}
    };
  },
  methods:{
      submit(){
          
      }
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #a8890f;
.contact-wrapper {
  .contact-content {
    min-height: 90vh;
    .contact-form {
      max-width: 500px;
      padding: 2rem 2rem;
      margin-right: auto;
      margin-left: auto;
      border: 3px solid $mainColor;
      font-family: "Bebas Neue", cursive;
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
        }
      }
    }
    .map {
      margin-bottom: 3rem;
      width: 100%;
      height: 500px;
      border: 3px solid $mainColor;
      background: $mainColor;
    }
  }
  #footer {
    background: $mainColor;
  }
}
</style>