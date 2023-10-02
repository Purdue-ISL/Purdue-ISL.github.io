<template >
  <nav id="nav-container" class="invisible h-[0] sm:visible sm:nav-bar">
    <NuxtLink class="nxt-link-btn" @click="toggleNavBar">
      <div class="flex flex-col items-center">
        <p class="menu-hamburger-line"></p>
        <p class="menu-hamburger-line"></p>
        <p class="menu-hamburger-line"></p>
      </div>
    </NuxtLink>
    <NuxtLink class="nxt-link-btn" to="/">Home</NuxtLink>

    <NuxtLink class="nxt-link-btn" to="/team">Team</NuxtLink>

    <NuxtLink class="nxt-link-btn" to="/projects">Projects</NuxtLink>

    <NuxtLink class="nxt-link-btn" to="/publications">Publications</NuxtLink>

    <NuxtLink class="nxt-link-btn">Open Source</NuxtLink>
    <NuxtLink class="nxt-link-btn">Contact Us</NuxtLink>
  </nav>
  <div
    id="menu-bar"
    class="invisible sm:visible menu-hamburger"
    @click="toggleNavBar"
  >
    <p class="menu-hamburger-line"></p>
    <p class="menu-hamburger-line"></p>
    <p class="menu-hamburger-line"></p>
  </div>
  <div class="h-16"></div>

  <nav id="nav-container-mobile" class="nav-bar-mobile sm:invisible">
    <button
      @click="toggleNavBarMobile"
      @focusout="hideNavBarMobile($event)"
      class="mobile-menu-ham"
    >
      <div class="flex flex-col items-center pb-[3px]">
        <p class="menu-hamburger-line"></p>
        <p class="menu-hamburger-line"></p>
        <p class="menu-hamburger-line"></p>
      </div>
    </button>
    <ul id="mobile-menu-buttons" class="mobile-menu-buttons">
      <NuxtLink
        class="mobile-button mobile-button1"
        @click="toggleNavBarMobile"
        to="/"
        >Home</NuxtLink
      >
      <NuxtLink
        class="mobile-button mobile-button2"
        @click="toggleNavBarMobile"
        to="/team"
        >Team</NuxtLink
      >
      <NuxtLink
        class="mobile-button mobile-button3"
        @click="toggleNavBarMobile"
        to="/projects"
      >
        Projects
      </NuxtLink>
      <NuxtLink
        class="mobile-button mobile-button4"
        @click="toggleNavBarMobile"
        to="/publications"
      >
        Publications
      </NuxtLink>
      <NuxtLink
        class="mobile-button mobile-button5"
        @click="toggleNavBarMobile"
      >
        Open Source
      </NuxtLink>
      <NuxtLink
        class="mobile-button mobile-button6"
        @click="toggleNavBarMobile"
      >
        Contact Us
      </NuxtLink>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleNavBar() {
      let nav = document.getElementById("nav-container");
      nav.classList.toggle("show");
      let buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.classList.toggle("fade");
      });
      document.getElementById("menu-bar").classList.toggle("close");
    },
    toggleNavBarMobile() {
      let navMobile = document.getElementById("mobile-menu-buttons");
      navMobile.classList.toggle("show");

      let mobile_menu_ham =
        document.getElementsByClassName("mobile-menu-ham")[0];
      mobile_menu_ham.classList.toggle("show");

      let num_of_buttons = document.querySelectorAll(".mobile-button").length;
      for (var idx = 1; idx < num_of_buttons + 1; idx++) {
        let className = "mobile-button" + idx;
        document.getElementsByClassName(className)[0].classList.toggle("show");
      }
    },
    hideNavBarMobile() {
      console.log(event);
      let navMobile = document.getElementById("mobile-menu-buttons");
      if (navMobile.classList.contains("show")) {
        navMobile.classList.toggle("show");

        let mobile_menu_ham =
          document.getElementsByClassName("mobile-menu-ham")[0];
        mobile_menu_ham.classList.toggle("show");

        let num_of_buttons = document.querySelectorAll(".mobile-button").length;
        for (var idx = 1; idx < num_of_buttons + 1; idx++) {
          let className = "mobile-button" + idx;
          document
            .getElementsByClassName(className)[0]
            .classList.toggle("show");
        }
      }
    },
  },
  beforeMount() {},
};
</script>

<style lang="scss" scoped>
</style>