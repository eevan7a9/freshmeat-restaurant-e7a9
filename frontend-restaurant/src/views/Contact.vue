<template>
  <div class="contact-wrapper">
    <div class="contact-content">
      <form>
        <div class="contact-form">
          <div class="input-form">
            <label>Name</label>
            <input type="text" v-model="form.name" />
          </div>
          <div lass="input-form">
            <label>email</label>
            <input type="text" v-model="form.email" />
          </div>
          <div class="text-form">
            <label>Message</label>
            <textarea v-model="form.message"></textarea>
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
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  },
  data() {
    return {
      form: {}
    };
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #a8890f;
.contact-wrapper {
  .contact-content {
    min-height: 90vh;
  }
  #footer {
    background: $mainColor;
  }
}
</style>