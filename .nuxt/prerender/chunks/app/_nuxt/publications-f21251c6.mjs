import { _ as __nuxt_component_0 } from './HeaderNav-c8a58f8a.mjs';
import { _ as __nuxt_component_1 } from './PageHeader-6cc8daac.mjs';
import { useSSRContext, mergeProps, ref } from 'file:///Users/eghabash/Desktop/ISL-website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///Users/eghabash/Desktop/ISL-website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import './nuxt-link-7a607302.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/ufo/dist/index.mjs';
import '../../renderer.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/h3/dist/index.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/devalue/index.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/destr/dist/index.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/hookable/dist/index.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/scule/dist/index.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/klona/dist/index.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/defu/dist/defu.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/ohash/dist/index.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/pathe/dist/index.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/unified/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/micromark-util-character/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/remark-emoji/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/rehype-slug/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/rehype-external-links/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/remark-gfm/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/rehype-raw/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/remark-parse/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/remark-rehype/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/detab/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/unist-builder/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/mdurl/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/slugify/slugify.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/unist-util-position/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/unist-util-visit/index.js';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/unctx/dist/index.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/unhead/dist/index.mjs';
import 'file:///Users/eghabash/Desktop/ISL-website/node_modules/@unhead/shared/dist/index.mjs';

const _sfc_main$2 = {
  __name: "publication",
  __ssrInlineRender: true,
  props: [
    "title",
    "authors",
    "conference",
    "paper",
    "slides",
    "video",
    "dataset",
    "github",
    "note",
    "notePDF"
  ],
  setup(__props) {
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 pb-3" }, _attrs))}><span class="font-bold">${ssrInterpolate(__props.title)}. </span><span>${ssrInterpolate(__props.authors)}. </span> In <span class="font-light italic">${ssrInterpolate(__props.conference)}. </span><span class="hidden"><a href="" class="text-sky-900 text-base" target="_blank">[Paper]</a></span><span class="hidden"><a class="text-sky-900 text-base" target="_blank">[Slides]</a></span><span class="hidden"><a class="text-sky-900 text-base" target="_blank">[Video]</a></span><span class="hidden">[<a class="text-sky-900 text-base" target="_blank">[Dataset]</a></span><span class="hidden">[<a class="text-sky-900 text-base" target="_blank">[Github]</a></span><p class="hidden font-light">${ssrInterpolate(__props.note)}</p></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/publications/publication.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[20%] md:hidden mx-auto mb-3 border-t-[1.5px] border-slate-300" }, _attrs))}></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/publications/separator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
let publications_divs = [];
const _sfc_main = {
  methods: {
    overlap(element) {
      let topOverlap = (window.screen.height - element.getBoundingClientRect().top) / window.screen.height;
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
    }
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
    this.handleScroll();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderNav = __nuxt_component_0;
  const _component_PageHeader = __nuxt_component_1;
  const _component_PublicationsPublication = __nuxt_component_2;
  const _component_PublicationsSeparator = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "doc",
    class: "bg-[var(--primary-color)] bg-img"
  }, _attrs))}><div class="limit-width">`);
  _push(ssrRenderComponent(_component_HeaderNav, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_PageHeader, { title: "Publications" }, null, _parent));
  _push(`<div class="limit-width"><div class="w-[96%] mx-auto"><p class="ml-2 pt-8 font-extralight italic">**grouped by project</p><div class="publication-project-container"><h1 class="publication-main-headers">Datacenter Networks</h1><div class="publication-div">`);
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "A Microscopic View of Bursts, Buffer Contention, and Loss in Data Centers",
    authors: "Ehab Ghabashneh , Yimeng Zhao , Cristian Lumezanu , Neil Spring , Srikanth Sundaresan, Sanjay Rao",
    conference: "Proceedings of ACM Internet Measurement Conference (IMC), 2022",
    paper: "https://dl.acm.org/doi/pdf/10.1145/3517745.3561430"
  }, null, _parent));
  _push(`</div></div><div class="publication-project-container"><h1 class="publication-main-headers"> ML and Data-Driven Optimization of Internet Video </h1><div class="publication-div">`);
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Dragonfly: Higher Perceptual Quality For Continuous 360\xB0 Video Playback",
    authors: "Ehab Ghabashneh, Chandan Bothra, Ramesh Govindan, Antonio Ortega, and Sanjay Rao",
    conference: "Proceedings of ACM Special Interest Group on Data Communications (SIGCOMM), 2023",
    paper: "papers-pdf/dfly.pdf"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Xatu: Richer Neural Network Based Prediction for Video Streaming",
    authors: "Yun Seong Nam, Jianfei Gao, Chandan Bothra, Ehab Ghabashneh, Sanjay Rao, Bruno Ribeiro, Jibin Zhan, Hui Zhang",
    conference: "Proceedings of the ACM on Measurement and Analysis of Computing Systems (SIGMETRICS), 2022"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Pitfalls of data-driven networking: A case study of latent causal confounders in video streaming",
    authors: "P. C. Sruthi, Sanjay Rao, Bruno Ribeiro",
    conference: "ACM SIGCOMM Workshop on Network Meets AI & ML (NetAI), 2020"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Exploring the interplay between CDN caching and video streaming performance",
    authors: "Ehab Ghabashneh, Sanjay Rao",
    conference: "Proceedings of IEEE International Conference on Computer Communications (INFOCOM), 2020"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Oboe: Auto-tuning video ABR algorithms to network conditions",
    authors: "Zahaib Akhtar*, Yun Seong Nam*, Ramesh Govindan, Sanjay Rao, Jessica Chen, Ethan Katz-Bassett, Bruno Ribeiro, Jibin Zhan, Hui Zhang",
    conference: "Proceedings of ACM Special Interest Group on Data Communications (SIGCOMM), 2018",
    note: "(* : Both authors contributed equally)"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Understanding Video Management Planes",
    authors: "Zahaib Akhtar*, Yun Seong Nam*, Jessica Chen, Ramesh Govindan, Ethan Katz-Bassett, Sanjay Rao, Jibin Zhan, Hui Zhang",
    conference: "Proceedings of ACM Internet Measurement Conference (IMC), 2018",
    note: "(* : Both authors contributed equally)"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "YouTube Everywhere: Impact of Device and Infrastructure Synergies on User Experience",
    authors: "Alessandro Finamore, Ruben Torres, Marco Mellia, Maurizio Munafo and Sanjay Rao",
    conference: "Proceedings of ACM Internet Measurement Conference (IMC), 2011"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Dissecting Video Server Selection Strategies in the YouTube CDN",
    authors: "Ruben Torres, Alessandro Finamore, Jesse Kim, Marco Mellia, Maurizio Munafo and Sanjay Rao",
    conference: "Proceedings of IEEE  International Conference on Distributed Computing Systems (ICDCS), 2011"
  }, null, _parent));
  _push(`</div></div><div class="publication-project-container"><h1 class="publication-main-headers"> Synthesizing network designs with certifiable properties </h1><div class="publication-div">`);
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Flexile: Meeting bandwidth objectives almost always",
    authors: "Chuan Jiang, Zixuan Li, Sanjay Rao, Mohit Tawarmalani",
    conference: "Proceedings of ACM Conference on emerging Networking EXperiments and Technologies  (CoNEXT), 2022"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "PCF: Provably Resilient Flexible Routing",
    authors: "Chuan Jiang, Zixuan Li, Sanjay Rao, Mohit Tawarmalani",
    conference: "Proceedings of ACM Special Interest Group on Data Communications (SIGCOMM), 2020"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Lancet: Better network resilience by designing for pruned failure sets",
    authors: "Yiyang Chang, Chuan Jiang, Ashish Chandra, Sanjay Rao, Mohit Tawarmalani",
    conference: "Proceedings of the ACM on Measurement and Analysis of Computing Systems (SIGMETRICS), 2020"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Learning Network Design Objectives Using A Program Synthesis Approach",
    authors: "Yanjun Wang, Chuan Jiang, Xiaokang Qiu, Sanjay G. Rao",
    conference: "Proceedings of the 18th ACM Workshop on Hot Topics in Networks (HotNets), 2019"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Robust validation of network designs under uncertain demands and failures",
    authors: "Yiyang Chang, Sanjay Rao, Mohit Tawarmalani",
    conference: "Proceedings of the 14th USENIX Symposium on Networked Systems Design and Implementation (NSDI), 2017"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Alpaca: Compact Network Policies With Attribute-Encoded Addresses",
    authors: "Nanxi Kang, Ori Rottenstreich, Sanjay Rao and Jennifer Rexford",
    conference: "IEEE/ACM Transactions on Networking, 2017.",
    note: " An earlier version of this paper appeared in ACM CoNext 2015"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Hydra: Leveraging Functional Slicing for Efficient Distributed SDN Controllers",
    authors: "Yiyang Chang, Ashkan Rezaei, Balajee Vamanan, Jahangir Hasan, Sanjay Rao, and T. N. Vijaykumar",
    conference: "proceedings of the 9th IEEE International Conference on COMmunication Systems and NETworkS (IEEE COMSNETS), 2017"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Composing middlebox and traffic engineering policies in SDNs",
    authors: "Yiyang Chang, Gustavo Petri, Sanjay Rao, Tiark Rompf",
    conference: "Proceedings of the 2nd International INFOCOM Workshop on Software-Driven Flexible and Agile Networking (IEEE INFOCOM Workshop SWFAN), 2017"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Modeling Complexity of Enterprise Routing Design",
    authors: "Xin Sun, Sanjay G. Rao and Geoffrey G. Xie",
    conference: "Proceedings of ACM Conference on emerging Networking EXperiments and Technologies  (CoNEXT), 2022",
    note: "See Purdue Technical Report version TR-ECE-12-10"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Towards Systematic Design of Enterprise Networks",
    authors: "Yu-Wei Sung, Xin Sun, Sanjay Rao, Geoffrey Xie and David Maltz",
    conference: "IEEE/ACM Transactions on Networking (ToN), 2011"
  }, null, _parent));
  _push(`</div></div><div class="publication-project-container"><h1 class="publication-main-headers"> Video streaming in Unmanned Aerial Systems (UAS) settings </h1><div class="publication-div">`);
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Chimera: exploiting UAS flight path information to optimize heterogeneous data transmission",
    authors: "Russell Shirey, Sanjay Rao, Shreyas Sundaram",
    conference: "IEEE 29th International Conference on Network Protocols (ICNP), 2021"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Optimizing Quality of Experience for Long-Range UAS Video Streaming",
    authors: "Russell Shirey, Sanjay Rao, Shreyas Sundaram",
    conference: "IEEE/ACM 29th International Symposium on Quality of Service (IWQoS), 2021"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Measuring Fixed Wing UAS Networks at Long Range",
    authors: "Russell Shirey, Sanjay Rao, Shreyas Sundaram",
    conference: "6th ACM Workshop on Micro Aerial Vehicle Networks, Systems, and Applications (DroNet), 2020"
  }, null, _parent));
  _push(`</div></div><div class="publication-project-container"><h1 class="publication-main-headers"> Achieving low mobile web latency </h1><div class="publication-div">`);
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "NutShell: Scalable Whittled Proxy Execution for Low-Latency Web over Cellular Networks",
    authors: "Ashiwan Sivakumar, Chuan Jiang, Yun Seong Nam, Shankaranarayanan P N, Vijay Gopalakrishnan, Sanjay Rao, Subhabrata Sen, Mithuna Thottethodi, Vijaykumar T.N.",
    conference: "Proceedings of ACM Annual International Conference On Mobile Computing And Networking (MobiCom) 2017"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Reducing latency through page-aware management of web objects by Content Delivery Networks",
    authors: "Shankaranarayanan P N, Yun Seong Nam, Ashiwan Sivakumar, Balakrishnan Chandrasekaran, Bruce Maggs, Sanjay Rao",
    conference: "Proceedings of ACM  International Conference on Measurement and Modeling of Computer Science (SIGMETRICS), 2016"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "PARCEL: Proxy Assisted bRowsing in Cellular networks for Energy and Latency reduction",
    authors: "Ashiwan Sivakumar, Shankaranarayanan P N, Vijay Gopalakrishnan, Seungjoon Lee, Sanjay Rao and Subhabrata Sen",
    conference: "Proceedings of ACM Conference on emerging Networking EXperiments and Technologies (CoNEXT), 2014"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_PublicationsPublication, {
    title: "Cloud is not a silver bullet: A Case Study of Cloud-based Mobile Browsing",
    authors: "Ashiwan Sivakumar, Vijay Gopalakrishnan, Seungjoon Lee, Sanjay Rao, Subhabrata Sen and Oliver Spatscheck",
    conference: "Proceedings of the 15th Workshop on Mobile Computing Systems and Applications (HotMobile), 2014"
  }, null, _parent));
  _push(`</div></div></div></div><div class="pb-[150px]"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/publications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const publications = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { publications as default };
//# sourceMappingURL=publications-f21251c6.mjs.map
