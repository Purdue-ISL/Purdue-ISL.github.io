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
        Flexible Data Plane Programming
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
            Data plane programming has been widely adopted by both academia and industry. 
            As a prominent instance, the P4 programming language has been a key language 
            enabling flexible data plane programming with the support of compilers, 
            formal semantics, verification frameworks, testing systems, as well as 
            commodity hardware such as Intel Tofino and Cisco Silicon One. Despite these 
            promising development, there is still a long way to go to let average network 
            architects program data planes in a natural and efficient way. One unique 
            challenge for data plane programming stems from the inherent tension between 
            abstraction and customized optimization.
            <br> <br>
            On one hand, today’s data plane programming is too low level — P4 and other 
            languages used by practitioners are hardware-specific and lack many common 
            features most other programmers enjoy everyday (e.g., encapsulation, modularity, 
            libraries); network programmers have to be aware of hardware resources and 
            limitations, tune a lot of details (e.g., determining states, table sizes or 
            memory configurations) of the code to satisfy different hardware constraints, 
            update the code frequently when the network changes, and receive little help for 
            debugging.
            <br> <br>
            On the other hand, today’s data plane programming is also too high level — it 
            relies on compilers to perform standard, per-switch optimizations, and it is hardly 
            possible for a programmer to make any networkwide optimizations (e.g., distributing 
            workload to multiple switches) or customize the optimization target for a special 
            scenario or application.
            <br> <br>
            Matching the two conflicting problems, we have seen two disconnected directions of 
            research in recent years. One emerging direction is to introduce higher-level, more 
            abstract languages with more convenient programming tools; but programmers usually have 
            to give up their flexible, fine-granulated optimization goals. Oppositely, another 
            direction is to develop advanced optimization techniques that expect 
            user-provided-guidance (e.g., program segmentations, application-specific labels and 
            policies), making them not accessible to simple network programmers.
            <br> <br>
            The goal of this project is to reconcile the two research directions by developing a 
            radically new programming system for data plane programming, with which a user can 
            naturally and flexibly describe her network design and optimization goals and the 
            corresponding optimal data plane can be automatically generated.
      
          
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
            
            <PublicationsPublication
              title="P4CGO: Control Plane Guided P4 Program Optimization"
              authors="Chenan Wen, Zhuocong Li, Syed Usman Jafri, Xiaokang Qiu and Sanjay Rao"
              conference="FMANO '24: Proceedings of the 2024 SIGCOMM Workshop on Formal Methods Aided Network Operation, August 2024"
              paper="papers/P4CGO_FMANO_2O24.pdf"
            /><PublicationsSeparator />
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
              paper="../papers/HotNets_2019_Paper.pdf"
            /><PublicationsSeparator />
          </p>
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
                    Chenan Wen
                  </span>
                  <span>— Ph.D. student</span>
                </li>

                <li>
                  <span class="font-mono tracking-tighter">
                    Syed Usman Jafri </span
                  ><span> — Ph.D. student</span>
                </li>
                <li>
                  <span class="font-mono tracking-tighter">
                    Zhuocong Li </span
                  ><span> — Undergraduate student</span>
                </li>
              </ul>
            </div>
          </div>
          <br />

          <div>
            <span class="font-bold text-xl">Graduated Students</span>
            <div class="text-lg pl-2">
              <ul class="gap-10">
                <li>
                  <span class="font-mono tracking-tighter">
                    Chuan Jiang
                  </span>
                  <span>— Ph.D.</span>
                </li>

                <li>
                  <span class="font-mono tracking-tighter">
                    Yanjun Wang </span
                  ><span> — Ph.D.</span>
                </li>

                <li>
                  <span class="font-mono tracking-tighter">
                    Zixuan Li </span
                  ><span> — MS</span>
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
                    >Prof. Xiaokang Qiu</span
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
    // in case height is small.
    this.handleScroll();
  },
};
</script>
