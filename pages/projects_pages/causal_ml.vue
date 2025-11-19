<template>
  <div id="doc" class="bg-[var(--primary-color)] bg-img min-h-screen">
    <div class="limit-width">
      <HeaderNav />
    </div>
    <PageHeader title="Projects" />
    <div class="limit-width">
      <div class="w-[96%] mx-auto"></div>
      <h1 class="subpages-title">
        Causal Reasoning for Data-Driven Networking
      </h1>
      <h1 class="text-center text-xl">
        Supported by NSF Award Number: 2212160
      </h1>
      <SubPageNav
        v-bind:data="[
          ['Description', 'des'],
          ['Publications', 'pub'],
          ['Outreach', 'out'],
          ['Other Relavent Publications', 'otherpub'],
          ['People', 'ppl'],
        ]"
      />

      <div id="des" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Description</h1>
        </div>
        <div class="subpages-section-content">
          <p>
            A central theme of networking is answering what-if questions -- i.e., given recorded data of an existing deployed system, what would be the performance impact if we changed the design of the system (e.g., deployed a new video streaming algorithm), or if the environment changed relative to how data was collected (i.e., a shift in distribution). Answering what-if questions of this nature is also known as causal reasoning, which considers the effect of events that did not occur while the data was being recorded.
           <br /><br />

            Several widely used machine learning (ML) tools (e.g., off-the-shelf neural networks) are inadequate for causal reasoning since they merely capture correlations in collected data. This limits them to predictions that pertain to how a deployed system with an existing design and in an existing environment performs in the future. They incur biases when faced with "what-if" questions, or when aspects of the environment change. Other approaches such as Reinforcement Learning and Randomized Control Trials could be disruptive to the performance of real users, and are not designed to answer ``what-if'' questions about past sessions.
            <br /><br />

            Causal reasoning is uniquely challenging in networking since many algorithms (e.g., adaptive bit rate algorithms, traffic engineering) are adaptive and make their decisions based on network state. Network state variables often act as confounding variables resulting in spurious correlations. Unfortunately, on the networking side, researchers are generally ill-equipped to deal with the hidden complexity that arises from performing ML over causal questions. On the ML side, researchers do not yet have effective tools to answer the types of complex real-world causal questions that the scale and adaptive nature of networking applications require.
            <br /><br />

            In this project, we are exploring causal reasoning on passively collected networked data, which is not disruptive to the performance of live users. Our project supports causal reasoning not only about how the proposed change would affect sessions in the future, but also how it would have affected a given session in the past (also referred to as counterfactual reasoning).
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
              title="Hattrick: Solving Multiclass TE using Neural Models"
              authors="Abd AlRhman AlQiam, Zhuocong Li, Satyajeet Singh Ahuja, Zhaodong Wang, Ying Zhang, Sanjay G. Rao, Bruno Ribeiro, and Mohit Tawarmalani"
              conference="Proceedings of ACM Special Interest Group on Data Communications (SIGCOMM), 2025"
              paper="papers-pdf/hattrick_sigcomm.pdf"
              github="https://github.com/Purdue-ISL/Hattrick"
            />
            <PublicationsSeparator />

          <PublicationsPublication
            title="Transferable Neural WAN TE for Changing Topologies"
            authors="Abd AlRhman AlQiam, Yuanjun Yao, Zhaodong Wang, Satyajeet Ahuja Singh, Ying Zhang, Sanjay G. Rao, Bruno Ribeiro and Mohit Tawarmalani"
            conference="Proceedings of the ACM SIGCOMM 2024 Conference, August 2024"
            paper="../papers/HARP_SIGCOMM_Paper.pdf"
            slides="../slides/HARP-SIGCOMM-2024-Slides.pptx"
            video="https://www.youtube.com/watch?v=7E6mj40poMs"
            github="https://github.com/Purdue-ISL/HARP"
          />
          <PublicationsSeparator />

          <PublicationsPublication
            title="Veritas: Answering Causal Queries from Video Streaming Traces"
            authors="Chandan Bothra, Jianfei Gao, Sanjay Rao, and Bruno Ribeiro"
            conference="Proceedings of ACM Special Interest Group on Data Communications (SIGCOMM), 2023"
            paper="https://dl.acm.org/doi/pdf/10.1145/3603269.3604828"
            slides="https://purdue-isl.github.io/papers-pdf/veritas_slides.pptx"
            video="https://www.youtube.com/watch?v=ZqIKtuQ1gtY"
            github="https://github.com/Purdue-ISL/Veritas"
          />
          <PublicationsSeparator />

          <PublicationsPublication
            title="Causal lifting and link prediction"
            authors="Cotta, Leonardo and Bevilacqua, Beatrice and Ahmed, Nesreen and Ribeiro, Bruno"
            conference="Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences , v.479 , 2023"
            paper="https://doi.org/10.1098/rspa.2023.0121"
          />
          <PublicationsSeparator />

          <PublicationsPublication
            title="Constraint-based Causal Discovery from a Collection of Conditioning Sets"
            authors="Lee, Kenneth and Ribeiro, Bruno and Kocaoglu, Murat"
            conference="Proceedings of the Forty-First Conference on Uncertainty in Artificial Intelligence, 2025"
            paper="https://dl.acm.org/doi/10.5555/3762387.3762495"
          />
          <PublicationsSeparator />
        
        </div>
      </div>

      <div id="out" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Outreach</h1>
        </div>
        <div class="subpages-section-content">
          
          <PublicationsPublication
            title="Crafting Principled Machine Learning Architectures for Networked Systems"
            authors="Sanjay Rao and Bruno Ribeiro"
            conference="The Networking Channel, March 2025"
          />
          <PublicationsSeparator />

          <PublicationsPublication
            title="Can ML models replace network algorithms? Feasibility, challenges, and how to get there"
            authors="Panel organized and moderated by Sanjay Rao at ACM Sigcomm 2024 with panelists including Mohammad Alizadeh (MIT), Behnaz Arzani (Microsoft), Bruno Ribeiro (Purdue), and Keith Winstein (Stanford)"
            conference="ACM SIGCOMM 2024"
          />
          <PublicationsSeparator />

        </div>
      </div>

      <div id="otherpub" class="subpages-section-container-div">
        <div class="subpages-section-title-container-div">
          <h1 class="subpages-section-title">Other Relavent Publications</h1>
        </div>
        <div class="subpages-section-content">
          
          <PublicationsPublication
            title="Xatu: Richer Neural Network Based Prediction for Video Streaming"
            authors="Yun Seong Nam, Jianfei Gao, Chandan Bothra, Ehab Ghabashneh, Sanjay Rao, Bruno Ribeiro, Jibin Zhan, Hui Zhang"
            conference="ACM Sigmetrics 2022"
            paper="https://dl.acm.org/doi/pdf/10.1145/3491056"
            slides="../slides/Xatu-Sigmetrics-2022.pdf"
            video="../videos/Xatu-Sigmetrics-2022.mp4"
            dataset="https://github.com/Purdue-ISL/XatuDataset/"
          />
          <PublicationsSeparator />

          <PublicationsPublication
            title="Pitfalls of data-driven networking: A case study of latent causal confounders in video streaming"
            authors="P. C. Sruthi, Sanjay Rao, Bruno Ribeiro"
            conference="ACM SIGCOMM 2020 Workshop on Network Meets AI & ML (NetAI 2020)"
            paper="../papers/sigcomm-netai2020.pdf"
            slides="../slides/sigcomm-netai2020-slides.pdf"
            video="https://www.youtube.com/watch?v=jYYmXLEXTjM"
          />
          <PublicationsSeparator />

          <PublicationsPublication
            title="Oboe: Auto-tuning Video ABR Algorithms to Network Conditions"
            authors="Zahaib Akhtar, Yun Seong Nam, Ramesh Govindan, Sanjay Rao, Jessica Chen, Ethan Katz Bassett, Bruno Martins Ribeiro, Jibin Zhan, Hui Zhang"
            conference="ACM SIGCOMM 2018"
            paper="../papers/sigcomm18-final128.pdf"
            video="https://www.youtube.com/watch?v=4ehZhvvAA-I&t=16514s"
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
                    Abd-Al Rhman Al Qiam
                  </span>
                  <span>— Ph.D. student</span>
                </li>

                <li>
                  <span class="font-mono tracking-tighter">
                    Chandan Bothra
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

          <div>
            <span class="font-bold text-xl">Collaborators</span>
            <div class="text-lg pl-2">
              <ul class="gap-10">
                <li>
                  <span class="font-mono tracking-tighter">
                    Amazon Prime
                  </span>
                  <span> (lead contact Dr. Zahaib Akhtar)</span>
                </li>

                <li>
                  <span class="font-mono tracking-tighter">
                    Meta
                  </span>
                  <span> (lead contact: Dr. Ying Zhang)</span>
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
  
  
  
