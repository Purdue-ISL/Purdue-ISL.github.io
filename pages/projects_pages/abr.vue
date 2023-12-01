<template>
  <div id="doc" class="bg-[var(--primary-color)] bg-img min-h-screen">
    <div class="limit-width">
      <HeaderNav />
    </div>
    <PageHeader title="Projects" />
    <div class="limit-width">
      <div class="w-[96%] mx-auto"></div>
      <h1 class="subpages-title">
        Adaptive Bit Rate algorithms for Internet Video delivery
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
            Recent years have seen a tremendous increase in the popularity of Internet video,
             which forms a major fraction of Internet traffic today, and Cisco technical report 
             says that Internet video traffic expects to be 30 exabyte in 2020. In this trend, 
             delivering high quality of experience (QoE) is critical since it correlates with user 
             engagement and revenue. The project is investigating to deliver high quality video 
             across diverse and variable network conditions. Most Internet video delivery uses 
             adaptive bitrate (ABR) algorithms, combined with HTTP chunk-based streaming protocols, 
             and ABR algorithm is one of the critical part for success of high QoE Internet video 
             delivery. However, these ABR algorithms today have fixed and closed source implementations 
             which results in two problems: 1) content publishers can't customize them according to 
             their preference 2) no single algorithm works well across the diverse range of bandwidth 
             conditions in the wild. In order to solve these problems we propose a novel video delivery 
             pipeline. Our results show that our approach can improve the median QoE by 37% compared 
             to a commercial ABR.
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
            title="Exploring the interplay between CDN caching and video streaming performance"
            authors="Ehab Ghabashneh, Sanjay Rao"
            conference="IEEE INFOCOM 2020"
            paper="../papers/infocom2020.pdf"
            slides="../slides/infocom2020.pptx"
            video="../videos/infocom2020.mp4"
          />
          <PublicationsSeparator />
          
          <PublicationsPublication
            title="Oboe: Auto-tuning video ABR algorithms to network conditions"
            authors="Zahaib Akhtar*, Yun Seong Nam*, Ramesh Govindan, Sanjay Rao, Jessica Chen, Ethan Katz-Bassett, Bruno Ribeiro, Jibin Zhan, Hui Zhang (*: Both authors contributed equally)"
            conference="ACM SIGCOMM, 2018"
            paper="../papers/sigcomm18-final128.pdf"
          />
          <PublicationsSeparator />

          <PublicationsPublication
            title="Understanding Video Management Planes"
            authors="Zahaib Akhtar*, Yun Seong Nam*, Jessica Chen, Ramesh Govindan, Ethan Katz-Bassett, Sanjay Rao, Jibin Zhan, Hui Zhang (*: Both authors contributed equally)"
            conference="ACM IMC, 2018"
            paper="../papers/imc2018.pdf"
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
            <span class="font-bold text-xl">Collaborators</span>
            <div class="text-lg pl-2">
              <ul class="gap-10">
                <li class="font-mono tracking-tighter">Prof. Ramesh Govindan (University of Southern California)</li>
                <li class="font-mono tracking-tighter">Prof. Ethan Katz-Bassett (University of Southern California)</li>
                <li class="font-mono tracking-tighter">Prof. Jessica Chen (University of Windsor)</li>
                <li class="font-mono tracking-tighter">Hui Zhang (Conviva)</li>
                <li class="font-mono tracking-tighter">Jibin Zhan (Conviva)</li>
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
                    Yun Seong Nam (Purdue University)
                  </span>
                </li>

                <li>
                  <span class="font-mono tracking-tighter">
                    Ehab Ghabashneh (Purdue University)
                  </span>
                </li>

                <li>
                  <span class="font-mono tracking-tighter">
                    Zahaib Akhtar (University of Southern California)
                  </span>
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
  
  
  
