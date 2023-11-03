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
              slides="slides/imc2022.pptx"
              video="videos/imc2022.m4v"
              dataset="https://github.com/facebookresearch/Millisampler-data"
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
              slides="papers-pdf/Dragonfly-Sigcomm23_final.pptx"
              video="https://www.youtube.com/watch?v=FHyaGPMBV6c"
              github="https://github.com/Purdue-ISL/Dragonfly"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Veritas: Answering Causal Queries from Video Streaming Traces"
              authors="Chandan Bothra, Jianfei Gao, Sanjay Rao, and Bruno Ribeiro"
              conference="Proceedings of ACM Special Interest Group on Data Communications (SIGCOMM), 2023"
              paper="https://dl.acm.org/doi/pdf/10.1145/3603269.3604828"
              slides="papers-pdf/veritas_slides.pptx"
              video="https://www.youtube.com/watch?v=ZqIKtuQ1gtY"
              github="https://github.com/Purdue-ISL/Veritas"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Xatu: Richer Neural Network Based Prediction for Video Streaming"
              authors="Yun Seong Nam, Jianfei Gao, Chandan Bothra, Ehab Ghabashneh, Sanjay Rao, Bruno Ribeiro, Jibin Zhan, Hui Zhang"
              conference="Proceedings of the ACM on Measurement and Analysis of Computing Systems (SIGMETRICS), 2022"
              paper="https://dl.acm.org/doi/pdf/10.1145/3491056"
              slides="papers-pdf/Xatu-Sigmetrics-2022.pdf"
              video="videos/Xatu-Sigmetrics-2022.mp4"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Pitfalls of data-driven networking: A case study of latent causal confounders in video streaming"
              authors="P. C. Sruthi, Sanjay Rao, Bruno Ribeiro"
              conference="ACM SIGCOMM Workshop on Network Meets AI & ML (NetAI), 2020"
              paper="papers/sigcomm-netai2020.pdf"
              slides="slides/sigcomm-netai2020-slides.pdf"
              video="https://www.youtube.com/watch?v=jYYmXLEXTjM"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Exploring the interplay between CDN caching and video streaming performance"
              authors="Ehab Ghabashneh, Sanjay Rao"
              conference="Proceedings of IEEE International Conference on Computer Communications (INFOCOM), 2020"
              paper="papers/infocom2020.pdf"
              slides="slides/infocom2020.pptx"
              video="videos/infocom2020.mp4"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Oboe: Auto-tuning video ABR algorithms to network conditions"
              authors="Zahaib Akhtar*, Yun Seong Nam*, Ramesh Govindan, Sanjay Rao, Jessica Chen, Ethan Katz-Bassett, Bruno Ribeiro, Jibin Zhan, Hui Zhang"
              conference="Proceedings of ACM Special Interest Group on Data Communications (SIGCOMM), 2018"
              paper="papers/sigcomm18-final128.pdf"
              note="(* : Both authors contributed equally)"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Understanding Video Management Planes"
              authors="Zahaib Akhtar*, Yun Seong Nam*, Jessica Chen, Ramesh Govindan, Ethan Katz-Bassett, Sanjay Rao, Jibin Zhan, Hui Zhang"
              conference="Proceedings of ACM Internet Measurement Conference (IMC), 2018"
              paper="papers/imc2018.pdf"
              note="(* : Both authors contributed equally)"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="YouTube Everywhere: Impact of Device and Infrastructure Synergies on User Experience"
              authors="Alessandro Finamore, Ruben Torres, Marco Mellia, Maurizio Munafo and Sanjay Rao"
              conference="Proceedings of ACM Internet Measurement Conference (IMC), 2011"
              paper="paper/imc11.pdf"
              slides="slides/imc11_finamore.pptx"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Dissecting Video Server Selection Strategies in the YouTube CDN"
              authors="Ruben Torres, Alessandro Finamore, Jesse Kim, Marco Mellia, Maurizio Munafo and Sanjay Rao"
              conference="Proceedings of IEEE  International Conference on Distributed Computing Systems (ICDCS), 2011"
              paper="paper/ICDCS11.pdf"
              slides="slides/icdcs11_final.pdf"
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
              paper="papers/Flexile-ACM-CoNEXT-2022.pdf"
              github="https://github.com/Purdue-ISL/Flexile"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="PCF: Provably Resilient Flexible Routing"
              authors="Chuan Jiang, Zixuan Li, Sanjay Rao, Mohit Tawarmalani"
              conference="Proceedings of ACM Special Interest Group on Data Communications (SIGCOMM), 2020"
              paper="papers/SIGCOMM2020_76_final.pdf"
              slides="slides/PCF_slides.pdf"
              video="videos/SIGCOMM_76_long.mp4"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Lancet: Better network resilience by designing for pruned failure sets"
              authors="Yiyang Chang, Chuan Jiang, Ashish Chandra, Sanjay Rao, Mohit Tawarmalani"
              conference="Proceedings of the ACM on Measurement and Analysis of Computing Systems (SIGMETRICS), 2020"
              paper="papers/Sigmetrics2020_Lancet.pdf"
              slides="slides/sigmetrics2020_yiyang_v8.pdf"
              video="videos/sigmetrics2020.mp4"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Learning Network Design Objectives Using A Program Synthesis Approach"
              authors="Yanjun Wang, Chuan Jiang, Xiaokang Qiu, Sanjay G. Rao"
              conference="Proceedings of the 18th ACM Workshop on Hot Topics in Networks (HotNets), 2019"
              paper="papers/HotNets_2019_Paper.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Robust validation of network designs under uncertain demands and failures"
              authors="Yiyang Chang, Sanjay Rao, Mohit Tawarmalani"
              conference="Proceedings of the 14th USENIX Symposium on Networked Systems Design and Implementation (NSDI), 2017"
              paper="papers/nsdi17-final59.pdf"
              slides="papers/nsdi2017_validation_slides.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Alpaca: Compact Network Policies With Attribute-Encoded Addresses"
              authors="Nanxi Kang, Ori Rottenstreich, Sanjay Rao and Jennifer Rexford"
              conference="IEEE/ACM Transactions on Networking, 2017."
              note=" An earlier version of this paper appeared in ACM CoNext 2015"
              paper="https://ieeexplore.ieee.org/abstract/document/7855776"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Hydra: Leveraging Functional Slicing for Efficient Distributed SDN Controllers"
              authors="Yiyang Chang, Ashkan Rezaei, Balajee Vamanan, Jahangir Hasan, Sanjay Rao, and T. N. Vijaykumar"
              conference="proceedings of the 9th IEEE International Conference on COMmunication Systems and NETworkS (IEEE COMSNETS), 2017"
              paper="papers/comsnets17_hydra.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Composing middlebox and traffic engineering policies in SDNs"
              authors="Yiyang Chang, Gustavo Petri, Sanjay Rao, Tiark Rompf"
              conference="Proceedings of the 2nd International INFOCOM Workshop on Software-Driven Flexible and Agile Networking (IEEE INFOCOM Workshop SWFAN), 2017"
              paper="papers/paper_swfan2017_yiyang.pdf"
              slides="papers/slides_swfan2017_yiyang.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Modeling Complexity of Enterprise Routing Design"
              authors="Xin Sun, Sanjay G. Rao and Geoffrey G. Xie"
              conference="Proceedings of ACM Conference on emerging Networking EXperiments and Technologies  (CoNEXT), 2022"
              paper="papers/conext172-sun.pdf"
              note="See Purdue Technical Report version TR-ECE-12-10"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Towards Systematic Design of Enterprise Networks"
              authors="Yu-Wei Sung, Xin Sun, Sanjay Rao, Geoffrey Xie and David Maltz"
              conference="IEEE/ACM Transactions on Networking (ToN), 2011"
              paper="papers/ton11.pdf"
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
              paper="papers/Chimera_ICNP2021_Final.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Optimizing Quality of Experience for Long-Range UAS Video Streaming"
              authors="Russell Shirey, Sanjay Rao, Shreyas Sundaram"
              conference="IEEE/ACM 29th International Symposium on Quality of Service (IWQoS), 2021"
              paper="papers/IWQOS2021_final.pdf"
              slides="slides/IWQOS_2021presentation.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Measuring Fixed Wing UAS Networks at Long Range"
              authors="Russell Shirey, Sanjay Rao, Shreyas Sundaram"
              conference="6th ACM Workshop on Micro Aerial Vehicle Networks, Systems, and Applications (DroNet), 2020"
              paper="papers/DroNet2020.pdf"
              slides="slides/DroNet_2020presentation.pdf"
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
              paper="papers/com110.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Reducing latency through page-aware management of web objects by Content Delivery Networks"
              authors="Shankaranarayanan P N, Yun Seong Nam, Ashiwan Sivakumar, Balakrishnan Chandrasekaran, Bruce Maggs, Sanjay Rao"
              conference="Proceedings of ACM  International Conference on Measurement and Modeling of Computer Science (SIGMETRICS), 2016"
              paper="papers/sigmetrics16.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="PARCEL: Proxy Assisted bRowsing in Cellular networks for Energy and Latency reduction"
              authors="Ashiwan Sivakumar, Shankaranarayanan P N, Vijay Gopalakrishnan, Seungjoon Lee, Sanjay Rao and Subhabrata Sen"
              conference="Proceedings of ACM Conference on emerging Networking EXperiments and Technologies (CoNEXT), 2014"
              paper="papers/paper169_final_CoNEXT14.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Cloud is not a silver bullet: A Case Study of Cloud-based Mobile Browsing"
              authors="Ashiwan Sivakumar, Vijay Gopalakrishnan, Seungjoon Lee, Sanjay Rao, Subhabrata Sen and Oliver Spatscheck"
              conference="Proceedings of the 15th Workshop on Mobile Computing Systems and Applications (HotMobile), 2014"
              paper="papers/hotmobile14-browsing.pdf"
            />
          </div>
        </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">
            Architecting latency-sensitive applications for the cloud
          </h1>
          <div class="publication-div">

            <PublicationsPublication
              title="Cost-aware Multi Data-Center Bulk Transfers in the Cloud from a Customer-Side Perspective"
              authors="Jose Luis Garcia-Dorado and Sanjay G. Rao"
              conference="IEEE Transactions on Cloud Computing, 2019"
              paper="https://ieeexplore.ieee.org/abstract/document/7208810"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="ACCORD: Automated Change Coordination across Independently Administered Cloud Services"
              authors="Tariq Mahmood, Bharath Balasubramanian, Mithuna Thottethodi, Sanjay Rao, Kaustubh Joshi"
              conference="IEEE 11th International Conference on Cloud Computing (CLOUD) Workshop on Cloud Management and Operations, 2018"
              paper="https://ieeexplore.ieee.org/abstract/document/8457874"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Karma: Cost-effective Geo-replicated Cloud Storage with Dynamic Enforcement of Causal Consistency"
              authors="Tariq Mahmood, Shankaranarayanan P N, Sanjay Rao, T. N. Vijaykumar, Mithuna Thottethodi"
              conference="IEEE Transactions on Cloud Computing, 2018"
              paper="https://ieeexplore.ieee.org/abstract/document/8392792"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Measuring and characterizing the performance of interactive multi-tier cloud applications"
              authors=" Mohammad Hajjat, Shankaranarayanan P N, Ashiwan Sivakumar, Sanjay Rao"
              conference="IEEE LANMAN 2015 Workshop (Invited paper)"
              paper="papers/lanman15_final.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Application-specific configuration selection in the cloud: impact of provider policy and potential of systematic testing"
              authors="Mohammad Hajjat, Ruiqi Liu, Yiyang Chang, T.S. Eugene Ng, Sanjay Rao"
              conference="IEEE Infocom 2015"
              paper="papers/hajjat2015infocomCloudPolicy.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Performance sensitive replication in geo-distributed cloud datastores"
              authors="Shankaranarayanan P N, Ashiwan Sivakumar, Sanjay Rao, Mohit Tawarmalani, DSN 2014"
              conference="SIGCOMM 2013"
              paper="papers/ShankarDSN14.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Dynamic Request Splitting for Interactive Cloud Applications"
              authors="Mohammad Hajjat, Shankaranarayanan P N, David Maltz, Sanjay Rao, Kunwadee Sripanidkulchai"
              conference="IEEE Journal on Selected Areas in Communications, Volume 31, Issue 12, Page(s): 2722-2737, Year: 2013"
              paper="papers/jsac2013.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Dealer: Application-aware Request Splitting for Interactive Cloud Applications"
              authors="Mohammad Hajjat, Shankaranarayanan P N, David Maltz, Sanjay Rao and Kunwadee Sripanidkulchai"
              conference="ACM CoNEXT 2012"
              paper="papers/conext096-hajjat.pdf"
              slides="papers/conext096-hajjat.pptx"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Closer to the Cloud - A Case for Emulating Cloud Dynamics by Controlling the Environment"
              authors="Ashiwan Sivakumar, Shankaranarayanan P N, Sanjay Rao"
              conference="NSF GENI Research and Educational Experiment Workshop 2012"
              paper="paper/closer_to_the_cloud.pdf"
              slides="slides/GEC13.pptx"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Cloudward Bound: Planning for Beneficial Migration of Enterprise Applications to the Cloud"
              authors="Mohammad Hajjat, Xin Sun, Yu-Wei Sung, Dave Maltz, Sanjay Rao, Kunwadee Sripanidkulchai and Mohit Tawarmalani"
              conference="ACM SIGCOMM 2010"
              paper="paper/sigcomm10-planning.pdf"
              slides="slides/sigcomm10-public.pptx"
            /><PublicationsSeparator />
          </div>
        </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">
            Data-driven analysis of Internet content delivery systems
          </h1>
          <div class="publication-div">

            <PublicationsPublication
              title="YouTube Everywhere: Impact of Device and Infrastructure Synergies on User Experience"
              authors="Alessandro Finamore, Ruben Torres, Marco Mellia, Maurizio Munafo and Sanjay Rao"
              conference="ACM IMC 2011"
              paper="paper/imc11.pdf"
              slides="slides/imc11_finamore.pptx"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Dissecting Video Server Selection Strategies in the YouTube CDN"
              authors="Ruben Torres, Alessandro Finamore, Jesse Kim, Marco Mellia, Maurizio Munafo and Sanjay Rao"
              conference="IEEE ICDCS 2011"
              paper="paper/ICDCS11.pdf"
              slides="slides/icdcs11_final.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="The Internet-wide Impact of P2P Traffic Localization on ISP Profitability"
              authors="Jeff Seibert, Ruben Torres, Marco Mellia, Maurizio Munafo, Cristina Nita-Rotaru and Sanjay Rao"
              conference="IEEE/ACM Transactions on Networking, 2012"
              paper="paper/TON12.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Characterization of community based P2P systems and implications for traffic localization"
              authors="R. Torres, M. Mellia, M. Munafo and S.G. Rao"
              conference="Springer Journal on Peer-to-Peer Networking and Applications, 2012"
              paper="paper/p2pjournal12.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="RelSamp: Preserving Application Structure in Sampled Flow Measurements"
              authors="M. Lee, M. Hajjat, R.Kompella and S.G. Rao"
              conference="Proceedings of IEEE Infocom, Shanghai, April 2011"
              paper="paper/relsamp-infocom11.pdf"
            /><PublicationsSeparator />
          </div>
        </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">
            Network configuration verification and enterprise network management
          </h1>
          <div class="publication-div">

            <PublicationsPublication
              title="A Software Toolkit for Visualizing Enterprise Routing Design"
              authors="Xin Sun, Jinliang Wei, Sanjay Rao and Geoffrey Xie"
              conference="In proceedings of IEEE Symposium on Configuration Analytics and Automation (SAFECONFIG), Arlington, VA. 2011"
              paper="paper/safeconfig2011.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="A Survey of Virtual LAN Usage in Campus Networks"
              authors="Minlan Yu, Xin Sun, Nick Feamster, Sanjay Rao and Jennifer Rexford"
              conference="In IEEE Communications Magazine"
              paper="paper/commag11.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="A Cost-Benefit Framework for Judicious Enterprise Network Redesign"
              authors="Xin Sun and Sanjay Rao"
              conference="In proceedings of IEEE INFOCOM (Mini-Conference), Shanghai, China, 2011"
              paper="paper/infocom11-redesign.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Characterization of community based P2P systems and implications for traffic localization"
              authors="R. Torres, M. Mellia, M. Munafo and S.G. Rao"
              conference="Springer Journal on Peer-to-Peer Networking and Applications, 2012"
              paper="paper/p2pjournal12.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="RelSamp: Preserving Application Structure in Sampled Flow Measurements"
              authors="M. Lee, M. Hajjat, R.Kompella and S.G. Rao"
              conference="Proceedings of IEEE Infocom, Shanghai, April 2011"
              paper="paper/relsamp-infocom11.pdf"
            /><PublicationsSeparator />
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

