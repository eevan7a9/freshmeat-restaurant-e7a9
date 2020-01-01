<template>
  <nav
    :class="{ 'fixed-navbar': !showNavbar, 'add-color' : addNavColor || coloredNav || navbar_colored }"
  >
    <div class="container">
      <label class="logo" @click="toggleLogo">FreshMeat</label>
      <ul id="navItems">
        <li>
          <router-link to="/" @click.native="toggleNavbar">HOME</router-link>
        </li>
        <li>
          <router-link to="/about" @click.native="toggleNavbar">About</router-link>
        </li>
        <li>
          <router-link to="/reservation" @click.native="toggleNavbar">Reservation</router-link>
        </li>
        <li>
          <router-link to="/contact" @click.native="toggleNavbar">Contact</router-link>
        </li>
        <li>
          <router-link to="/team" @click.native="toggleNavbar">Team</router-link>
        </li>
      </ul>
      <label id="icon">
        <span @click="toggleNavbar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-if="!toggled"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-else
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
      </label>
    </div>
  </nav>
</template>
<script>
const OFFSET = 60;

import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  props: {
    coloredNav: Boolean
  },
  data() {
    return {
      toggled: 0,
      showNavbar: true,
      lastScrollPosition: 0,
      addNavColor: 0,
      scrollValue: 0
    };
  },
  computed: mapGetters(["navbar_colored"]),
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    toggleNavbar() {
      let x = document.querySelector("#navItems");
      x.classList.toggle("active");
      this.toggled = !this.toggled;
    },
    onScroll() {
      if (window.pageYOffset < 2) {
        this.addNavColor = 0;
      }
      if (window.pageYOffset >= 2) {
        this.addNavColor = 1;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
    toggleLogo() {
      if (this.$route.name !== "home") {
        this.$router.push({ name: "home" });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
nav {
  height: 80px;
  width: 100%;
  position: fixed;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.62);
  transform: translate3d(0, 0, 0);
  transition: 0.4s all ease-out;
  background: #130b067a;
  border-bottom: 2px solid #d5ac0c;
  &.fixed-navbar {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }
  &.add-color {
    background: #a8890f;
    transition: 0.5s;
    a {
      color: aliceblue;
      text-shadow: 0px 0px 0px #a48474, -1px -1px 0px #392d2a,
        1px -1px 1px #413f3f, -1px 1px 1px #413f3f, 0px 0px 0px #413f3f;
      border: 1px solid transparent;
    }
    a.router-link-exact-active,
    a:hover {
      transition: 0.5s;
      border: 1px solid white;
    }
    label.logo {
      text-shadow: 2px 0 #221d1d, 0 1px #827373, 3.5px 3px #443f3c,
        2px 3px #201f1e;
    }
  }
  z-index: 10;
  ul {
    float: right;
    margin-right: 40px;
  }
  li {
    display: inline-block;
    margin: 0 4px;
    line-height: 80px;
  }
  a {
    font-family: "Anton", sans-serif;
    letter-spacing: 3px;
    color: #fffdf4;
    font-weight: 900;
    font-size: 18px;
    text-shadow: 2px 2px 5px #e28900, -1px -1px 0 #d88b0d, 1px -1px 1px #c37f00,
      -1px 1px 1px #b77700, 0 0 0 #ab7400;
    padding: 7px 10px;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 3px;
    border: 1px solid transparent;
  }
  a.router-link-exact-active,
  a:hover {
    transition: 0.5s;
    border: 2px solid #d5ac0c;
    background: rgba(240, 248, 255, 0.205);
  }
  #icon {
    color: white;
    font-size: 30px;
    float: right;
    margin-right: 40px;
    line-height: 80px;
    cursor: pointer;
    display: none;
  }
  label.logo {
    float: left;
    font-size: 35px;
    font-weight: bold;
    padding: 0 100px;
    line-height: 80px;
    color: white;
    font-family: "Anton", sans-serif;
    text-transform: none;
    text-shadow: 2px 0 #ea6300, 0 1px #6a3719, 3.5px 3px #d2a800,
      2px 3px #e67e16;
  }
}

@media (max-width: 1048px) {
  nav {
    label.logo {
      font-size: 30px;
      padding: 0 50px;
    }
    ul {
      margin-right: 20px;
    }
    a {
      font-size: 17px;
    }
  }
}
@media (max-width: 909px) {
  nav {
    #icon {
      display: block;
    }
    ul {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: #391919;
      top: 80px;
      left: -100%;
      text-align: center;
      transition: all 0.5s;
    }
    li {
      display: block;
      margin: 50px 0;
      line-height: 30px;
    }
    a {
      font-size: 20px;
    }
    a.active,
    a:hover {
      border: none;
      color: #3498db;
    }
    ul.active {
      left: 0;
    }
  }
}
@media (max-width: 500px) {
  nav label.logo {
    padding: 0 15px;
  }
}
</style>