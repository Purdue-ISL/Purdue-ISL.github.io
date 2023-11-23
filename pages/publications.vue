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
          <h1 class="publication-main-headers">Multi-Perspective Video Delivery at Internet Scale</h1>
          <div class="publication-div">
            <PublicationsPublication
              title="Dragonfly: Higher Perceptual Quality For Continuous 360° Video Playback"
              authors="Ehab Ghabashneh, Chandan Bothra, Ramesh Govindan, Antonio Ortega, and Sanjay Rao"
              conference="Proceedings of ACM Special Interest Group on Data Communications (SIGCOMM), 2023"
              paper="papers-pdf/dfly.pdf"
              slides="papers-pdf/Dragonfly-Sigcomm23_final.pptx"
              video="https://www.youtube.com/watch?v=FHyaGPMBV6c"
              github="https://github.com/Purdue-ISL/Dragonfly"
            />
          </div>
        </div>

      
      <div class="publication-project-container">
          <h1 class="publication-main-headers">
            Causal Models and ML-Driven Optimization of Internet Video
          </h1>
          <div class="publication-div">
        

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

            </div>
          </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">
            A Program Synthesis Approach to Network Design
          </h1>
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
              title="Robust validation of network designs under uncertain demands and failures"
              authors="Yiyang Chang, Sanjay Rao, Mohit Tawarmalani"
              conference="Proceedings of the 14th USENIX Symposium on Networked Systems Design and Implementation (NSDI), 2017"
              paper="papers/nsdi17-final59.pdf"
              slides="papers/nsdi2017_validation_slides.pdf"
            />
          </div>
        </div>

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
          <h1 class="publication-main-headers">Intent-Driven Network Management </h1>
          <div class="publication-div">
            <PublicationsPublication
              title="Hey, Lumi! Using Natural Language for Intent-Based Network Management"
              authors="Arthur S Jacobs, Ricardo J. Pfitscher, Rafael H. Ribeiro, Ronaldo A. Ferreira, Lissandro Granville, Walter Willinger and Sanjay Rao"
              conference="Proceedings of Usenix ATC, 2021"
              paper="https://www.usenix.org/conference/atc21/presentation/jacobs"
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
            Delivering Internet Video with high Quality of Experience
            </h1>
          <div class="publication-div">
        
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
            />
          </div>
        </div>

        
        
         
       

        <div class="publication-project-container">
          <h1 class="publication-main-headers">
            SmartEdge for low latency mobile Web 
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
            Managing policy in SDN Networks
          </h1>
          <div class="publication-div">
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
              title="Alpaca: Compact Network Policies With Attribute-Encoded Addresses"
              authors="Nanxi Kang, Ori Rottenstreich, Sanjay Rao and Jennifer Rexford"
              conference="IEEE/ACM Transactions on Networking, 2017."
              note=" An earlier version of this paper appeared in ACM CoNext 2015"
              paper="https://ieeexplore.ieee.org/abstract/document/7855776"
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
              conference="DSN 2014"
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
              paper="papers/closer_to_the_cloud.pdf"
              slides="slides/GEC13.pptx"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Cloudward Bound: Planning for Beneficial Migration of Enterprise Applications to the Cloud"
              authors="Mohammad Hajjat, Xin Sun, Yu-Wei Sung, Dave Maltz, Sanjay Rao, Kunwadee Sripanidkulchai and Mohit Tawarmalani"
              conference="ACM SIGCOMM 2010"
              paper="papers/sigcomm10-planning.pdf"
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
              paper="papers/imc11.pdf"
              slides="slides/imc11_finamore.pptx"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Dissecting Video Server Selection Strategies in the YouTube CDN"
              authors="Ruben Torres, Alessandro Finamore, Jesse Kim, Marco Mellia, Maurizio Munafo and Sanjay Rao"
              conference="IEEE ICDCS 2011"
              paper="papers/ICDCS11.pdf"
              slides="slides/icdcs11_final.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="The Internet-wide Impact of P2P Traffic Localization on ISP Profitability"
              authors="Jeff Seibert, Ruben Torres, Marco Mellia, Maurizio Munafo, Cristina Nita-Rotaru and Sanjay Rao"
              conference="IEEE/ACM Transactions on Networking, 2012"
              paper="papers/TON12.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Characterization of community based P2P systems and implications for traffic localization"
              authors="R. Torres, M. Mellia, M. Munafo and S.G. Rao"
              conference="Springer Journal on Peer-to-Peer Networking and Applications, 2012"
              paper="papers/p2pjournal12.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="RelSamp: Preserving Application Structure in Sampled Flow Measurements"
              authors="M. Lee, M. Hajjat, R.Kompella and S.G. Rao"
              conference="Proceedings of IEEE Infocom, Shanghai, April 2011"
              paper="papers/relsamp-infocom11.pdf"
            /><PublicationsSeparator />
          </div>
        </div>

          <div class="publication-project-container">
          <h1 class="publication-main-headers">
            Designing Enterprise Networks from Higher-Level Abstractions
          </h1>
            <div class="publication-div">
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

            <PublicationsPublication
              title="A Software Toolkit for Visualizing Enterprise Routing Design"
              authors="Xin Sun, Jinliang Wei, Sanjay Rao and Geoffrey Xie"
              conference="In proceedings of IEEE Symposium on Configuration Analytics and Automation (SAFECONFIG), Arlington, VA. 2011"
              paper="papers/safeconfig2011.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="A Survey of Virtual LAN Usage in Campus Networks"
              authors="Minlan Yu, Xin Sun, Nick Feamster, Sanjay Rao and Jennifer Rexford"
              conference="In IEEE Communications Magazine"
              paper="papers/commag11.pdf"
            /><PublicationsSeparator />
              
              <PublicationsPublication
              title="A Cost-Benefit Framework for Judicious Enterprise Network Redesign"
              authors="Xin Sun and Sanjay Rao"
              conference="In proceedings of IEEE INFOCOM (Mini-Conference), Shanghai, China, 2011"
              paper="papers/infocom11-redesign.pdf"
            /><PublicationsSeparator />

              <PublicationsPublication
              title="Towards Systematic Design of Enterprise Networks"
              authors="Yu-Wei Eric Sung, Sanjay Rao, Geoffrey Xie, and David Maltz"
              conference="Proceedings of ACM CoNEXT, Madrid, Spain, December, 2008"
              paper="papers/conext08.pdf"
              dataset="https://engineering.purdue.edu/~isl/network-config"
            /><PublicationsSeparator />

              <PublicationsPublication
              title="Characterizing VLAN usage in an Operational Network"
              authors="Prashant Garimella, Yu-Wei Eric Sung, Nan Zhang, and Sanjay Rao"
              conference="Technical Report TR-ECE-07-20, Purdue University, August 2007"
              paper="http://docs.lib.purdue.edu/ecetr/362/"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Characterizing VLAN usage in an Operational Network"
              authors="Prashant Garimella, Yu-Wei Eric Sung, Nan Zhang, Sanjay Rao"
              conference="ACM SIGCOMM workshop on Internet Network Management (INM'07), Kyoto, Japan, August 2007"
              paper="papers/inm07.pdf"
              dataset="https://engineering.purdue.edu/~isl/network-config"
            /><PublicationsSeparator />

            </div>
        </div>
        
        <div class="publication-project-container">
          <h1 class="publication-main-headers">
            Network configuration verification and synthesis
          </h1>
          <div class="publication-div">
          
            
            <PublicationsPublication
              title="A Toolkit for Automating and Visualizing VLAN Configuration"
              authors="Sunil Krothapalli, Xin Sun, Yu-Wei Sung, Suan Aik Yeo and Sanjay Rao"
              conference="In Proceedings of ACM CCS Workshop on Assurable & Usable Security Configuration (SafeConfig), Chicago, IL, November 2009"
              paper="papers/safeconfig09-tool.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Modeling and Understanding End-to-End Class of Service Policies in Operational Networks"
              authors="Yu-Wei Eric Sung, Carsten Lund, Mark Lyn, Sanjay Rao, and Subhabrata Sen"
              conference="Proceedings of ACM SIGCOMM, Barcelona, Spain, August 2009"
              paper="papers/sigcomm09_cos.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Extracting Network-wide Correlated Changes from Longitudinal Configuration Data"
              authors="Yu-Wei Eric Sung, Sanjay Rao, Subhabrata Sen, and Stephen Leggett"
              conference="Yu-Wei Eric Sung, Sanjay Rao, Subhabrata Sen, and Stephen Leggett"
              paper="papers/pam09-corrchange.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Configuration Management at Massive Scale: System Design and Experience"
              authors="William Enck, Thomas Moyer, Patrick McDaniel, Shubho Sen, Panagiotis Sebos, Sylke Spoerel, Albert Greenberg, Yu-Wei Sung, Sanjay Rao, and William Aiello"
              conference="in IEEE Journal on Selected Areas in Communications (JSAC), 2009"
              paper="papers/jsac_presto.pdf"
            /><PublicationsSeparator />
          
            <PublicationsPublication
              title="Configuration Management at Massive Scale: System Design and Experience"
              authors="William Enck, Patrick McDaniel, Shubho Sen, Panagiotis Sebos, Sylke Spoerel, Albert Greenberg, Sanjay Rao, and William Aiello"
              conference="Proceedings of Usenix Annual Technical Conference, June 2007"
              paper="https://engineering.purdue.edu/~sanjay/Papers/usenix07.pdf"
            /><PublicationsSeparator />
          </div>
        </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">
            Trustworthy Peer-to-Peer Networks
          </h1>
          <div class="publication-div">
            <PublicationsPublication
              title="A Design for Securing Data Delivery in Peer-to-Peer Streaming"
              authors="Jeff Seibert, Xin Sun, Cristina Nita-Rotaru and Sanjay Rao"
              conference="Elsevier Journal on Computer Networks (COMNET), vol. 55, issue 12, August 2011"
              paper="papers/comnet2011.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Preventing DDoS Attacks on Internet Servers Exploiting P2P Systems"
              authors="Xin Sun,Ruben Torres and Sanjay Rao"
              conference="Xin Sun,Ruben Torres and Sanjay Rao"
              paper="papers/comnet-ddos.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="On the feasibility of exploiting P2P systems to launch DDoS attacks"
              authors="Xin Sun,Ruben Torres and Sanjay Rao"
              conference="Springer Journal of Peer-to-Peer Networking and Applications (PPNA), Volume 3, Number 1, ISSN 1936-6442, March 2010"
              paper="papers/p2p-ddos.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Towards Securing Data Delivery in Peer-to-Peer Streaming"
              authors="Jeffrey C. Seibert, Xin Sun, Sanjay Rao, and Cristina Nita-Rotaru"
              conference="in Proceedings of International Conference on COMmunication Systems and NETworkS (COMSNETS), Bangalore, India, Jan 2010. (Invited paper)"
              paper="papers/comsnets2010.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Inferring Undesirable Behavior from P2P Traffic Analysis"
              authors="Ruben Torres, Mohammad Hajjat, Sanjay Rao, Maurizio Munafo and Marco Mellia"
              conference="in Proceedings of ACM SIGMETRICS, Seattle, WA, June 2009"
              paper="papers/Sigmetrics09.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Enabling Confidentiality of Data Delivery in an Overlay Broadcasting System"
              authors="Ruben Torres, Xin Sun, Aaron Walters, Cristina Nita-Rotaru and Sanjay Rao"
              conference="In special issue of IEEE JSAC on Advances in Peer-to-Peer Streaming Systems, December 2007"
              paper="papers/jsac07.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="DDoS Attacks by Subverting Membership Management in P2P Systems"
              authors="Xin Sun, Ruben Torres and Sanjay Rao"
              conference="Workshop on Secure Network Protocols (NPSec 2007), Beijing, China, October 2007"
              paper="papers/NPSec07.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Enabling Confidentiality of Data Delivery in an Overlay Broadcasting System"
              authors="Ruben Torres, Xin Sun, Aaron Walters, Cristina Nita-Rotaru and Sanjay Rao"
              conference="Proceedings of IEEE Infocom, Anchorage, AK, May 2007"
              paper="papers/infocom07.pdf"
              slides="slides/Infocom07.OverlayKeyMgmt.ppt"
            /><PublicationsSeparator />
          </div>
        </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">
            Heterogeneity and Incentives for Peer-to-Peer Video Broadcasting
          </h1>
          <div class="publication-div">
            <PublicationsPublication
              title="On-demand waypoints for live P2P video broadcasting"
              authors=" A.Ganjam, S.G. Rao, K.Sripanidkulchai, J.Zhan and H. Zhang"
              conference="In Springer Journal of Peer-to-Peer Networking and Applications, Vol. 3, No. 4, December 2010, pp 277-293"
              paper="papers/waypoint2010.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Enabling Contribution Awareness in an Overlay Broadcasting System"
              authors="Yu-Wei Eric Sung, Michael Bishop, and Sanjay Rao"
              conference="In IEEE Transactions on Multimedia, Special Issue on Content Storage and Delivery in Peer-to-Peer Networks , Vol. 9, No. 8, pp. 1605-1620, December 2007"
              paper="papers/sung_tmm.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Opportunities and Challenges of Peer-to-Peer Internet Video Broadcast"
              authors="J. Liu, B. Li, Sanjay Rao and H. Zhang"
              conference="In Proceedings of the IEEE, Special Issue on Recent Advances in Distributed Multimedia Communication, 2007"
              paper="papers/p2pVideoSurvey.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Enabling Contribution Awareness in an Overlay Broadcasting System"
              authors="Yu-Wei Sung, Mike Bishop, Sanjay G. Rao"
              conference="Proceedings of ACM SIGCOMM, Pisa, Italy, September 2006"
              paper="papers/sigcomm06.pdf"
              slides="slides/Sigcomm06.OverlayBroadcast.ppt"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Considering Priority in Overlay Multicast Protocols under Heterogeneous Environments"
              authors="Mike Bishop, Sanjay G. Rao and Kunwadee Sripanidkulchai"
              conference="Proceedings of  IEEE Infocom, Barcelona, April 2006"
              paper="papers/infocomm-2006.pdf"
              slides="slides/Infocom_Presentation.ppt"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="The Impact of Heterogeneous Bandwidth Constraints on DHT-Based Multicast Protocols"
              authors="Ashwin Bharambe, Sanjay G. Rao, Venkat Padmanabhan, Srinivasan Seshan and Hui Zhang"
              conference="The Fourth International Workshop on P2P Systems (IPTPS) 2005, Ithaca, February 2005"
              paper="papers/iptps-dht2005.pdf"
            /><PublicationsSeparator />
          </div>
        </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">End System Multicast</h1>
          <div class="publication-div">
            <PublicationsPublication
              title="Early Experience with an Internet Broadcast System Based on Overlay Multicast"
              authors="Yang-hua Chu, Aditya Ganjam, T.S. Eugene Ng, Sanjay G. Rao, Kunwadee Sripanidkulchai, Jibin Zhan and Hui Zhang"
              conference="USENIX Annual Technical Conference, June 2004"
              paper="papers/Usenix.Experience.2004.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Measurement-Based Optimization Techniques for Bandwidth-Demanding Peer-to-Peer Systems"
              authors="T. S. Eugene Ng, Yang-hua Chu, Sanjay G. Rao, Kunwadee Sripanidkulchai and Hui Zhang"
              conference="Proceedings of IEEE Infocom, San Francisco, CA, April 2003"
              paper="papers/infocomm-2002.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="A Case For End System Multicast"
              authors="Yang-hua Chu, Sanjay G. Rao, Srinivasan Seshan and Hui Zhang"
              conference="IEEE Journal on Selected Areas in Communication (JSAC), Special Issue on Networking Support for Multicast, Vol. 20, No. 8. October 2002"
              paper="papers/jsac-2001.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Enabling Conferencing Applications on the Internet using an Overlay Multicast Architecture"
              authors="Yang-hua Chu, Sanjay G. Rao, Srinivasan Seshan and Hui Zhang"
              conference="Proceedings of ACM Sigcomm, San Diego, CA, August 2001"
              paper="papers/sigcomm-2001.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="A Case For End System Multicast"
              authors="Yang-hua Chu, Sanjay G. Rao, and Hui Zhang"
              conference="Proceedings of ACM Sigmetrics, Santa Clara, CA, June 2000"
              paper="papers/sigmetrics-2000.pdf"
            /><PublicationsSeparator />
          </div>
        </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">Miscellaneous</h1>
          <div class="publication-div">
            <PublicationsPublication
              title="MERCURY: A Scalable Publish-Subscribe System for Internet Games"
              conference="First International Workshop on Network and System Support for Games, Braunschweig, Germany, April 2002"
              paper="papers/netgames-2002.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Fast techniques for the optimal smoothing of stored video"
              authors="Sanjay Rao and S.V. Raghavan"
              conference="ACM/Springer Verlag Multimedia Systems Journal, Volume 7, May 1999, pgs 222-233"
              paper="papers/mm-99.pdf"
            /><PublicationsSeparator />
          </div>
        </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">Education Related</h1>
          <div class="publication-div">
            <PublicationsPublication
              title="Laboratory Guides for Computer Security Courses"
              authors="Ruben Torres and Sanjay Rao"
              conference="In Cryptography and Network Security: Principles and Practice, 4th edition: Prentice Hall, 2005"
              dataset="papers/ece495f-spring2005.zip"
            /><PublicationsSeparator />
          </div>
        </div>

        <div class="publication-project-container">
          <h1 class="publication-main-headers">Posters/Demos</h1>
          <div class="publication-div">
            <PublicationsPublication
              title="D-Tunes: Self Tuning Datastores for Geo-distributed Interactive Applications"
              authors="Shankaranarayanan P. N., Ashiwan Sivakumar, Sanjay Rao and Mohit Tawarmalani"
              conference="Poster and Demo in ACM SIGCOMM, Hong Kong, China, August, 2013"
              paper="http://conferences.sigcomm.org/sigcomm/2013/papers/sigcomm/p483.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Self Tuning Data stores for Geo-distributed Cloud Applications"
              authors="Shankaranarayanan P. N., Ashiwan Sivakumar, Sanjay Rao and Mohit Tawarmalani"
              conference="Poster in USENIX NSDI, Lombard, IL, April, 2013"
              paper="https://www.usenix.org/system/files/nsdip13-paper25.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Virtual MAN: A VLAN Management Systems for Enterprise Networks"
              authors="S. Krothapalli, S. Yeo,Yu-Wei Eric Sung and Sanjay Rao"
              conference="Demo in ACM SIGCOMM, Barcelona, Spain, August, 2009"
              paper="http://conferences.sigcomm.org/sigcomm/2009/demos/sigcomm-pd-2009-final18.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Towards Automated Auditing for Network Configuration Changes"
              authors="Yu-Wei Eric Sung, Sanjay Rao, Subhabrata Sen, and Stephen Leggett"
              conference="Poster Abstract in ACM SIGCOMM, Seattle, WA, August, 2008"
              paper="http://conferences.sigcomm.org/sigcomm/2008/papers/p441-sungA.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Enhancing Resilience of P2P Systems to DDoS Reflector Attacks"
              authors="Xin Sun, Ruben Torres and Sanjay Rao"
              conference="Poster Abstract in ACM SIGCOMM, Seattle, WA, August, 2008"
              paper="http://conferences.sigcomm.org/sigcomm/2008/papers/p439-sunA.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Enhancing Resilience of P2P Systems to DDoS Reflector Attacks"
              authors="Xin Sun, Ruben Torres and Sanjay Rao"
              conference="Midwest Security Workshop, Indianapolis, 2008"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Preventing DDoS Attacks with P2P Systems"
              authors="Xin Sun, Ruben Torres and Sanjay Rao"
              conference="Presented as POSTER in The 8th Annual CERIAS Information Security Symposium. March 20-21, 2007"
              paper="papers/E08-2E1.pdf"
            /><PublicationsSeparator />

            <PublicationsPublication
              title="Enabling Confidentiality of Data Delivery in an Overlay Broadcasting System"
              authors="Ruben Torres, Xin Sun, Aaron Walters, Cristina Nita-Rotaru, and Sanjay Rao"
              conference="presented as POSTER in The 7th Annual CERIAS Information Security Symposium Purdue University : CERIAS, 2006"
              paper="papers/DB1-B75.pdf"
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
