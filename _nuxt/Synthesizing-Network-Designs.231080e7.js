import{_ as h}from"./HeaderNav.9c73068a.js";import{_ as u}from"./PageHeader.bddf1c05.js";import{_ as g}from"./SubPageNav.f37569ee.js";import{_ as f,a as m}from"./separator.2748a3fe.js";import{_ as v,c as b,a as e,b as i,d as r,f as _,o as y}from"./entry.199e554a.js";import"./nuxt-link.f85471b6.js";import"./_commonjsHelpers.725317a4.js";let n=[];const w={beforeRouteEnter(s,t,l){console.log(t),console.log(s),s.params.link=t,l()},methods:{overlap(s,t){return(window.screen.height-s.getBoundingClientRect().top)/window.screen.height>t},handleScroll(){var s=[];for(var t in n)this.overlap(n[t],.1)&&(n[t].classList.toggle("show-up"),s.push(t));for(var t in s)delete n[s[t]];Object.keys(n).length==0&&(console.log("removed"),window.removeEventListener("scroll",this.handleScroll))}},mounted(){window.scrollTo(0,0),n=[],document.querySelectorAll(".subpages-section-container-div").forEach(t=>{n.push(t),t.classList.contains("show-up")&&t.classList.toggle("show-up")}),window.addEventListener("scroll",this.handleScroll),this.handleScroll()}},k={id:"doc",class:"bg-[var(--primary-color)] bg-img min-h-screen"},S={class:"limit-width"},x={class:"limit-width"},C=e("div",{class:"w-[96%] mx-auto"},null,-1),P=e("h1",{class:"subpages-title"}," Synthesizing network designs with certifiable performance properties ",-1),M=e("div",{id:"des",class:"subpages-section-container-div"},[e("div",{class:"subpages-section-title-container-div"},[e("h1",{class:"subpages-section-title"},"Description")]),e("div",{class:"subpages-section-content"},[e("p",null,[r(" With the wide-spread adoption of online and cloud-based services, it is critical that the underlying network infrastructure meet increasingly stringent performance requirements (e.g., sustain throughput for business-critical applications). These requirements must be met despite failures that are the norm given the global scale of ISP and cloud provider networks, and their rapid pace of evolution. Many existing approaches to designing networks for failures (i) only focus on availability, resulting in poor performance on failures; (ii) only consider a small number of failure states, and do not scale as the number of possible failure states increase; or (iii) rely on ad-hoc simulation-based testing. While tools for software and hardware synthesis and testing is a thriving 10 billion dollar industry, the state of practice in certifying and synthesizing network designs is only in its nascent stages. "),e("br"),e("br"),r(" The project is tackling these challenges by developing novel techniques that enable architects to plan their network designs (e.g., design topology, provision capacity, algorithms for re-routing traffic on failures) so performance is acceptable over a large set of scenarios the network may encounter. The project is distinguished by a focus on performance (not just availability), designing for multiple concurrent failures, and designs with provable performance guarantees for a given set of failure scenarios. This project may be viewed as an early effort aimed at formally verifying quantitative network properties, and synthesizing networks for such performance requirements. This is in contrast to much recent progress in the field of network verification, which has primarily focused on correctness (e.g., ensuring security policies are correctly instantiated). "),e("br"),e("br"),r(" The project is bringing together expertise in network systems, and optimization theory, and is advancing the state-of-the-art in two key ways. First, the project is developing (i) new mechanisms that may be deployed in the network to respond to failures; and (ii) frameworks that can certify the resulting performance is acceptable over desired failure states. A novelty of the framework is the ability to model rich and flexible network mechanisms. Second, unlike existing methods that only consider worst-case performance, and may be overly conservative, the project is developing novel ways to design for requirements that must be met by a desired percentage of scenarios. "),e("br"),e("br"),r(" The project has the potential for significant real-world impact by ensuring networks comply with Service Level Objectives in the face of failures, and is leading to networks with lower cost, better performance, and higher reliability. The project is extensively engaging with industry and network operator forums, with results being validated using real data from these networks. "),e("br"),e("br")])])],-1),T={id:"pub",class:"subpages-section-container-div"},j=e("div",{class:"subpages-section-title-container-div"},[e("h1",{class:"subpages-section-title"},"Publications")],-1),N={class:"subpages-section-content"},L=_('<div id="ppl" class="subpages-section-container-div"><div class="subpages-section-title-container-div"><h1 class="subpages-section-title">Team</h1></div><div class="subpages-section-content"><div><span class="font-bold text-xl">Faculty</span><div class="text-lg pl-2"><ul class="gap-10"><li class="font-mono tracking-tighter">Prof. Sanjay Rao</li><li class="font-mono tracking-tighter"> Prof. Mohit Tawarmalani </li></ul></div></div><br><div><span class="font-bold text-xl">Students</span><div class="text-lg pl-2"><ul class="gap-10"><li><span class="font-mono tracking-tighter"> Yiyang Chang </span><span>— Ph.D. student</span></li><li><span class="font-mono tracking-tighter"> Chuan Jiang </span><span> — Ph.D. student</span></li><li><span class="font-mono tracking-tighter"> Ashish Chandra </span><span> — Ph.D. student (supervised by Prof.Mohit Tawarmalani)</span></li><li><span class="font-mono tracking-tighter"> Zixuan Li</span><span> — Masters student</span></li></ul></div></div><br></div></div>',1),I=e("div",{class:"pb-[30px]"},null,-1);function R(s,t,l,A,D,E){const c=h,d=u,p=g,a=f,o=m;return y(),b("div",k,[e("div",S,[i(c)]),i(d,{title:"Projects"}),e("div",x,[C,P,i(p,{data:[["Description","des"],["Publications","pub"],["People","ppl"]]}),M,e("div",T,[j,e("div",N,[e("p",null,[i(a,{title:"Flexile: Meeting bandwidth objectives almost always",authors:"Chuan Jiang, Zixuan Li, Sanjay Rao, Mohit Tawarmalani",conference:"Proceedings of ACM Conference on emerging Networking EXperiments and Technologies  (CoNEXT), 2022",paper:"../papers/Flexile-ACM-CoNEXT-2022.pdf",github:"https://github.com/Purdue-ISL/Flexile"}),i(o),i(a,{title:"PCF: Provably Resilient Flexible Routing",authors:"Chuan Jiang, Zixuan Li, Sanjay Rao, Mohit Tawarmalani",conference:"Proceedings of ACM Special Interest Group on Data Communications (SIGCOMM), 2020",paper:"../papers/SIGCOMM2020_76_final.pdf",slides:"../slides/PCF_slides.pdf",video:"../videos/SIGCOMM_76_long.mp4"}),i(o),i(a,{title:"Lancet: Better network resilience by designing for pruned failure sets",authors:"Yiyang Chang, Chuan Jiang, Ashish Chandra, Sanjay Rao, Mohit Tawarmalani",conference:"Proceedings of the ACM on Measurement and Analysis of Computing Systems (ICS), 2020",paper:"../papers/Sigmetrics2020_Lancet.pdf",slides:"../slides/sigmetrics2020_yiyang_v8.pdf",video:"../videos/sigmetrics2020.mp4"}),i(o),i(a,{title:"Robust validation of network designs under uncertain demands and failures",authors:"Yiyang Chang, Sanjay Rao, Mohit Tawarmalani",conference:"Proceedings of the 14th USENIX Symposium on Networked Systems Design and Implementation (NSDI), 2017",paper:"../papers/nsdi17-final59.pdf",slides:"../papers/nsdi2017_validation_slides.pdf"}),i(o)])])]),L]),I])}const J=v(w,[["render",R]]);export{J as default};
