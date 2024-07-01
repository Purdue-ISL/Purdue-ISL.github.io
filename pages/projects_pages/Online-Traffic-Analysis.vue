<template>
  <div id="doc" class="bg-[var(--primary-color)] bg-img min-h-screen">
    <div class="limit-width">
      <HeaderNav />
    </div>
    <PageHeader title="Projects" />
    <div class="limit-width">
      <div class="w-[96%] mx-auto"></div>
      <h1 class="subpages-title">
        ML-Driven Online Traffic Analysis at Multi-Terabit Line Rates
      </h1>
      <SubPageNav
        v-bind:data="[
          ['Description', 'des'],
          ['Publications', 'pub'],
          ['People', 'ppl'],
        ]"
      />

      <div id="des" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Description</h1>
        </div>
        <div class="subpages-section-content">
          <p>
            Self-driving networks, i.e., networks driven by real-time analytics performed on data at line-rate guided by programmatic control, can help to ensure better network security and aid with performance diagnosis and repair. Realizing such a network often require machine learning (ML) inferencing algorithms (e.g., to detect anomalous traffic). Unfortunately, as network bandwidth grows to hundreds of gigabits to even terabits per second, it is challenging to analyze network traffic at line rates today. Many production intrusion detection systems rely on out-of-band analysis resulting in slow reaction times that may take the order of minutes to resolve security issues besides requiring significant bandwidth to export data from routers. This project is tackling the challenge of inline traffic analysis using programmable switches and programmable hardware.
          </p>
        </div>
      </div>

      <div id="pub" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Publications</h1>
        </div>
        <div class="subpages-section-content">
          <PublicationsPublication
            title="Leo: Online Traffic Classification at Multi-Terabit Line Rates"
            authors="Syed Usman Jafri, Sanjay Rao, Vishal Shrivastav and Mohit Tawarmalani"
            conference="Proceedings of USENIX Symposium on Networked Systems Design and Implementation (NSDI), April 2024"
            paper="../papers/Leo-NSDI-2024.pdf"
            slides="../slides/Leo-NSDI-2024-slides.pdf"
            video="https://www.youtube.com/watch?v=VH-hNyACW7g"
            github="https://github.com/Purdue-ISL/Leo"
          />
          <PublicationsSeparator />
        </div>
      </div>

      <div id="ppl" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Team</h1>
        </div>
        <div class="subpages-section-content">
          <div>
            <span class="font-bold text-xl">Faculty</span>
            <div class="text-lg pl-2">
              <ul class="gap-10">
                <li class="font-mono tracking-tighter">Prof. Sanjay Rao</li>
              </ul>
            </div>
          </div>
          <br />

          <div>
            <span class="font-bold text-xl">Students</span>
            <div class="text-lg pl-2">
              <ul class="gap-10">
                <li>
                  <span class="font-mono tracking-tighter">
                    Syed Usman Jafri
                  </span>
                  <span>— Ph.D. student</span>
                </li>
              </ul>
            </div>
          </div>
          <br />

          <div>
            <span class="font-bold text-xl">Collaborators</span>
            <div class="text-lg pl-2">
              <ul class="gap-10">
                <li>
                  <span class="font-mono tracking-tighter"
                    >Prof. Mohit Tawarmalani</span
                  >
                  <span> — Purdue University</span>
                </li>
                <li>
                  <span class="font-mono tracking-tighter"
                    >Prof. Vishal Shrivastav</span
                  >
                  <span> — Purdue University</span>
                </li>
              </ul>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>

    <div class="pb-[30px]"></div>
  </div>
</template>  
  
  
  
  
  
  
  <script type="module">
let projects_divs = [];
export default {
  beforeRouteEnter(to, from, next) {
    console.log(from);
    console.log(to);
    to.params.link = from;
    next();
  },
  methods: {
    overlap(element, threshold) {
      let topOverlap =
        (window.screen.height - element.getBoundingClientRect().top) /
        window.screen.height;
      if (topOverlap > threshold) {
        return true;
      }
      return false;
    },

    handleScroll() {
      var filtered = [];
      for (var idx in projects_divs) {
        if (this.overlap(projects_divs[idx], 0.1)) {
          projects_divs[idx].classList.toggle("show-up");
          filtered.push(idx);
        }
      }
      for (var idx in filtered) {
        delete projects_divs[filtered[idx]];
      }
      if (Object.keys(projects_divs).length == 0) {
        console.log("removed");
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    projects_divs = [];
    let projects_divs_nodelist = document.querySelectorAll(
      ".subpages-section-container-div"
    );
    projects_divs_nodelist.forEach((projects_div) => {
      projects_divs.push(projects_div);
      if (projects_div.classList.contains("show-up")) {
        projects_div.classList.toggle("show-up");
      }
    });

    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("load", this.handleScroll);
    // in case height is small.
    this.handleScroll();
  },
};
</script>
  
  
  