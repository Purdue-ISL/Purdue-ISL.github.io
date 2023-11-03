<template>
  <div id="doc" class="bg-[var(--primary-color)] bg-img min-h-screen">
    <div class="limit-width">
      <HeaderNav />
    </div>
    <PageHeader title="Open Source" />
    <div class="limit-width">
      <div class="w-[96%] mx-auto">
        <h1
          class="md:pt-20 pt-10 pb-6 text-center font-semibold text-3xl text-slate-600"
        >
        Software Toolkits
        </h1>

        <div class="opensource-section-container">
          <OpensourceToolkit
            title="D-Tunes: Configuration Engine for Geo-Replicated Cloud Storage"
            content="D-Tunes is a web tool that helps application developers configure replication strategies for geo-distributed datastores like Cassandra which uses quorum-based protocols."
            to-page="/opensource_pages/dtunes"
          />
          <OpensourceToolkit
            title="Routing Visualization Toolkit"
            content="The toolkit takes raw router configuration files as input, and generates scalable and human-friendly visualization of the network-wide routing design."
            to-page="https://engineering.purdue.edu/~isl/rvtool/"
          />

          <OpensourceToolkit
            title="VLAN Management Toolkit"
            content="The toolkit automates and visualizing typical VLAN-related management tasks."
            to-page="https://engineering.purdue.edu/~isl/vlantool/"
          />

          <OpensourceToolkit
            title="Chimera UAS Throughput Generation Tool"
            content="This repository contains Chimera UAS flight throughput trace generation tool and synthetic traces used in testing Chimera."
            to-page="https://github.com/Purdue-ISL/ChimeraTraceGeneration"
          />
        </div>

        <h1
          class="md:pt-20 pt-10 pb-6 text-center font-semibold text-3xl text-slate-600"
        >
        Datasets
        </h1>
        <div class="opensource-section-container">
          <OpensourceToolkit
            title="Xatu Dataset"
            content="This dataset contains video session data used to evaluate the Xatu system."
            to-page="https://github.com/Purdue-ISL/XatuDataset/"
          />
          <OpensourceToolkit
            title="Oboe Dataset"
            content="This dataset contains bandwidth traces of real video streaming sessions used to evaluate Oboe."
            to-page="https://github.com/USC-NSL/Oboe/"
          />
          <OpensourceToolkit
            title="Campus Configuration Data"
            content="A configuration snapshot of a large US campus network, which consists of configuration files of about 1600 switches and routers in total."
            to-page="https://engineering.purdue.edu/~isl/network-config/"
          />
        </div>
      </div>
    </div>
    <div class="pb-[30px]"></div>
  </div>
</template>
  
  <script type="module">
let projects_divs = [];
export default {
  methods: {
    overlap(element) {
      let topOverlap =
        (window.screen.height - element.getBoundingClientRect().top) /
        window.screen.height;
      if (topOverlap > 0.1) {
        element.classList.toggle("show-up");
        return true;
      }
      return false;
    },

    handleScroll() {
      var filtered = [];
      for (var idx in projects_divs) {
        if (this.overlap(projects_divs[idx])) {
          filtered.push(idx);
        }
      }
      for (var idx in filtered) {
        delete projects_divs[filtered[idx]];
      }
      if (Object.keys(projects_divs).length == 0) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    projects_divs = [];
    let projects_divs_nodelist = document.querySelectorAll(
      ".opensource-section-container-div"
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
  
  
<!-- 
        
       -->