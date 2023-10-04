import { _ as __nuxt_component_0 } from "./HeaderNav-c8a58f8a.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import confetti from "canvas-confetti";
import "./nuxt-link-7a607302.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "defu";
const _sfc_main$3 = {
  methods: {
    check() {
      document.getElementById("doc");
    }
  },
  beforeMount() {
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner-bg-img flex flex-col justify-center items-center" }, _attrs))}><div class="banner-font flex justify-center"><div><p class="banner-typewriter tracking-tight md:tracking-normal">Internet Systems Lab</p></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/BannerImage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + __publicAssetsURL("videos/ISL.mp4");
const _sfc_main$2 = {
  methods: {
    playVideo() {
      let video = document.getElementsByTagName("video")[0];
      let playButton = document.getElementById("video-overlay");
      video.play();
      video.controls = true;
      playButton.classList.add("hidden");
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-5 mt-10" }, _attrs))}><div class="main-container"><h1 class="main-page-main-headers pt-8">What we do?</h1><div id="box1" class="main-page-main-divs"><p class="pt-6 pl-6"> We conduct research in two broad areas related to the Internet: </p><div class="main-page-projects-container"><div class="main-page-project-div"><h2 class="main-page-project-header"> Network verification and synthesis </h2><p class="main-page-project-content"> Managing large networks often involves complex policies (e.g., security, QoS, fault tolerance). On the one hand networks must perform acceptably 99.99% of the time or more, yet studies from Google and others show failures are the norm, and traffic patterns change constantly. Design today is largely ad-hoc. By many estimates a large portion of the IT budget of organizations is driven by the need to manage networks, with configuration errors and design faults often accounting for a large fraction of cyber-attacks. We are designing networks that are formally verifiable and which provide provable performance guarantees despite uncertainty. Our research draws on optimization-theoretic techniques and formal methods. We validate our research on real Internet topologies, traffic data and network configurations, and through large-scale emulation testbeds </p></div><div class="main-page-project-div"><h2 class="main-page-project-header"> ML-driven optimizations of Internet video, and network support for 360 video/AR/VR </h2><p class="main-page-project-content"> Many exciting new applications are emerging on the Internet such as 4K video, 360 video, and AR/VR which are both bandwidth intensive, and can only tolerate tens of milliseconds of latency for good user experience. We are developing novel algorithms and building prototye systems for ensuring a high quality of experience for these applications despite variable Internet environments (e.g., cellular settings). Our algorithms are often informed by large-scale real-world data sets (e.g, of video streaming sessions) and cutting edge ML techniques </p></div></div></div></div><div class="main-container"><h1 class="main-page-main-headers">More about us?</h1><div id="box2" class="main-page-main-divs"><div class="main-page-projects-container"><div class="main-page-project-div"><h2 class="main-page-project-header"> The video below, and this slide deck present an overview of recent research in our group: </h2><div class="main-page-projects-container relative"><video class="main-page-video"><source${ssrRenderAttr("src", _imports_0)} type="video/webm"></video><div id="video-overlay" class="video-overlay"><button class="play_button"><div class="playshape"></div></button></div></div></div><div class="main-page-project-div"><h2 class="main-page-project-header"> Background needed to work in Purdue ISL </h2><p class="main-page-project-content"> Prospective students must ideally have a strong background in Computer Science or Computer Engineering with extensive programming (ideally systems programming) background. However, EE students with a willingness/ability to build strong systems programming skills are welcome. Since some of our research draws on cutting edge techniques in optimization, machine learning, and formal methods, students with an aptitude for math/theory with an interest in applications to real-world networking problems may also be a good fit. Students are not expected to have background in all areas at the start of their Ph.D, but successful students have an ability and willingness to develop the needed background for their research problem as their research evolves. </p></div><div class="main-page-project-div"><p class="main-page-project-content pt-6"> Our research has benefited by support from NSF, Cisco, Google, Facebook, NetApp, AT&amp;T, and Microsoft , and many of our projects have involved collaboration with these organizations. Many of the challenges we address are motivated by real-world experience, require insights into operations of networks at scale, are great fun, and can change theworld! After completing a Ph.D, alumni of Purdue ISL are now working on cutting edge network infrastructure at places such as Facebook, Google, AT&amp;T,Bytedance, as well as in universities and Government Agencies. Purdue ISL has often involved undergraduate students, who have continued to pursue graduate studies in top universities, or gone on to good industry positions. </p></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/Content.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  methods: {
    celebrate() {
      confetti({
        particleCount: 450,
        spread: 100,
        shapes: ["square", "circle"],
        gravity: 1.4
      });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}><h1 class="main-page-main-headers">What&#39;s new?</h1><div id="box3" class="news"><div class="timeline pl-6 pt-6"><div class="entry-container"><div class="square"></div><p class="entry"><span class="date">December 2022</span><span class="paper-title">Flexile: Meeting bandwidth objectives almost always </span><span class="paper-conference">ACM ConNEXT 2022</span></p></div><div class="entry-container"><div class="square"></div><p class="entry"><span class="date">October 2022</span><span class="paper-title">A Microscopic View of Bursts, Buffer Contention, and Loss in Data Centers </span><span class="paper-conference">ACM IMC 2022</span></p></div><div class="entry-container"><div class="square"></div><p class="entry"><span class="date">December 2021</span><span> Professor Rao elevated to ACM Distinguished Member.</span></p></div><div class="entry-container"><div class="square"></div><p class="entry"><span class="date">November 2021</span><span class="paper-title">Xatu: Richer Neural Network Based Prediction for Video Streaming </span><span class="paper-conference">ACM SIGMETRICS 2022</span></p></div><div class="entry-container"><div class="square"></div><p class="entry"><span class="date">August 2021</span><span class="paper-title">Chimera: exploiting UAS flight path information to optimize heterogeneous data transmission </span><span class="paper-conference">IEEE ICNP 2021</span></p></div><div class="entry-container"><div class="square"></div><p class="entry"><span class="date">July 2021</span><span>Russ Shirey defends his Ph.D thesis, and will be joining a US Government Agency.</span><span class="congrat-name"> Dr. Shirey </span><span class="congrat-icon"></span></p></div><div class="entry-container"><div class="square"></div><p class="entry"><span class="date">April 2021</span><span class="paper-title">Hey Lumi! Using Natural Language for Intent-Based Network Management </span><span class="paper-conference">Usenix ATC 2021</span></p></div><div class="entry-container"><div class="square"></div><p class="entry"><span class="date">August 2020</span><span class="paper-title">Pitfalls of data-driven networking: A case study of latent causal confounders in video streaming </span><span class="paper-conference">ACM SIGCOMM 2020 Workshop on Network Meets AI &amp; ML (NetAI 2020)</span></p></div><div class="entry-container"><div class="square"></div><p class="entry"><span class="date">August 2020</span><span class="paper-title">PCF: Provably Resilient Flexible Routing </span><span class="paper-conference">ACM SIGCOMM 2020</span></p></div><div class="entry-container"><div class="square"></div><p class="entry"><span class="date">August 2020</span><span> NSF grant awarded on Next Generation Multi-Perspective Video Delivery at Internet Scale.</span></p></div><div class="entry-container"><div class="square"></div><p class="entry"><span class="date">May 2020</span><span>Yun deposits his Ph.D thesis on Characterizing and Optimizing Internet Video Streaming, and will be taking up a position at Google, Mountain View.</span><span class="congrat-name"> Dr. Nam </span><span class="congrat-icon"></span></p></div><div class="entry-container"><div class="square"></div><p class="entry"><span class="date">February 2020</span><span class="paper-title">Exploring the interplay between CDN caching and video streaming performance </span><span class="paper-conference">IEEE INFOCOM 2020</span></p></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/News.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
let content_divs = [];
const _sfc_main = {
  methods: {
    overlap(element) {
      let topOverlap = (window.screen.height - element.getBoundingClientRect().top) / window.screen.height;
      if (topOverlap > 0.07) {
        console.log(element);
        element.classList.toggle("show-up");
        return true;
      }
      return false;
    },
    handleScroll() {
      var filtered = [];
      for (var idx in content_divs) {
        if (this.overlap(content_divs[idx])) {
          filtered.push(idx);
        }
      }
      for (var idx in filtered) {
        delete content_divs[filtered[idx]];
      }
      if (Object.keys(content_divs).length == 0) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    content_divs = [];
    let content_divs_nodelist = document.querySelectorAll(
      ".main-page-project-div,.news"
    );
    content_divs_nodelist.forEach((content_div) => {
      content_divs.push(content_div);
      if (content_div.classList.contains("show-up")) {
        content_div.classList.toggle("show-up");
      }
    });
    console.log(content_divs);
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderNav = __nuxt_component_0;
  const _component_HomepageBannerImage = __nuxt_component_1;
  const _component_HomepageContent = __nuxt_component_2;
  const _component_HomepageNews = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "doc",
    class: "bg-[var(--primary-color)] bg-img"
  }, _attrs))}><div class="limit-width"><div class="pb-[0.01rem]"></div>`);
  _push(ssrRenderComponent(_component_HeaderNav, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_HomepageBannerImage, null, null, _parent));
  _push(`<div class="limit-width">`);
  _push(ssrRenderComponent(_component_HomepageContent, null, null, _parent));
  _push(ssrRenderComponent(_component_HomepageNews, null, null, _parent));
  _push(`<div class="pb-12"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-946a722b.js.map
