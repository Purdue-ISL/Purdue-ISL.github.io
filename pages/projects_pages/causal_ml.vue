<template>
  <div id="doc" class="bg-[var(--primary-color)] bg-img min-h-screen">
    <div class="limit-width">
      <HeaderNav />
    </div>
    <PageHeader title="Projects" />
    <div class="limit-width">
      <div class="w-[96%] mx-auto"></div>
      <h1 class="subpages-title">
        Causal ML models for Data-Driven Networking
      </h1>
      <SubPageNav
        v-bind:data="[
          ['Description', 'des'],
          ['Publications', 'pub'],
          ['Dataset', 'ds'],
          ['People', 'ppl'],
        ]"
      />

      <div id="des" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Description</h1>
        </div>
        <div class="subpages-section-content">
          <p>
            A central theme of data-driven networking is answering what-if 
            questions -- what would be the impact of changing the design of 
            a networked system, given data obtained from a real-world deployment 
            of an existing system. For instance, trace data from past video 
            streaming sessions may be used to analyze the impact on performance 
            if a new bit rate choice were added (e.g., introducing a 8K resolution), 
            an existing bit rate choice were removed (e.g., during the COVID crisis, 
            many video publishers restricted the maximum bitrate), or a new Adaptive 
            Bitrate (ABR) algorithm were used. With the growing interest in Edge 
            Computing, a network designer may seek to understand the benefits of 
            reducing round-trip time by moving servers closer to the end users given 
            \performance traces collected from video servers in existing locations. 
            Answering what-if questions of this nature is also known as causal reasoning. 
            Causal reasoning considers the effect of events that did not occur while the data 
            was being recorded, and is often used in fields such as epidemiology.
           <br /><br />

            Several widely used ML tools are inadequate for causal reasoning. 
            Many approaches (e.g., neural networks) merely capture correlations in 
            collected data. While they work well about answering questions about existing 
            systems, they suffer from biases when answering causal questions which pertain 
            to changes in the system design. Other approaches such as Reinforcement Learning and 
            Randomized Control Trials allow reasoning about a redesigned system but require active 
            interventions that involve changing a system, and observing its performance among real 
            users, which could be disruptive to the performance of real users. In this project, we 
            are investigating the use of causal reasoning approaches to answer “what-if questions” 
            using data collected from prior deployments of these systems. We are initially focusing our 
            explorations on video streaming, given the importance of the domain, although we believe 
            the issues are more general across networking.
            <br /><br />

            Some example contributions from the project include (i) Xatu, a system that uses LSTMs 
            to achieve high prediction accuracies for throughput in video streaming systems 
            (a pre-requisite for the design of video streaming algorithms). Xatu achieves prediction 
            accuracies of over 24% relative to state-of-the-art; and (ii) Oboe, a system for auto-tuning 
            a wide range of Adaptive Bit Rate algorithms (a key building block for Internet video) to 
            network conditions. Oboe significantly outperforms state-of-the-art approaches including 
            a reinforcement learning method; and (iii) exploring the benefits of deploying servers at 
            the edge to optimize Internet video, and designing video streaming algorithms that can 
            exploit the same. We have released two large-scale datasets of real video sessions to the 
            research community as part of the project.
            <br /><br />

          </p>
        </div>
      </div>

      <div id="pub" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Publications</h1>
        </div>
        <div class="subpages-section-content">
          <PublicationsPublication
            title="Xatu: Richer Neural Network Based Prediction for Video Streaming"
            authors="Yun Seong Nam, Jianfei Gao, Chandan Bothra, Ehab Ghabashneh, Sanjay Rao, Bruno Ribeiro, Jibin Zhan, Hui Zhang"
            conference="ACM Sigmetrics 2022"
            paper="https://dl.acm.org/doi/pdf/10.1145/3491056"
            slides="slides/Xatu-Sigmetrics-2022.pdf"
            video="videos/Xatu-Sigmetrics-2022.mp4"
          />
          <PublicationsSeparator />

          <PublicationsPublication
            title="Pitfalls of data-driven networking: A case study of latent causal confounders in video streaming"
            authors="P. C. Sruthi, Sanjay Rao, Bruno Ribeiro"
            conference="ACM SIGCOMM 2020 Workshop on Network Meets AI & ML (NetAI 2020)"
            paper="papers/sigcomm-netai2020.pdf"
            slides="slides/sigcomm-netai2020-slides.pdf"
            video="https://www.youtube.com/watch?v=jYYmXLEXTjM"
          />
          <PublicationsSeparator />

          <PublicationsPublication
            title="Oboe: Auto-tuning Video ABR Algorithms to Network Conditions"
            authors="Zahaib Akhtar, Yun Seong Nam, Ramesh Govindan, Sanjay Rao, Jessica Chen, Ethan Katz Bassett, Bruno Martins Ribeiro, Jibin Zhan, Hui Zhang"
            conference="ACM SIGCOMM 2018"
            paper="papers/sigcomm18-final128.pdf"
            video="https://www.youtube.com/watch?v=4ehZhvvAA-I&t=16514s"
          />
          <PublicationsSeparator />
        </div>
      </div>

      <div id="ds" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Datasets</h1>
        </div>
        <div class="subpages-section-content">
          <PublicationsPublication
            title="Xatu"
            authors="This dataset contains video session data used to evaluate the Xatu system."
            dataset="https://github.com/Purdue-ISL/XatuDataset/"
          />
          <PublicationsSeparator />

          <PublicationsPublication
            title="Oboe"
            authors="This dataset contains bandwidth traces of real video streaming sessions used to evaluate Oboe."
            dataset="https://github.com/USC-NSL/Oboe"
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
                <li class="font-mono tracking-tighter">Prof. Bruno Riberio</li>
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
                    Chandan Bothra
                  </span>
                  <span>— Ph.D. student</span>
                </li>

                <li>
                  <span class="font-mono tracking-tighter">
                    Ehab Ghabashneh
                  </span>
                  <span>— Ph.D. student</span>
                </li>

                <li>
                  <span class="font-mono tracking-tighter">
                    Jianfei Gao </span
                  ><span> — Ph.D. student</span>
                </li>
                
              </ul>
            </div>
          </div>
          <br />

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
  
  
  
