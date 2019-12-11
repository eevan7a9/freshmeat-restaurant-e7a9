<template>
  <div class="make-reservation-wrapper">
    <header>Make Reservation</header>
    <DotDivider />
    <div class="form-wrapper">
      <form @submit.prevent="submit">
        <div class="input-wrapper">
          <label>Name</label>
          <input
            type="text"
            v-model="form.name"
            autocomplete="off"
            placeholder="eg. John Doe"
            required
          />
          <span></span>
        </div>
        <div class="input-wrapper">
          <label>Email</label>
          <input
            type="email"
            v-model="form.email"
            autocomplete="off"
            placeholder="eg. johndoe@email.com"
            required
          />
          <span></span>
        </div>
        <div class="input-wrapper">
          <label>Phone</label>
          <input
            type="text"
            v-model="form.phone"
            autocomplete="off"
            placeholder="eg. +3623-3234-2321"
            required
          />
          <span></span>
        </div>
        <div class="date-time-wrapper">
          <div class="input-wrapper date-time">
            <label>Date</label>
            <input type="date" v-model="form.date" />
          </div>
          <div class="input-wrapper date-time">
            <label>Time</label>
            <input type="time" v-model="form.time" />
          </div>
        </div>
        <div class="number-people-wrapper">
          <div class="input-wrapper">
            <label>Table for:</label>
            <input type="number" v-model="form.people" min="1" max="6" value="1" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import DotDivider from "@/components/DotDivider.vue";
export default {
  components: {
    DotDivider
  },
  data() {
    return {
      form: {
        date: "",
        time: ""
      }
      //   first_name: "",
      //   last_name: "",
      //   email: "",
      //   number: "",
    };
  },
  methods: {
    submit() {
      console.log(this.form);
    }
  },
  created() {
    //   set current date and time
    const today = new Date();
    this.form.date = `${today.getFullYear()}-${today.getDate()}-${today.getMonth() +
      1}`;
    this.form.time = `${today.getHours()}:${
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
    }`;
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #a8890f;
.make-reservation-wrapper {
  padding: 2rem 0;
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
  .form-wrapper {
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
    .input-wrapper {
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      label {
        font-family: "Anton", sans-serif;
        margin-bottom: 5px;
      }
      input {
        outline: none;
        border: none;
        padding: 1rem;
        background: #d7d7d781;
        border-bottom: 2px solid $mainColor;
        font-family: "Archivo Narrow", sans-serif;
        letter-spacing: 1.5px;
        font-size: 18px;
        max-width: 100%;
        border-radius: 5px;
        &.filled {
          background: #fff;
        }
        &:focus {
          border: none;
          background: #fff;
          transition: 1s;
        }
        &:focus + span {
          background: red;
          width: 100%;
          transition: 1s;
        }
      }
      span {
        height: 3px;
        background: blue;
        width: 0;
      }
      &.date-time {
        margin: 5px;
      }
    }
    .date-time-wrapper {
      display: flex;
    }
    .number-people-wrapper {
      //   background: red;
      label {
        text-align: left;
        padding: 0 1rem;
      }
      input {
        max-width: 300px;
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
      &:hover {
        background: aliceblue;
        border: 2px solid $mainColor;
        color: #333;
      }
    }
  }
}
</style>