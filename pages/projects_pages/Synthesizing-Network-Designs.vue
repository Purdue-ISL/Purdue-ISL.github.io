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
            With the wide-spread adoption of online and cloud-based services, it is critical that the underlying network infrastructure meet increasingly stringent performance requirements (e.g., sustain throughput for business-critical applications). These requirements must be met despite failures that are the norm given the global scale of ISP and cloud provider networks, and their rapid pace of evolution. Many existing approaches to designing networks for failures (i) only focus on availability, resulting in poor performance on failures; (ii) only consider a small number of failure states, and do not scale as the number of possible failure states increase; or (iii) rely on ad-hoc simulation-based testing. While tools for software and hardware synthesis and testing is a thriving 10 billion dollar industry, the state of practice in certifying and synthesizing network designs is only in its nascent stages.
            The project is tackling these challenges by developing novel techniques that enable architects to plan their network designs (e.g., design topology, provision capacity, algorithms for re-routing traffic on failures) so performance is acceptable over a large set of scenarios the network may encounter. The project is distinguished by a focus on performance (not just availability), designing for multiple concurrent failures, and designs with provable performance guarantees for a given set of failure scenarios. This project may be viewed as an early effort aimed at formally verifying quantitative network properties, and synthesizing networks for such performance requirements. This is in contrast to much recent progress in the field of network verification, which has primarily focused on correctness (e.g., ensuring security policies are correctly instantiated).
            The project is bringing together expertise in network systems, and optimization theory, and is advancing the state-of-the-art in two key ways. First, the project is developing (i) new mechanisms that may be deployed in the network to respond to failures; and (ii) frameworks that can certify the resulting performance is acceptable over desired failure states. A novelty of the framework is the ability to model rich and flexible network mechanisms. Second, unlike existing methods that only consider worst-case performance, and may be overly conservative, the project is developing novel ways to design for requirements that must be met by a desired percentage of scenarios.
            The project has the potential for significant real-world impact by ensuring networks comply with Service Level Objectives in the face of failures, and is leading to networks with lower cost, better performance, and higher reliability. The project is extensively engaging with industry and network operator forums, with results being validated using real data from these networks.
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
            Yiyang Chang
            Ashish Chandra
            Chuan Jiang
            Zixuan Li
            Prof. Sanjay Rao
            Prof. Mohit Tawarmalani
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
