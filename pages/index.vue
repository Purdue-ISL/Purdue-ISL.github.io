<template>
  <div id="doc" class="bg-[var(--primary-color)] bg-img">
    <div class="limit-width">
      <div class="pb-[0.01rem]"></div>
      <HeaderNav />
    </div>
    <HomepageBannerImage />
    <div class="limit-width">
      <HomepageContent />
      <HomepageNews />
      <div class="pb-12"></div>
    </div>
  </div>
</template>
  
<script type="module">
let content_divs = [];
export default {
  methods: {
    overlap(element) {
      let topOverlap =
        (window.screen.height - element.getBoundingClientRect().top) /
        window.screen.height;
      if (topOverlap > 0.07) {
        console.log(element);
        element.classList.toggle("show-up");
        return true;
      }
      return false;
    },

    handleScroll() {
      var filtered = [];
      for (var idx in content_divs) {
        if (this.overlap(content_divs[idx])) {
          filtered.push(idx);
        }
      }
      for (var idx in filtered) {
        delete content_divs[filtered[idx]];
      }
      if (Object.keys(content_divs).length == 0) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    content_divs = [];
    let content_divs_nodelist = document.querySelectorAll(
      ".main-page-project-div,.news"
    );
    content_divs_nodelist.forEach((content_div) => {
      content_divs.push(content_div);
      if (content_div.classList.contains("show-up")) {
        content_div.classList.toggle("show-up");
      }
    });
    console.log(content_divs);
    window.addEventListener("scroll", this.handleScroll);
    // in case height is small.
    this.handleScroll();
  },
};
</script>
