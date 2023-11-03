<template>
  <div class="opensource-pages-section-container-div sticky top-0 z-10">
    <div class="flex justify-evenly text-center text-lg px-[50px] lg:px-[80px]">
      <div
        class="flex-grow py-4"
        v-for="(d, index) in data"
        :key="index"
        :id="'a-' + d[1]"
      >
        <a
          :href="'#' + d[1]"
          class="z-20 relative font-light md:font-normal md:text-lg"
          >{{ d[0] }}</a
        >
      </div>
      <div id="marker" class="marker z-10"></div>
    </div>
  </div>
</template>
    
<script>
import SmoothScroll from "smooth-scroll/dist/smooth-scroll";
let sections = [];
let marginScroll = 80;
export default {
  props: {
    data: Object,
  },
  methods: {
    navScroll() {
      let max_neg = 0;
      let overlappingSectionElement = null;
      for (var idx in sections) {
        let top = sections[idx].getBoundingClientRect().top;
        // 101px will cover for the translateY:100px of opensource-section-container-div
        // check main.css for the details
        if (top <= marginScroll + 101 && (top > max_neg || max_neg == 0)) {
          max_neg = top;
          let anchorId = "a-" + sections[idx].getAttribute("id");
          overlappingSectionElement = document.getElementById(anchorId);
        }
      }

      for (var idx in sections) {
        let anchorId = "a-" + sections[idx].getAttribute("id");
        let navAnchorElement = document.getElementById(anchorId);
        let marker = document.getElementById("marker");
        // not overlapping element
        if (overlappingSectionElement != navAnchorElement) {
          navAnchorElement.classList.remove("mark-section");
        } else {
          if (
            overlappingSectionElement != null &&
            !overlappingSectionElement.classList.contains("mark-section")
          ) {
            overlappingSectionElement.classList.add("mark-section");
            marker.style.transition = "all .7s ease-out";
            let widthDiff = overlappingSectionElement.offsetWidth;
            if (marker.offsetWidth != 0) {
              widthDiff -= parseInt(marker.offsetWidth);
            }
            let diff =
              overlappingSectionElement.offsetLeft -
              marker.offsetLeft +
              widthDiff / 2;
            marker.style.transform = "translateX(" + diff + "px)";
            marker.style.width = overlappingSectionElement.offsetWidth + "px";
            marker.style.height = overlappingSectionElement.offsetHeight + "px";
            marker.style.opacity = 0.3;
          }
        }

        if (overlappingSectionElement == null) {
          marker.style.transform = "translateX(0px)";
          marker.style.opacity = 0;
          marker.style.width = 0 + "px";
        }
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 700,
      offset: marginScroll,
      speedAsDuration: true,
      easing: "easeInOutCubic",
    });
    let projects_divs_nodelist = document.querySelectorAll(
      ".opensource-pages-section-container-div"
    );
    projects_divs_nodelist.forEach((projects_div) => {
      if (projects_div.getAttribute("id") != null) {
        sections.push(projects_div);
      }
    });

    window.addEventListener("scroll", this.navScroll);
    // in case height is small.
    this.navScroll();
  },
};
</script>  
    