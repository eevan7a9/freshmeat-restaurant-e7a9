<template>
  <div class="footer-wrapper">
    <div class="items">
      <header>social</header>
      <SocialIcons />
      <div class="subscribe-container">
        <input type="text" placeholder="your@email.com" />
        <button>subscribe</button>
      </div>
    </div>
    <div class="items">
      <header>Quick Links</header>
      <ul class="quick-links">
        <li>home</li>
        <li>about</li>
        <li>reservation</li>
        <li>team</li>
        <li>contact</li>
      </ul>
    </div>
    <div class="items">
      <header>Opening Hours</header>
      <ul class="opening-hours">
        <li>Mon: 6:30 am</li>
        <li>Tue: 7:30 am</li>
        <li>Wed: 7:30 am</li>
        <li>Thu: 7:30 am</li>
        <li>Fri: 7:30 am</li>
        <li>Sat: 12:30 pm</li>
        <li>sun: 6:30 am</li>
      </ul>
    </div>
    <div class="items need-help">
      <header>Need Help</header>
      <p>
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
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span>: freshmeat@email.com</span>
      </p>
      <p>
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
        <span>: +(36)321-3234-2231</span>
      </p>
    </div>
  </div>
</template>

<script>
import SocialIcons from "@/components/contact/SocialIcons.vue";
export default {
  components: {
    SocialIcons
  }
};
</script>

<style lang="scss" scoped>
$mainColor: aliceblue;
.footer-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem 0;
  color: $mainColor;
  font-weight: bold;
  .items {
    margin-right: auto;
    margin-left: auto;
    header {
      font-size: 20px;
      font-weight: 900;
      text-transform: uppercase;
      font-family: "Anton", sans-serif;
      text-shadow: 1px 0 #221d1d, 0 1px #827373, 3.5px 3px #443f3c,
        1px 1px #201f1e;
      letter-spacing: 5px;
      margin-bottom: 2rem;
    }
    .subscribe-container {
      width: 90%;
      //   padding: 0 1rem;
      input {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        width: 100%;
        margin-top: 10px;
        padding: 15px 5px;
        border: 0;
        background: aliceblue;
        text-align: center;
        // border-radius: 10px;
      }
      button {
        width: 100%;
        padding: 15px 10px;
        border: 0;
        background: aliceblue;
        border-top: solid 3px #a8890f;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
      }
    }
    .quick-links {
      list-style: none;
      width: 120px;
      margin-right: auto;
      margin-left: auto;
      text-align: left;
      li {
        font-size: 18px;
        padding: 5px 0;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
    &.need-help {
      text-align: left;
      p {
        font-size: 18px;
        padding: 10px 0;
      }
    }
    .opening-hours {
      list-style: none;
      width: 120px;
      text-align: left;
      margin-right: auto;
      margin-left: auto;
      li {
        padding: 5px 0;
      }
    }
  }
}
@media (max-width: 800px) {
  .footer-wrapper {
    grid-template-columns: repeat(2, 1fr);
    header {
      margin-top: 1rem;
    }
  }
}
@media (max-width: 500px) {
  .footer-wrapper {
    grid-template-columns: 1fr;
    header {
      margin-top: 2rem;
    }
    .need-help {
      p {
        display: flex;
        flex-direction: column;
        svg {
          display: none;
        }
      }
    }
  }
}
</style>