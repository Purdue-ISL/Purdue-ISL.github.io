import{_ as be}from"./HeaderNav.9c73068a.js";import{_ as j,o as O,c as R,a as r,f as Q,r as E,g as _e,t as P,d as Me,b as o}from"./entry.199e554a.js";import"./nuxt-link.f85471b6.js";const ke={methods:{check(){document.getElementById("doc")}},beforeMount(){}},Ce={class:"banner-bg-img flex flex-col justify-center items-center"},Se=r("div",{class:"banner-font flex justify-center"},[r("div",null,[r("p",{class:"banner-typewriter tracking-tight md:tracking-normal"},"Internet Systems Lab")])],-1),Ie=[Se];function Ae(i,a,y,C,b,f){return O(),R("div",Ce,Ie)}const Ne=j(ke,[["render",Ae]]),Te=""+globalThis.__publicAssetsURL("videos/ISL.mp4"),Le={methods:{playVideo(){let i=document.getElementsByTagName("video")[0],a=document.getElementById("video-overlay");i.play(),i.controls=!0,a.classList.add("hidden")}}},Ee={class:"pb-5 mt-10"},xe=Q('<div class="main-container"><h1 class="main-page-main-headers pt-8">What we do?</h1><div id="box1" class="main-page-main-divs"><p class="pt-6 pl-6"> We conduct research in two broad areas related to the Internet: </p><div class="main-page-projects-container"><div class="main-page-project-div"><h2 class="main-page-project-header"> Intent-based and self-driving networks </h2><p class="main-page-project-content"> We are designing computer networks of the future that are intent-based (i.e., network designs and configurations are automatically synthesized to provably meet higher level goals with respect to security, resilience and performance) and self-driving (i.e., networks driven by real-time analytics performed at line-rate leveraging programmable network hardware for security and performance). Our past work has made influential contributions in network verification (formally verifying network configurations), synthesizing network configurations (which has been deployed in production at AT&amp;T), and new approaches to synthesizing enterprise networks from higher-level network-wide abstractions. Our research has involved collaborations with Meta, Microsoft and AT&amp;T, and is of significant interest to industry. </p></div><div class="main-page-project-div"><h2 class="main-page-project-header"> ML-driven and multi-perspective Internet video delivery </h2><p class="main-page-project-content"> We are optimizing Internet video delivery using ML techniques (such as causal reasoning), and are tackling challenges in delivering next generation video (such as 360 degree and volumetric video), which are not only bandwidth intensive but also latency sensitive, with high perceptual quality. Our past research has made important advances to the design of Adaptive Bit Rate (ABR) algorithms for Internet video streaming over variable Internet environments, developed systems that significantly reduce mobile Web latency, developed novel approaches to architect low-latency cloud applications, and has pioneered a peer-to-peer approach for live video broadcasting. We have extensively collaborated extensively with industry, including an active on going collaboration with Amazon Prime Video. </p></div></div></div></div>',1),Pe={class:"main-container"},Fe=r("h1",{class:"main-page-main-headers"},"More about us?",-1),Oe={id:"box2",class:"main-page-main-divs"},Re={class:"main-page-projects-container"},$e={class:"main-page-project-div"},De=r("h2",{class:"main-page-project-header"}," The video below, and this slide deck present an overview of recent research in our group: ",-1),je={class:"main-page-projects-container relative"},Be=r("video",{class:"main-page-video"},[r("source",{src:Te,type:"video/webm"})],-1),Ve={id:"video-overlay",class:"video-overlay"},We=r("div",{class:"playshape"},null,-1),ze=[We],Ge=Q('<div class="main-page-project-div"><h2 class="main-page-project-header"> Background needed to work in Purdue ISL </h2><p class="main-page-project-content"> Prospective students must ideally have a strong background in Computer Science or Computer Engineering with extensive programming (ideally systems programming) background. However, EE students with a willingness/ability to build strong systems programming skills are welcome. Since some of our research draws on cutting edge techniques in optimization, machine learning, and formal methods, students with an aptitude for math/theory with an interest in applications to real-world networking problems may also be a good fit. Students are not expected to have background in all areas at the start of their Ph.D, but successful students have an ability and willingness to develop the needed background for their research problem as their research evolves. </p></div><div class="main-page-project-div"><p class="main-page-project-content pt-6"> Our research has benefited by support from NSF, Cisco, Google, Meta, NetApp, AT&amp;T, and Microsoft, and many of our projects have involved collaboration with these organizations. Many of the challenges we address are motivated by real-world experience, require insights into operations of networks at scale, and can have significant real-world impact. After completing a Ph.D, alumni of Purdue ISL are now working on cutting edge network infrastructure at places such as Meta, Google, AT&amp;T, Bytedance, as well as in universities and Government Agencies. Purdue ISL has often involved undergraduate students, who have continued to pursue graduate studies in top universities, or gone on to good industry positions. </p></div>',2);function Ue(i,a,y,C,b,f){return O(),R("div",Ee,[xe,r("div",Pe,[Fe,r("div",Oe,[r("div",Re,[r("div",$e,[De,r("div",je,[Be,r("div",Ve,[r("button",{class:"play_button",onClick:a[0]||(a[0]=(...t)=>f.playVideo&&f.playVideo(...t))},ze)])])]),Ge])])])])}const qe=j(Le,[["render",Ue]]);var U={};(function i(a,y,C,b){var f=!!(a.Worker&&a.Blob&&a.Promise&&a.OffscreenCanvas&&a.OffscreenCanvasRenderingContext2D&&a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype.transferControlToOffscreen&&a.URL&&a.URL.createObjectURL);function t(){}function M(n){var e=y.exports.Promise,c=e!==void 0?e:a.Promise;return typeof c=="function"?new c(n):(n(t,t),null)}var k=function(){var n=Math.floor(16.666666666666668),e,c,s={},h=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(u){var d=Math.random();return s[d]=requestAnimationFrame(function l(m){h===m||h+n-1<m?(h=m,delete s[d],u()):s[d]=requestAnimationFrame(l)}),d},c=function(u){s[u]&&cancelAnimationFrame(s[u])}):(e=function(u){return setTimeout(u,n)},c=function(u){return clearTimeout(u)}),{frame:e,cancel:c}}(),I=function(){var n,e,c={};function s(h){function u(d,l){h.postMessage({options:d||{},callback:l})}h.init=function(l){var m=l.transferControlToOffscreen();h.postMessage({canvas:m},[m])},h.fire=function(l,m,S){if(e)return u(l,null),e;var p=Math.random().toString(36).slice(2);return e=M(function(_){function w(g){g.data.callback===p&&(delete c[p],h.removeEventListener("message",w),e=null,S(),_())}h.addEventListener("message",w),u(l,p),c[p]=w.bind(null,{data:{callback:p}})}),e},h.reset=function(){h.postMessage({reset:!0});for(var l in c)c[l](),delete c[l]}}return function(){if(n)return n;if(!C&&f){var h=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{n=new Worker(URL.createObjectURL(new Blob([h])))}catch(u){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",u),null}s(n)}return n}}(),x={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function K(n,e){return e?e(n):n}function ee(n){return n!=null}function v(n,e,c){return K(n&&ee(n[e])?n[e]:x[e],c)}function ne(n){return n<0?0:Math.floor(n)}function te(n,e){return Math.floor(Math.random()*(e-n))+n}function B(n){return parseInt(n,16)}function ae(n){return n.map(re)}function re(n){var e=String(n).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:B(e.substring(0,2)),g:B(e.substring(2,4)),b:B(e.substring(4,6))}}function oe(n){var e=v(n,"origin",Object);return e.x=v(e,"x",Number),e.y=v(e,"y",Number),e}function ie(n){n.width=document.documentElement.clientWidth,n.height=document.documentElement.clientHeight}function se(n){var e=n.getBoundingClientRect();n.width=e.width,n.height=e.height}function de(n){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=n,e}function le(n,e,c,s,h,u,d,l,m){n.save(),n.translate(e,c),n.rotate(u),n.scale(s,h),n.arc(0,0,1,d,l,m),n.restore()}function ce(n){var e=n.angle*(Math.PI/180),c=n.spread*(Math.PI/180);return{x:n.x,y:n.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:n.startVelocity*.5+Math.random()*n.startVelocity,angle2D:-e+(.5*c-Math.random()*c),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:n.color,shape:n.shape,tick:0,totalTicks:n.ticks,decay:n.decay,drift:n.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:n.gravity*3,ovalScalar:.6,scalar:n.scalar}}function ue(n,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var c=e.tick++/e.totalTicks,s=e.x+e.random*e.tiltCos,h=e.y+e.random*e.tiltSin,u=e.wobbleX+e.random*e.tiltCos,d=e.wobbleY+e.random*e.tiltSin;if(n.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-c)+")",n.beginPath(),e.shape==="circle")n.ellipse?n.ellipse(e.x,e.y,Math.abs(u-s)*e.ovalScalar,Math.abs(d-h)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):le(n,e.x,e.y,Math.abs(u-s)*e.ovalScalar,Math.abs(d-h)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var l=Math.PI/2*3,m=4*e.scalar,S=8*e.scalar,p=e.x,_=e.y,w=5,g=Math.PI/w;w--;)p=e.x+Math.cos(l)*S,_=e.y+Math.sin(l)*S,n.lineTo(p,_),l+=g,p=e.x+Math.cos(l)*m,_=e.y+Math.sin(l)*m,n.lineTo(p,_),l+=g;else n.moveTo(Math.floor(e.x),Math.floor(e.y)),n.lineTo(Math.floor(e.wobbleX),Math.floor(h)),n.lineTo(Math.floor(u),Math.floor(d)),n.lineTo(Math.floor(s),Math.floor(e.wobbleY));return n.closePath(),n.fill(),e.tick<e.totalTicks}function he(n,e,c,s,h){var u=e.slice(),d=n.getContext("2d"),l,m,S=M(function(p){function _(){l=m=null,d.clearRect(0,0,s.width,s.height),h(),p()}function w(){C&&!(s.width===b.width&&s.height===b.height)&&(s.width=n.width=b.width,s.height=n.height=b.height),!s.width&&!s.height&&(c(n),s.width=n.width,s.height=n.height),d.clearRect(0,0,s.width,s.height),u=u.filter(function(g){return ue(d,g)}),u.length?l=k.frame(w):_()}l=k.frame(w),m=_});return{addFettis:function(p){return u=u.concat(p),S},canvas:n,promise:S,reset:function(){l&&k.cancel(l),m&&m()}}}function q(n,e){var c=!n,s=!!v(e||{},"resize"),h=v(e,"disableForReducedMotion",Boolean),u=f&&!!v(e||{},"useWorker"),d=u?I():null,l=c?ie:se,m=n&&d?!!n.__confetti_initialized:!1,S=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,p;function _(g,W,z){for(var L=v(g,"particleCount",ne),$=v(g,"angle",Number),D=v(g,"spread",Number),A=v(g,"startVelocity",Number),pe=v(g,"decay",Number),ge=v(g,"gravity",Number),me=v(g,"drift",Number),X=v(g,"colors",ae),ve=v(g,"ticks",Number),Y=v(g,"shapes"),fe=v(g,"scalar"),Z=oe(g),J=L,G=[],we=n.width*Z.x,ye=n.height*Z.y;J--;)G.push(ce({x:we,y:ye,angle:$,spread:D,startVelocity:A,color:X[J%X.length],shape:Y[te(0,Y.length)],ticks:ve,decay:pe,gravity:ge,drift:me,scalar:fe}));return p?p.addFettis(G):(p=he(n,G,l,W,z),p.promise)}function w(g){var W=h||v(g,"disableForReducedMotion",Boolean),z=v(g,"zIndex",Number);if(W&&S)return M(function(A){A()});c&&p?n=p.canvas:c&&!n&&(n=de(z),document.body.appendChild(n)),s&&!m&&l(n);var L={width:n.width,height:n.height};d&&!m&&d.init(n),m=!0,d&&(n.__confetti_initialized=!0);function $(){if(d){var A={getBoundingClientRect:function(){if(!c)return n.getBoundingClientRect()}};l(A),d.postMessage({resize:{width:A.width,height:A.height}});return}L.width=L.height=null}function D(){p=null,s&&a.removeEventListener("resize",$),c&&n&&(document.body.removeChild(n),n=null,m=!1)}return s&&a.addEventListener("resize",$,!1),d?d.fire(g,L,D):_(g,L,D)}return w.reset=function(){d&&d.reset(),p&&p.reset()},w}var V;function H(){return V||(V=q(null,{useWorker:!0,resize:!0})),V}y.exports=function(){return H().apply(this,arguments)},y.exports.reset=function(){H().reset()},y.exports.create=q})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),U,!1);const He=U.exports;U.exports.create;const Xe={class:"entry-container hidden"},Ye=r("div",{class:"square"},null,-1),Ze={class:"entry"},Je={class:"date"},Qe=r("span",null," Our paper, ",-1),Ke={class:"font-bold"},en={methods:{celebrate(){He({particleCount:450,spread:100,shapes:["square","circle"],gravity:1.4})}}},nn=Object.assign(en,{__name:"New",props:["date","paper","content","venue","congrats","status"],setup(i){const a=i,y=E(null),C=E(null),b=E(null),f=E(null),t=E(null),M=E(null);return _e(()=>{a.venue!=null&&y.value.classList.remove("hidden"),a.paper!=null&&C.value.classList.remove("hidden"),a.content!=null&&b.value.classList.remove("hidden"),a.congrats!=null&&f.value.classList.remove("hidden"),a.status!=null&&a.venue!=null&&(a.status=="present"?M.value.classList.remove("hidden"):a.status=="accept"&&t.value.classList.remove("hidden"))}),(k,I)=>(O(),R("div",Xe,[Ye,r("p",Ze,[r("span",Je,P(i.date),1),r("span",{ref_key:"paperTag",ref:C,class:"hidden"},[Qe,r("span",Ke,P(i.paper),1)],512),r("span",{ref_key:"venueTag",ref:y,class:"paper-conference hidden"},[r("span",{ref_key:"acceptTag",ref:t,class:"hidden"}," was accepted ",512),r("span",{ref_key:"presentTag",ref:M,class:"hidden"}," was presented ",512),Me(" at "+P(i.venue)+". ",1)],512),r("span",{ref_key:"contentTag",ref:b,class:"hidden"},P(i.content),513),r("span",{class:"hidden",ref_key:"congratsTag",ref:f},[r("span",{class:"congrat-name",onClick:I[0]||(I[0]=(...x)=>k.celebrate&&k.celebrate(...x))},P(i.congrats),1),r("span",{class:"congrat-icon",onClick:I[1]||(I[1]=(...x)=>k.celebrate&&k.celebrate(...x))})],512)])]))}}),tn=nn;let N=[],F=10;const an={methods:{showNews(){for(var i=0;i<N.length;i++)i<F&&(console.log(N[i]),N[i].classList.remove("hidden"));F>=N.length&&document.getElementById("news-load").classList.add("hidden")},expandNews(){F=F*2,this.showNews()},showNewsInit(){F=10;for(var i=0;i<N.length;i++)N[i].classList.add("hidden");document.getElementById("news-load").classList.remove("hidden")}},mounted(){N=document.querySelectorAll(".entry-container"),this.showNewsInit(),this.showNews()},unmounted(){}},rn={class:"main-container"},on=r("h1",{class:"main-page-main-headers"},"What's new?",-1),sn={id:"box3",class:"news"},dn={class:"timeline pl-6 pt-6 pb-6"},ln={id:"news-load",class:"text-center pb-2 flex justify-center"},cn=r("p",{class:"pt-1 bounce"},[r("svg",{width:"20px",viewBox:"0 0 24 24"},[r("path",{d:" M7 13L12 18L17 13M7 6L12 11L17 6",stroke:"#FFF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1);function un(i,a,y,C,b,f){const t=tn;return O(),R("div",rn,[on,r("div",sn,[r("div",dn,[o(t,{date:"June 2024",paper:"Transferable Neural WAN TE for Changing Topologies",venue:"ACM SIGCOMM 2024",status:"accept"}),o(t,{date:"April 2024",paper:"Leo: Online Traffic Classification at Multi-Terabit Line Rates",venue:"USENIX NSDI 2024",status:"present"}),o(t,{date:"November 2023",content:"Ehab Ghabashneh defends his Ph.D thesis.",congrats:"Dr.Ghabashneh"}),o(t,{date:"September 2023",paper:"Dragonfly: Higher Perceptual Quality For Continuous 360° Video Playback",venue:"ACM SIGCOMM 2023",status:"present"}),o(t,{date:"September 2023",paper:"Veritas: Answering Causal Queries from Video Streaming Traces",venue:"ACM SIGCOMM 2023",status:"present"}),o(t,{date:"August 2022",content:"NSF grant (Formal Methods in the Field) awarded on Flexible Data Plane Programming"}),o(t,{date:"August 2022",content:"NSF grant awarded on ML-Driven Online Traffic Analysis at Multi-Terabit Line Rates"}),o(t,{date:"January 2023",paper:"Learning near-optimal network designs by query",venue:"ACM POPL 2023"}),o(t,{date:"December 2022",paper:"Flexile: Meeting bandwidth objectives almost always",venue:"ACM CoNEXT 2022",status:"present"}),o(t,{date:"October 2022",paper:`A Microscopic View of Bursts, Buffer Contention, and Loss in Data
              Centers`,venue:"ACM IMC 2022",status:"present"}),o(t,{date:"October 2022",content:"Received Amazon Sponsored Project support on Anomaly detection in live video"}),o(t,{date:"August 2022",content:"NSF grant awarded on Causal Reasoning for Data-Driven Networking"}),o(t,{date:"April 2022",content:"Received Amazon Research Award on Answering counterfactuals from offline data for video streaming"}),o(t,{date:"December 2021",content:"Professor Rao elevated to ACM Distinguished Member."}),o(t,{date:"November 2021",paper:"Xatu: Richer Neural Network Based Prediction for Video Streaming",venue:"ACM SIGMETRICS 2022",status:"present"}),o(t,{date:"August 2021",paper:`Chimera: exploiting UAS flight path information to optimize
              heterogeneous data transmission`,venue:"IEEE ICNP 2021",status:"present"}),o(t,{date:"July 2021",content:`Russ Shirey defends his Ph.D thesis, and will be joining a US
              Government Agency.`,congrats:"Dr.Shirey"}),o(t,{date:"April 2021",paper:`Hey Lumi! Using Natural Language for Intent-Based Network
              Management`,venue:"Usenix ATC 2021",status:"present"}),o(t,{date:"August 2020",paper:`Pitfalls of data-driven networking: A case study of latent causal
              confounders in video streaming`,venue:`ACM SIGCOMM 2020 Workshop on Network Meets AI & ML (NetAI
              2020)`,status:"present"}),o(t,{date:"August 2020",paper:"PCF: Provably Resilient Flexible Routing",venue:"ACM SIGCOMM 2020",status:"present"}),o(t,{date:"August 2020",content:`NSF grant awarded on Next Generation Multi-Perspective Video
              Delivery at Internet Scale.`}),o(t,{date:"May 2020",content:`Yun deposits his Ph.D thesis on Characterizing and Optimizing
              Internet Video Streaming, and will be taking up a position at
              Google, Mountain View.`,congrats:"Dr.Nam"}),o(t,{date:"February 2020",paper:`Exploring the interplay between CDN caching and video streaming
              performance.`,venue:"IEEE INFOCOM 2020"}),o(t,{date:"December 2019",paper:"Lancet: Better network resilience by designing for pruned failure sets.",venue:"ACM Sigmetrics 2020"}),o(t,{date:"November 2019",paper:"Learning Network Design Objectives Using A Program Synthesis Approach.",venue:"ACM HotNets 2019"}),o(t,{date:"August 2019",content:"NSF grant awarded on Designing Networks for Stringent Performance Requirements."}),o(t,{date:"July 2019",content:"Yiyang deposits his Ph.D thesis on Ensuring Network Designs meet Performance Requirements under Failures, and will be taking up a position at ByteDance, Seattle.",congrats:"Dr.Chang"}),o(t,{date:"May 2019",content:"Sanjay gives a research seminar at RISELab, Berkeley, on work done by Purdue ISL."}),o(t,{date:"October 2018",paper:"Understanding Video Management Planes.",venue:"ACM IMC 2018"}),o(t,{date:"August 2018",content:"NSF grant awarded on Optimizing Internet video through support from the network edge."}),o(t,{date:"August 2018",content:"NSF Formal Methods in the Field grant awarded on Transplanting Syntax-Guided Synthesis to Computer Networks."}),o(t,{date:"August 2018",paper:"Oboe: Auto-tuning video ABR algorithms to network conditions.",venue:" ACM SIGCOMM, 2018"}),o(t,{date:"July 2018",content:"Sanjay gives an invited talk on work done by ISL on mobile web latency at the Microsoft Research workshop At the bleeding edge of Intelligent Edges"}),o(t,{date:"October 2017",paper:"NutShell: Scalable Whittled Proxy Execution for Low-Latency Web over Cellular Networks",venue:"ACM MOBICOM 2017"}),o(t,{date:"March 2017",paper:"Robust validation of network designs under uncertain demands and failures",venue:"USENIX NSDI 2017"})]),r("div",ln,[r("p",{onClick:a[0]||(a[0]=(...M)=>f.expandNews&&f.expandNews(...M)),class:"loadMore"},"Load more"),cn])])])}const hn=j(an,[["render",un]]);let T=[];const pn={methods:{overlap(i){return(window.screen.height-i.getBoundingClientRect().top)/window.screen.height>.07?(console.log(i),i.classList.toggle("show-up"),!0):!1},handleScroll(){var i=[];for(var a in T)this.overlap(T[a])&&i.push(a);for(var a in i)delete T[i[a]];Object.keys(T).length==0&&window.removeEventListener("scroll",this.handleScroll)}},mounted(){window.scrollTo(0,0),T=[],document.querySelectorAll(".main-page-project-div,.news").forEach(a=>{T.push(a),a.classList.contains("show-up")&&a.classList.toggle("show-up")}),console.log(T),window.addEventListener("scroll",this.handleScroll),this.handleScroll()}},gn={id:"doc",class:"bg-[var(--primary-color)] bg-img"},mn={class:"limit-width"},vn=r("div",{class:"pb-[0.01rem]"},null,-1),fn={class:"limit-width"},wn=r("div",{class:"pb-12"},null,-1);function yn(i,a,y,C,b,f){const t=be,M=Ne,k=qe,I=hn;return O(),R("div",gn,[r("div",mn,[vn,o(t)]),o(M),r("div",fn,[o(k),o(I),wn])])}const kn=j(pn,[["render",yn]]);export{kn as default};
