<template>
  <div id="doc" class="bg-[var(--primary-color)] bg-img min-h-screen">
    <div class="limit-width">
      <HeaderNav />
    </div>
    <PageHeader title="Projects" />
    <div class="limit-width">
      <div class="w-[96%] mx-auto"></div>
      <h1 class="subpages-title">
        <!--Project title-->
        Self-correcting ML-driven Synthesis of Network Designs from Hints
      </h1>
      <SubPageNav
        v-bind:data="[
          ['Description', 'des'],
          // ['Publications', 'pub'],
          ['People', 'ppl'],
        ]"
      />

      <div id="des" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Description</h1>
        </div>
        <div class="subpages-section-content">
          <p>
            <!--Project Description-->
            Despite much progress, the goal of driving network design from
            higher level intent remains elusive. The challenges stem from the
            fact that while network architects often do have informal knowledge
            of conditions under which their network must operate, existing
            design tools (based on optimization and constraint solvers) need
            <span class="font-bold">precise</span> characterizations of these
            conditions. The goal of this project is to automate the process of
            designing networks from informal operator hints. The proposal will
            tackle this goal through recent developments in ML, and ML-based
            techniques for network design.
          </p>
        </div>
      </div>

      <!-- <div id="pub" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Publications</h1>
        </div>
        <div class="subpages-section-content">
          <p>
            Project publications
          </p>
        </div>
      </div> -->

      <div id="ppl" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Team</h1>
        </div>
        <div class="subpages-section-content">
          <!--Project Team-->
          <div>
            <span class="font-bold text-xl">Faculty</span>
            <div class="text-lg pl-2">
              <ul class="gap-10">
                <li class="font-mono tracking-tighter">Prof. Sanjay Rao</li>
                <li class="font-mono tracking-tighter">
                  Prof. Mohit Tawarmalani
                </li>
                <li class="font-mono tracking-tighter">Prof. Bruno Ribeiro</li>
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
                    Abd AlRhman AlQiam
                  </span>
                  <span>— Ph.D. student</span>
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
    // in case height is small.
    this.handleScroll();
  },
};
</script>
  
  
  
