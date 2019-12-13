<template>
  <div class="make-reservation-wrapper">
    <header :class="{'pulse-style' : pulse}">Make Reservation</header>
    <div class="container">
      <DotDivider />
    </div>
    <div class="form-wrapper">
      <form @submit.prevent="submit">
        <div class="input-wrapper">
          <label>
            Name
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </label>
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
          <label>
            Email
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
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </label>
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
          <label>
            Phone
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
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </label>
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
            <label>
              Date
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </label>
            <input type="date" v-model="form.date" />
          </div>
          <div class="input-wrapper date-time">
            <label>
              Time
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
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </label>
            <input type="time" v-model="form.time" />
          </div>
        </div>
        <div class="number-people-wrapper">
          <div class="input-wrapper">
            <label>
              Table for ?
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
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </label>
            <input type="number" v-model="form.people" min="1" max="6" />
          </div>
        </div>
        <button type="submit">
          Submit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
    <transition name="fade">
      <div class="modal-wrapper" v-if="modal">
        <div class="modal">
          <header>Success, reservation sent</header>
          <img src="@/assets/images/message_sent.svg" alt srcset />
          <p>Later, we will call you and email you.</p>
          <button @click="modal = 0">Ok</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import DotDivider from "@/components/DotDivider.vue";
export default {
  props: {
    pulse: Number
  },
  components: {
    DotDivider
  },
  data() {
    return {
      form: {
        date: "",
        time: "",
        people: 2
      },
      modal: 0
    };
  },
  methods: {
    submit() {
      this.form.date = "";
      this.form.time = "";
      this.modal = 1;
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
    text-shadow: -3px 0 #dfc1c1, 0 1px #ececec, 3.5px 3px #998c8c,
      2px 3px #eeece9;
    letter-spacing: 5px;
    margin-bottom: 2rem;
  }
  .pulse-style {
    animation: pulsate 1.5s ease-in-out infinite;
  }
  .form-wrapper {
    background: rgba(0, 0, 0, 0.274);
    border: 3px solid $mainColor;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.62);
    padding: 2rem;
    max-width: 500px;
    margin-right: auto;
    margin-left: auto;
    .input-wrapper {
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      label {
        font-family: "Anton", sans-serif;
        color: aliceblue;
        svg {
          fill: $mainColor;
        }
        margin-bottom: 5px;
      }
      input {
        outline: none;
        border: none;
        padding: 1rem;
        background: #b6b6b6;
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
        background: $mainColor;
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
      width: 50%;
      // padding-right: 3rem;
      label {
        // text-align: left;
        padding: 0 1rem;
      }
      input {
        width: auto;
        text-align: center;
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
  .modal-wrapper {
    height: 100vh;
    width: 100%;
    background: #201f1e54;
    top: 0;
    position: fixed;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .modal {
      background: aliceblue;
      border: $mainColor solid 3px;
      padding: 2rem;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.62);
      p {
        padding: 2rem;
        color: $mainColor;
        font-size: 20px;
        font-family: "Archivo Narrow", sans-serif;
        text-shadow: 0px 0px 0px #a48474, -1px -1px 0px #392d2a,
          1px -1px 1px #413f3f, -1px 1px 1px #413f3f, 0px 0px 0px #413f3f;
        // background: #07070642;
      }
      // modal button
      button {
        margin-top: 10px;
        padding: 10px 2rem;
        background: $mainColor;
        border-radius: 10%;
        cursor: pointer;
        color: aliceblue;
        font-weight: 900;
        text-transform: uppercase;
        border: rgb(116, 85, 0) solid 3px;
        transition: 0.4s;
        &:hover {
          background: #8b7109;
        }
      }
    }
  }
}
</style>