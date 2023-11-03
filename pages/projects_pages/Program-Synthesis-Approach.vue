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
        A Program Synthesis Approach to Designing Networks with Provable Properties
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
            <!--Project Description-->
            Computer networks are difficult to manage since there exists a wide gulf between the high-level goals that operators have for their networks (e.g., Quality of Service etc.), and the low-level decisions that operators should make (e.g., how to route traffic, allocate bandwidth, configure devices etc.). While the advent of Software-Defined Networking helps, the process of designing networks is still ad-hoc, leading to high operational costs, design faults that account for a large fraction of network downtime, and costly security breaches. This project is motivated by the vision of design automation for networking, inspired by the success of the approach in other domains such as chip design. The project is developing methods for network architects to express their intent at higher levels of abstraction, and techniques to automatically synthesize network designs that realize this intent correctly and efficiently.

            As a concrete example, we are tackling a key challenge network architects encounter: how to balance multiple conflicting metrics, and ensure fair allocations to competing traffic while prioritizing critical traffic. The state of practice poses challenges since architects must precisely encode their (somewhat fuzzy) intent into formal optimization models using abstract notions such as utility functions, and ad-hoc manually tuned knobs. We are developing one of the first efforts to synthesize network designs with indeterminate objectives using an interactive program-synthesis-based approach. Specifically, we are developing a novel framework that we term comparative synthesis, where a user's design objective, and the synthesis of a network design that optimizes that objective are done in tandem. Our work is based on the key insight that when a user has difficulty in providing a concrete objective function, it is relatively easy and natural to give preferences between pairs of concrete candidates. The approach may be viewed as a new variant of programming-by-example (PBE) widely studied in the Programming Languages community, where preference pairs are used as "examples" instead of input-output pairs in traditional PBE systems. We are developing Net10Q, a system based on our approach, and evaluating its effectiveness on real-world network case studies, and through pilot user studies comprising network researchers and practitioners.
          </p>
        </div>
      </div>

      <div id="pub" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Publications</h1>
        </div>
        <div class="subpages-section-content">
          <p>
            <!--Project publications-->
            <div class="publication-div">
            <PublicationsPublication
              title="Comparative Synthesis: Learning Near-Optimal Network Designs by Query"
              authors="Yanjun Wang, Chuan Jiang, Zixuan Li, Xiaokang Qiu, Sanjay Rao"
              conference="Proceedings of the ACM on Programming Languages, 2023"
              paper="https://dl.acm.org/doi/pdf/10.1145/3571197"
            /><PublicationsSeparator />
             <PublicationsPublication
              title="Learning Network Design Objectives Using A Program Synthesis Approach"
              authors="Yanjun Wang, Chuan Jiang, Xiaokang Qiu, Sanjay G. Rao"
              conference="Proceedings of the 18th ACM Workshop on Hot Topics in Networks (HotNets), 2019"
              paper="papers/HotNets_2019_Paper.pdf"
            /><PublicationsSeparator />
          </p>
        </div>
      </div>

      <div id="ppl" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Team</h1>
        </div>
        <div class="subpages-section-content">
          <p>
            <!--Project Team-->
            Yanjun Wang, Zixuan Li, Xiaokang Wang, Chuan Jiang, Prof. Sanjay Rao, Prof. Xiaokang Qiu
          </p>
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