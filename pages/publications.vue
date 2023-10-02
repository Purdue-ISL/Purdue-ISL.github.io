<template>
  <div id="doc" class="bg-[var(--primary-color)] bg-img">
    <div class="limit-width">
      <HeaderNav />
    </div>
    <PageHeader title="Publications" />
    <div class="limit-width">
      <div class="w-[96%] mx-auto">
        <p class="ml-2 pt-8 font-extralight italic">**grouped by project</p>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">Datacenter Networks</h1>
          <div class="publication-div">
            <PublicationsPublication
              title="A Microscopic View of Bursts, Buffer Contention, and Loss in Data Centers"
              authors="Ehab Ghabashneh , Yimeng Zhao , Cristian Lumezanu , Neil Spring , Srikanth Sundaresan, Sanjay Rao"
              conference="Proceedings of ACM Internet Measurement Conference (IMC), 2022"
              paper="https://dl.acm.org/doi/pdf/10.1145/3517745.3561430"
            />
          </div>
        </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">
            ML and Data-Driven Optimization of Internet Video
          </h1>
          <div class="publication-div">
            <PublicationsPublication
              title="Dragonfly: Higher Perceptual Quality For Continuous 360° Video Playback"
              authors="Ehab Ghabashneh, Chandan Bothra, Ramesh Govindan, Antonio Ortega, and Sanjay Rao"
              conference="Proceedings of ACM Special Interest Group on Data Communications (SIGCOMM), 2023"
              paper="papers-pdf/dfly.pdf"
            /><PublicationsSeparator />
            <PublicationsPublication
              title="Xatu: Richer Neural Network Based Prediction for Video Streaming"
              authors="Yun Seong Nam, Jianfei Gao, Chandan Bothra, Ehab Ghabashneh, Sanjay Rao, Bruno Ribeiro, Jibin Zhan, Hui Zhang"
              conference="Proceedings of the ACM on Measurement and Analysis of Computing Systems (SIGMETRICS), 2022"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Pitfalls of data-driven networking: A case study of latent causal confounders in video streaming"
              authors="P. C. Sruthi, Sanjay Rao, Bruno Ribeiro"
              conference="ACM SIGCOMM Workshop on Network Meets AI & ML (NetAI), 2020"
            /><PublicationsSeparator />
            <PublicationsPublication
              title="Exploring the interplay between CDN caching and video streaming performance"
              authors="Ehab Ghabashneh, Sanjay Rao"
              conference="Proceedings of IEEE International Conference on Computer Communications (INFOCOM), 2020"
            /><PublicationsSeparator />
            <PublicationsPublication
              title="Oboe: Auto-tuning video ABR algorithms to network conditions"
              authors="Zahaib Akhtar*, Yun Seong Nam*, Ramesh Govindan, Sanjay Rao, Jessica Chen, Ethan Katz-Bassett, Bruno Ribeiro, Jibin Zhan, Hui Zhang"
              conference="Proceedings of ACM Special Interest Group on Data Communications (SIGCOMM), 2018"
              note="(* : Both authors contributed equally)"
            /><PublicationsSeparator />
            <PublicationsPublication
              title="Understanding Video Management Planes"
              authors="Zahaib Akhtar*, Yun Seong Nam*, Jessica Chen, Ramesh Govindan, Ethan Katz-Bassett, Sanjay Rao, Jibin Zhan, Hui Zhang"
              conference="Proceedings of ACM Internet Measurement Conference (IMC), 2018"
              note="(* : Both authors contributed equally)"
            /><PublicationsSeparator />
            <PublicationsPublication
              title="YouTube Everywhere: Impact of Device and Infrastructure Synergies on User Experience"
              authors="Alessandro Finamore, Ruben Torres, Marco Mellia, Maurizio Munafo and Sanjay Rao"
              conference="Proceedings of ACM Internet Measurement Conference (IMC), 2011"
            /><PublicationsSeparator />
            <PublicationsPublication
              title="Dissecting Video Server Selection Strategies in the YouTube CDN"
              authors="Ruben Torres, Alessandro Finamore, Jesse Kim, Marco Mellia, Maurizio Munafo and Sanjay Rao"
              conference="Proceedings of IEEE  International Conference on Distributed Computing Systems (ICDCS), 2011"
            />
          </div>
        </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">
            Synthesizing network designs with certifiable properties
          </h1>
          <div class="publication-div">
            <PublicationsPublication
              title="Flexile: Meeting bandwidth objectives almost always"
              authors="Chuan Jiang, Zixuan Li, Sanjay Rao, Mohit Tawarmalani"
              conference="Proceedings of ACM Conference on emerging Networking EXperiments and Technologies  (CoNEXT), 2022"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="PCF: Provably Resilient Flexible Routing"
              authors="Chuan Jiang, Zixuan Li, Sanjay Rao, Mohit Tawarmalani"
              conference="Proceedings of ACM Special Interest Group on Data Communications (SIGCOMM), 2020"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Lancet: Better network resilience by designing for pruned failure sets"
              authors="Yiyang Chang, Chuan Jiang, Ashish Chandra, Sanjay Rao, Mohit Tawarmalani"
              conference="Proceedings of the ACM on Measurement and Analysis of Computing Systems (SIGMETRICS), 2020"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Learning Network Design Objectives Using A Program Synthesis Approach"
              authors="Yanjun Wang, Chuan Jiang, Xiaokang Qiu, Sanjay G. Rao"
              conference="Proceedings of the 18th ACM Workshop on Hot Topics in Networks (HotNets), 2019"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Robust validation of network designs under uncertain demands and failures"
              authors="Yiyang Chang, Sanjay Rao, Mohit Tawarmalani"
              conference="Proceedings of the 14th USENIX Symposium on Networked Systems Design and Implementation (NSDI), 2017"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Alpaca: Compact Network Policies With Attribute-Encoded Addresses"
              authors="Nanxi Kang, Ori Rottenstreich, Sanjay Rao and Jennifer Rexford"
              conference="IEEE/ACM Transactions on Networking, 2017."
              note=" An earlier version of this paper appeared in ACM CoNext 2015"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Hydra: Leveraging Functional Slicing for Efficient Distributed SDN Controllers"
              authors="Yiyang Chang, Ashkan Rezaei, Balajee Vamanan, Jahangir Hasan, Sanjay Rao, and T. N. Vijaykumar"
              conference="proceedings of the 9th IEEE International Conference on COMmunication Systems and NETworkS (IEEE COMSNETS), 2017"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Composing middlebox and traffic engineering policies in SDNs"
              authors="Yiyang Chang, Gustavo Petri, Sanjay Rao, Tiark Rompf"
              conference="Proceedings of the 2nd International INFOCOM Workshop on Software-Driven Flexible and Agile Networking (IEEE INFOCOM Workshop SWFAN), 2017"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Modeling Complexity of Enterprise Routing Design"
              authors="Xin Sun, Sanjay G. Rao and Geoffrey G. Xie"
              conference="Proceedings of ACM Conference on emerging Networking EXperiments and Technologies  (CoNEXT), 2022"
              note="See Purdue Technical Report version TR-ECE-12-10"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Towards Systematic Design of Enterprise Networks"
              authors="Yu-Wei Sung, Xin Sun, Sanjay Rao, Geoffrey Xie and David Maltz"
              conference="IEEE/ACM Transactions on Networking (ToN), 2011"
            />
          </div>
        </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">
            Video streaming in Unmanned Aerial Systems (UAS) settings
          </h1>
          <div class="publication-div">
            <PublicationsPublication
              title="Chimera: exploiting UAS flight path information to optimize heterogeneous data transmission"
              authors="Russell Shirey, Sanjay Rao, Shreyas Sundaram"
              conference="IEEE 29th International Conference on Network Protocols (ICNP), 2021"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Optimizing Quality of Experience for Long-Range UAS Video Streaming"
              authors="Russell Shirey, Sanjay Rao, Shreyas Sundaram"
              conference="IEEE/ACM 29th International Symposium on Quality of Service (IWQoS), 2021"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Measuring Fixed Wing UAS Networks at Long Range"
              authors="Russell Shirey, Sanjay Rao, Shreyas Sundaram"
              conference="6th ACM Workshop on Micro Aerial Vehicle Networks, Systems, and Applications (DroNet), 2020"
            />
          </div>
        </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">
            Achieving low mobile web latency
          </h1>
          <div class="publication-div">
            <PublicationsPublication
              title="NutShell: Scalable Whittled Proxy Execution for Low-Latency Web over Cellular Networks"
              authors="Ashiwan Sivakumar, Chuan Jiang, Yun Seong Nam, Shankaranarayanan P N, Vijay Gopalakrishnan, Sanjay Rao, Subhabrata Sen, Mithuna Thottethodi, Vijaykumar T.N."
              conference="Proceedings of ACM Annual International Conference On Mobile Computing And Networking (MobiCom) 2017"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Reducing latency through page-aware management of web objects by Content Delivery Networks"
              authors="Shankaranarayanan P N, Yun Seong Nam, Ashiwan Sivakumar, Balakrishnan Chandrasekaran, Bruce Maggs, Sanjay Rao"
              conference="Proceedings of ACM  International Conference on Measurement and Modeling of Computer Science (SIGMETRICS), 2016"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="PARCEL: Proxy Assisted bRowsing in Cellular networks for Energy and Latency reduction"
              authors="Ashiwan Sivakumar, Shankaranarayanan P N, Vijay Gopalakrishnan, Seungjoon Lee, Sanjay Rao and Subhabrata Sen"
              conference="Proceedings of ACM Conference on emerging Networking EXperiments and Technologies (CoNEXT), 2014"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Cloud is not a silver bullet: A Case Study of Cloud-based Mobile Browsing"
              authors="Ashiwan Sivakumar, Vijay Gopalakrishnan, Seungjoon Lee, Sanjay Rao, Subhabrata Sen and Oliver Spatscheck"
              conference="Proceedings of the 15th Workshop on Mobile Computing Systems and Applications (HotMobile), 2014"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="pb-[150px]"></div>
  </div>
</template>

<script type="module">
let publications_divs = [];
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
      for (var idx in publications_divs) {
        if (this.overlap(publications_divs[idx])) {
          filtered.push(idx);
        }
      }
      for (var idx in filtered) {
        delete publications_divs[filtered[idx]];
      }
      if (Object.keys(publications_divs).length == 0) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);

    let publications_divs_nodelist = document.querySelectorAll(
      ".publication-project-container"
    );
    publications_divs_nodelist.forEach((publications_div) => {
      publications_divs.push(publications_div);
      if (publications_div.classList.contains("show-up")) {
        publications_div.classList.toggle("show-up");
      }
    });

    window.addEventListener("scroll", this.handleScroll);
    // in case height is small.
    this.handleScroll();
  },
};
</script>

