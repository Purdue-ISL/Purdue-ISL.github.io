<template>
  <div id="doc" class="bg-[var(--primary-color)] bg-img min-h-screen">
    <div class="limit-width">
      <HeaderNav />
    </div>
    <PageHeader title="Open Source" />
    <div class="limit-width">
      <div class="w-[96%] mx-auto"></div>
      <h1 class="subpages-title">
        D-Tunes: Configuration Engine for Geo-Replicated Cloud Storage
      </h1>
      <SubPageNav
        v-bind:data="[
          ['Description', 'des'],
          ['Install', 'ins'],
          ['Examples', 'eg'],
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
            Routing design is widely considered as one of the most challenging
            parts of enterprise network design. The challenges come from the
            typical large scale of such networks, the diverse objectives to meet
            through design, and a wide variety of protocols and mechanisms to
            choose from. As a result network operators often find it difficult
            to understand and troubleshoot the routing design of their networks.
            Furthermore, today common practice of focusing on one router or one
            protocol at a time makes it a onerous task to reason about the
            network-wide routing behavior. <br /><br />

            We believe that to mitigate the problem, there is a need forsoftware
            tools to produce effective visualization of enterprise routing
            designs. In this paper we report on our experience building such a
            toolkit. We begin by abstracting various routing mechanisms into a
            small number of design primitives. The abstraction allows for a more
            concise representation of routing design without losing important
            design information, which is critical for making the tool scalable.
            Guided by the abstraction, we then develop a set of algorithms and
            heuristics, which take router configuration files as input and
            output a graphical representation of the routing design. The layout
            and components of the graph are highly customized to optimize its
            readability and power to infer the network-wide design pattern.
            <br /><br />

            We also present a case study using the toolkit to analyze the
            routing design of two large campus networks, and report on our
            findings. Our experience confirms the effectiveness of our toolkit
            in revealing key design characteristics of the networks, and in
            illustrating the network-wide routing behavior.
          </p>
        </div>
        <div class="px-12 pb-6 text-justify">
          <p class="pb-2 pl-1">
            If you to use this tool, please cite the following paper:
          </p>
          <div class="code-block">
            <pre>
                <code >
                    @InProceedings{6111664, 
                    author={Sun, Xin and Jinliang Wei and Rao,Sanjay G. and Xie, Geoffrey G.}, 
                    booktitle={2011 4th Symposium on Configuration Analytics and Automation (SAFECONFIG)}, 
                    title={A software toolkit for visualizing enterprise routing design},
                    year={2011},
                    pages={1-8},
                    doi={10.1109/SafeConfig.2011.6111664}}
                </code>
            </pre>
          </div>
        </div>
      </div>

      <div id="ins" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Install</h1>
        </div>
        <div class="subpages-section-content">
          <p>
            Routing design is widely considered as one of the most challenging
            parts of enterprise network design. The challenges come from the
            typical large scale of such networks, the diverse objectives to meet
            through design, and a wide variety of protocols and mechanisms to
            choose from. As a result network operators often find it difficult
            to understand and troubleshoot the routing design of their networks.
            Furthermore, today common practice of focusing on one router or one
            protocol at a time makes it a onerous task to reason about the
            network-wide routing behavior. <br /><br />

            We believe that to mitigate the problem, there is a need forsoftware
            tools to produce effective visualization of enterprise routing
            designs. In this paper we report on our experience building such a
            toolkit. We begin by abstracting various routing mechanisms into a
            small number of design primitives. The abstraction allows for a more
            concise representation of routing design without losing important
            design information, which is critical for making the tool scalable.
            Guided by the abstraction, we then develop a set of algorithms and
            heuristics, which take router configuration files as input and
            output a graphical representation of the routing design. The layout
            and components of the graph are highly customized to optimize its
            readability and power to infer the network-wide design pattern.
            <br /><br />

            We also present a case study using the toolkit to analyze the
            routing design of two large campus networks, and report on our
            findings. Our experience confirms the effectiveness of our toolkit
            in revealing key design characteristics of the networks, and in
            illustrating the network-wide routing behavior.
          </p>
        </div>
        <div class="px-12 pb-6 text-justify">
          <p class="pb-2 pl-1">
            If you to use this tool, please cite the following paper:
          </p>
          <div class="code-block">
            <pre>
                <code >
                    @InProceedings{6111664, 
                    author={Sun, Xin and Jinliang Wei and Rao,Sanjay G. and Xie, Geoffrey G.}, 
                    booktitle={2011 4th Symposium on Configuration Analytics and Automation (SAFECONFIG)}, 
                    title={A software toolkit for visualizing enterprise routing design},
                    year={2011},
                    pages={1-8},
                    doi={10.1109/SafeConfig.2011.6111664}}
                </code>
            </pre>
          </div>
        </div>
      </div>

      <div id="eg" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Example</h1>
        </div>
        <div class="subpages-section-content">
          <p>
            We also present a case study using the toolkit to analyze the
            routing design of two large campus networks, and report on our
            findings. Our experience confirms the effectiveness of our toolkit
            in revealing key design characteristics of the networks, and in
            illustrating the network-wide routing behavior.
          </p>
          <p>
            We also present a case study using the toolkit to analyze the
            routing design of two large campus networks, and report on our
            findings. Our experience confirms the effectiveness of our toolkit
            in revealing key design characteristics of the networks, and in
            illustrating the network-wide routing behavior.
          </p>
          <p>
            We also present a case study using the toolkit to analyze the
            routing design of two large campus networks, and report on our
            findings. Our experience confirms the effectiveness of our toolkit
            in revealing key design characteristics of the networks, and in
            illustrating the network-wide routing behavior.
          </p>
          <p>
            We also present a case study using the toolkit to analyze the
            routing design of two large campus networks, and report on our
            findings. Our experience confirms the effectiveness of our toolkit
            in revealing key design characteristics of the networks, and in
            illustrating the network-wide routing behavior.
          </p>
          <p>
            We also present a case study using the toolkit to analyze the
            routing design of two large campus networks, and report on our
            findings. Our experience confirms the effectiveness of our toolkit
            in revealing key design characteristics of the networks, and in
            illustrating the network-wide routing behavior.
          </p>

          <p class="pb-2 pl-1">
            If you to use this tool, please cite the following paper:
          </p>
          <div class="code-block">
            <pre>
                <code >
                    @InProceedings{6111664, 
                    author={Sun, Xin and Jinliang Wei and Rao,Sanjay G. and Xie, Geoffrey G.}, 
                    booktitle={2011 4th Symposium on Configuration Analytics and Automation (SAFECONFIG)}, 
                    title={A software toolkit for visualizing enterprise routing design},
                    year={2011},
                    pages={1-8},
                    doi={10.1109/SafeConfig.2011.6111664}}
                </code>
            </pre>
          </div>
        </div>
      </div>

      <div id="pub" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Publications</h1>
        </div>
        <div class="subpages-section-content">
          <p>
            Routing design is widely considered as one of the most challenging
            parts of enterprise network design. The challenges come from the
            typical large scale of such networks, the diverse objectives to meet
            through design, and a wide variety of protocols and mechanisms to
            choose from. As a result network operators often find it difficult
            to understand and troubleshoot the routing design of their networks.
            Furthermore, today common practice of focusing on one router or one
            protocol at a time makes it a onerous task to reason about the
            network-wide routing behavior. <br /><br />

            We believe that to mitigate the problem, there is a need forsoftware
            tools to produce effective visualization of enterprise routing
            designs. In this paper we report on our experience building such a
            toolkit. We begin by abstracting various routing mechanisms into a
            small number of design primitives. The abstraction allows for a more
            concise representation of routing design without losing important
            design information, which is critical for making the tool scalable.
            Guided by the abstraction, we then develop a set of algorithms and
            heuristics, which take router configuration files as input and
            output a graphical representation of the routing design. The layout
            and components of the graph are highly customized to optimize its
            readability and power to infer the network-wide design pattern.
            <br /><br />

            We also present a case study using the toolkit to analyze the
            routing design of two large campus networks, and report on our
            findings. Our experience confirms the effectiveness of our toolkit
            in revealing key design characteristics of the networks, and in
            illustrating the network-wide routing behavior.
          </p>
        </div>
        <div class="px-12 pb-6 text-justify">
          <p class="pb-2 pl-1">
            If you to use this tool, please cite the following paper:
          </p>
          <div class="code-block">
            <pre>
                <code >
                    @InProceedings{6111664, 
                    author={Sun, Xin and Jinliang Wei and Rao,Sanjay G. and Xie, Geoffrey G.}, 
                    booktitle={2011 4th Symposium on Configuration Analytics and Automation (SAFECONFIG)}, 
                    title={A software toolkit for visualizing enterprise routing design},
                    year={2011},
                    pages={1-8},
                    doi={10.1109/SafeConfig.2011.6111664}}
                </code>
            </pre>
          </div>
        </div>
      </div>

      <div id="ppl" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">People</h1>
        </div>
        <div class="subpages-section-content">
          <p>
            Routing design is widely considered as one of the most challenging
            parts of enterprise network design. The challenges come from the
            typical large scale of such networks, the diverse objectives to meet
            through design, and a wide variety of protocols and mechanisms to
            choose from. As a result network operators often find it difficult
            to understand and troubleshoot the routing design of their networks.
            Furthermore, today common practice of focusing on one router or one
            protocol at a time makes it a onerous task to reason about the
            network-wide routing behavior. <br /><br />

            We believe that to mitigate the problem, there is a need forsoftware
            tools to produce effective visualization of enterprise routing
            designs. In this paper we report on our experience building such a
            toolkit. We begin by abstracting various routing mechanisms into a
            small number of design primitives. The abstraction allows for a more
            concise representation of routing design without losing important
            design information, which is critical for making the tool scalable.
            Guided by the abstraction, we then develop a set of algorithms and
            heuristics, which take router configuration files as input and
            output a graphical representation of the routing design. The layout
            and components of the graph are highly customized to optimize its
            readability and power to infer the network-wide design pattern.
            <br /><br />

            We also present a case study using the toolkit to analyze the
            routing design of two large campus networks, and report on our
            findings. Our experience confirms the effectiveness of our toolkit
            in revealing key design characteristics of the networks, and in
            illustrating the network-wide routing behavior.
          </p>
        </div>
        <div class="px-12 pb-6 text-justify">
          <p class="pb-2 pl-1">
            If you to use this tool, please cite the following paper:
          </p>
          <div class="code-block">
            <pre>
                <code >
                    @InProceedings{6111664, 
                    author={Sun, Xin and Jinliang Wei and Rao,Sanjay G. and Xie, Geoffrey G.}, 
                    booktitle={2011 4th Symposium on Configuration Analytics and Automation (SAFECONFIG)}, 
                    title={A software toolkit for visualizing enterprise routing design},
                    year={2011},
                    pages={1-8},
                    doi={10.1109/SafeConfig.2011.6111664}}
                </code>
            </pre>
          </div>
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


