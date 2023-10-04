import{_ as b}from"./HeaderNav.b08dee89.js";import{_ as w}from"./PageHeader.331f8663.js";import{r as m,g as f,o as _,c as h,a as e,t as n,d as p,_ as v,b as t}from"./entry.382eefa9.js";import"./nuxt-link.d550b3ee.js";const x={class:"flex flex-col text-center items-center m-6"},T={class:"team-member-name"},A={class:"team-member-title"},P={__name:"member",props:["img","name","title","area"],setup(a){const s=a,c=m(null),r=m(null);return f(()=>{s.area!=null&&c.value.classList.remove("hidden"),s.img!=null?r.value.src="images/team-images/"+s.img:r.value.src="images/team-images/placeholder-image.png"}),(u,g)=>(_(),h("div",null,[e("div",x,[e("img",{class:"team-member-img",ref_key:"imgTag",ref:r,src:""},null,512),e("p",T,n(a.name),1),e("p",A,n(a.title),1),e("p",{class:"text-xl font-light hidden",ref_key:"areaTag",ref:c},n(a.area),513)])]))}},$=P,D={class:"px-5 pb-3"},k={class:"text-lg"},L={class:"font-mono tracking-tighter font-semibold"},N=e("span",null," — ",-1),R=e("sup",null,"*",-1),C={class:"font-light"},E={class:"italic"},M={__name:"Alumni",props:["name","graduation_year","degree","thesis_title","position","c_position","co_advisor"],setup(a){const s=a,c=m(null),r=m(null);return f(()=>{s.co_advisor!=null&&c.value.classList.remove("hidden"),s.c_position!=null&&r.value.classList.remove("hidden")}),(u,g)=>(_(),h("div",null,[e("div",D,[e("div",k,[e("span",L,n(a.name),1),e("span",null," ("+n(a.degree)+" "+n(a.graduation_year)+") ",1),N,e("span",null," First position: "+n(a.position),1),e("span",{class:"hidden",ref_key:"c_positionTag",ref:r}," → Now: "+n(a.c_position),513),e("span",{class:"hidden font-light float-right",ref_key:"coAdvisorTag",ref:c},[R,p("co-advised with Prof. "+n(a.co_advisor),1)],512),e("p",null,[e("span",C,[p(" Thesis title: "),e("span",E,n(a.thesis_title),1)])])])])]))}},U=M,j={},B={class:"w-[20%] md:hidden mx-auto mb-3 border-t-[1.5px] border-slate-300"};function F(a,s){return _(),h("div",B)}const O=v(j,[["render",F]]);let d=[];const I={methods:{overlap(a){return(window.screen.height-a.getBoundingClientRect().top)/window.screen.height>.1?(a.classList.toggle("show-up"),!0):!1},handleScroll(){var a=[];for(var s in d)this.overlap(d[s])&&a.push(s);for(var s in a)delete d[a[s]];Object.keys(d).length==0&&window.removeEventListener("scroll",this.handleScroll)}},mounted(){window.scrollTo(0,0),d=[],document.querySelectorAll(".team-group-container").forEach(s=>{d.push(s),s.classList.contains("show-up")&&s.classList.toggle("show-up")}),window.addEventListener("scroll",this.handleScroll),this.handleScroll()}},W={id:"doc",class:"bg-[var(--primary-color)] bg-img"},G={class:"limit-width"},H={class:"limit-width"},V=e("div",{class:"w-[96%] mx-auto"},null,-1),z={class:"team-group-container pt-10"},J=e("h1",{class:"team-group-header"},"Faculty",-1),q={class:"team-members-container"},Y={class:"team-group-container"},K=e("h1",{class:"team-group-header"},"Graduate Students",-1),X={class:"team-members-container"},Q={class:"team-group-container"},Z=e("h1",{class:"team-group-header"},"Undergraduate Students",-1),ee={class:"team-members-container"},te={class:"team-group-container"},ae=e("h1",{class:"team-group-header"},"Alumni",-1),se={class:"alumni-members-container"},ne=e("div",{class:"pb-[150px]"},null,-1);function oe(a,s,c,r,u,g){const y=b,S=w,l=$,o=U,i=O;return _(),h("div",W,[e("div",G,[t(y)]),t(S,{title:"ISL Team"}),e("div",H,[V,e("div",z,[J,e("div",q,[t(l,{img:"image8801.jpeg",name:"Sanjay Rao",title:"Professor",area:""})])]),e("div",Y,[K,e("div",X,[t(l,{name:"Ehab Ghabashneh",title:"Ph.D. Candidate",area:""}),t(l,{name:"Chandan Bothra",title:"Ph.D Student",area:""}),t(l,{name:"Usman Jafari",title:"Ph.D. Student",area:""})])]),e("div",Q,[Z,e("div",ee,[t(l,{name:"Clayton Walker",title:"Undergraduate researcher",area:""}),t(l,{name:"Jagan Krishnasamy",title:"Undergraduate researcher",area:""})])]),e("div",te,[ae,e("div",se,[t(o,{name:"Chuan Jiang",degree:"Ph.D.",graduation_year:"2022",thesis_title:"Resilient Wide Area Network Routing Algorithms For Meeting Service Level Objectives",position:"Meta Platforms"}),t(i),t(o,{name:"Russ Shirey",degree:"Ph.D.",graduation_year:"2021",thesis_title:"Data-Driven and Control Theoretic Approaches for Real-Time Sensor Data Transmission Over Unmanned Aerial Systems Networks",position:"US Air Force",co_advisor:"Shreyas Sundaram"}),t(i),t(o,{name:"Yun Seong Nam",degree:"Ph.D.",graduation_year:"2020",thesis_title:"Characterizing and Optimizing Internet Video Streaming",position:"Google"}),t(i),t(o,{name:"Yiyang Chang ",degree:"Ph.D.",graduation_year:"2019",thesis_title:"Ensuring Network Designs meet Performance Requirements under Failures",position:"ByteDance"}),t(i),t(o,{name:"Ashiwan Sivakumar ",degree:"Ph.D.",graduation_year:"2017",thesis_title:"Scalable Redundant Proxy Execution for low-latency Web over Cellular Networks",position:"Post-doc @ CMU",c_position:"AT&T Labs Research"}),t(i),t(o,{name:"Shankaranarayanan Narayanan ",degree:"Ph.D.",graduation_year:"2016",thesis_title:"A Holistic Approach to Lowering Latency in Geo-distributed Web Applications",position:"AT&T Labs Research"}),t(i),t(o,{name:"Mohammad Hajjat ",degree:"Ph.D.",graduation_year:"2014",thesis_title:"Architecting Delay Sensitive Applications for the Cloud",position:"Microsoft Azure",c_position:"Roblox"}),t(i),t(o,{name:"Srivathsava Rangarajan ",degree:"MSc Thesis",graduation_year:"2014",thesis_title:"Paxos based directory updates for geo-replicated cloud storage",position:"Enova"}),t(i),t(o,{name:"Xin Sun ",degree:"Ph.D.",graduation_year:"2012",thesis_title:"Towards Systematic Migration of Enterprise Networks",position:"Assistant Professor @ Florida International University",c_position:"Assistant Professor @ Ball State (Winner of NSF Career Research Initiation Initiative Award)"}),t(i)])])]),ne])}const de=v(I,[["render",oe]]);export{de as default};
