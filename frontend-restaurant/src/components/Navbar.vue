<template>
  <nav>
    <div class="container">
      <label class="logo">LOGO</label>
      <ul id="navItems">
        <li>
          <router-link to="/">HOME</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/reservation">Reservation</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <router-link to="/team">Team</router-link>
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
export default {
  name: "Navbar",
  data() {
    return {
      toggled: 0
    };
  },
  methods: {
    toggleNavbar() {
      let x = document.querySelector("#navItems");
      x.classList.toggle("active");
      this.toggled = !this.toggled;
    }
  }
};
</script>
<style lang="scss" scoped>
nav {
  height: 80px;
  width: 100%;
  background: #a8890f;
  top: 0;
  position: sticky;
  z-index: 10;
  ul {
    float: right;
    margin-right: 40px;
  }
  li {
    display: inline-block;
    margin: 0 8px;
    line-height: 80px;
  }
  a {
    color: white;
    font-size: 18px;
    padding: 7px 10px;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 3px;
    border: 1px solid transparent;
  }
  a.router-link-exact-active,
  a:hover {
    transition: 0.5s;
    border: 1px solid white;
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
  }
}

@media (max-width: 1048px) {
  label.logo {
    font-size: 32px;
    padding-left: 60px;
  }
  nav ul {
    margin-right: 20px;
  }
  nav a {
    font-size: 17px;
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
</style>