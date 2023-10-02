<template>
  <div class="banner-bg-img flex flex-col justify-center items-center">
    <div class="banner-font flex  justify-center">
      <div>
        <p class="banner-typewriter tracking-tight md:tracking-normal">Internet Systems Lab</p>
      </div>
    </div>
  </div>
</template>


<script >
export default {
  methods: {
    check() {
      let s = document.getElementById("doc");
      // let img = document.getElementById("banner-img");
      // img.style.width = s.offsetWidth;
      // img.console.log(s.offsetWidth);
    },
  },
  beforeMount() {
    // this.check();
  },
};
</script>
<style lang="scss" scoped>
</style>