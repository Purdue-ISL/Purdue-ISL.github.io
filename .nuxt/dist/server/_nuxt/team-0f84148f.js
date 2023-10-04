import { _ as __nuxt_component_0 } from "./HeaderNav-c8a58f8a.js";
import { _ as __nuxt_component_1 } from "./PageHeader-6cc8daac.js";
import { ref, useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
  __name: "member",
  __ssrInlineRender: true,
  props: ["img", "name", "title", "area"],
  setup(__props) {
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col text-center items-center m-6"><img class="team-member-img"${ssrRenderAttr("src", "")}><p class="team-member-name">${ssrInterpolate(__props.name)}</p><p class="team-member-title">${ssrInterpolate(__props.title)}</p><p class="text-xl font-light hidden">${ssrInterpolate(__props.area)}</p></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/team/member.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Alumni",
  __ssrInlineRender: true,
  props: [
    "name",
    "graduation_year",
    "degree",
    "thesis_title",
    "position",
    "c_position",
    "co_advisor"
  ],
  setup(__props) {
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-5 pb-3"><div class="text-lg"><span class="font-mono tracking-tighter font-semibold">${ssrInterpolate(__props.name)}</span><span> (${ssrInterpolate(__props.degree)} ${ssrInterpolate(__props.graduation_year)}) </span><span> — </span><span> First position: ${ssrInterpolate(__props.position)}</span><span class="hidden"> → Now: ${ssrInterpolate(__props.c_position)}</span><span class="hidden font-light float-right"><sup>*</sup>co-advised with Prof. ${ssrInterpolate(__props.co_advisor)}</span><p><span class="font-light"> Thesis title: <span class="italic">${ssrInterpolate(__props.thesis_title)}</span></span></p></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/team/Alumni.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[20%] md:hidden mx-auto mb-3 border-t-[1.5px] border-slate-300" }, _attrs))}></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/team/separator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
let teams_divs = [];
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
      for (var idx in teams_divs) {
        if (this.overlap(teams_divs[idx])) {
          filtered.push(idx);
        }
      }
      for (var idx in filtered) {
        delete teams_divs[filtered[idx]];
      }
      if (Object.keys(teams_divs).length == 0) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    teams_divs = [];
    let team_div_nodelist = document.querySelectorAll(".team-group-container");
    team_div_nodelist.forEach((team_div) => {
      teams_divs.push(team_div);
      if (team_div.classList.contains("show-up")) {
        team_div.classList.toggle("show-up");
      }
    });
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderNav = __nuxt_component_0;
  const _component_PageHeader = __nuxt_component_1;
  const _component_TeamMember = __nuxt_component_2;
  const _component_TeamAlumni = __nuxt_component_3;
  const _component_TeamSeparator = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "doc",
    class: "bg-[var(--primary-color)] bg-img"
  }, _attrs))}><div class="limit-width">`);
  _push(ssrRenderComponent(_component_HeaderNav, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_PageHeader, { title: "ISL Team" }, null, _parent));
  _push(`<div class="limit-width"><div class="w-[96%] mx-auto"></div><div class="team-group-container pt-10"><h1 class="team-group-header">Faculty</h1><div class="team-members-container">`);
  _push(ssrRenderComponent(_component_TeamMember, {
    img: "image8801.jpeg",
    name: "Sanjay Rao",
    title: "Professor",
    area: ""
  }, null, _parent));
  _push(`</div></div><div class="team-group-container"><h1 class="team-group-header">Graduate Students</h1><div class="team-members-container">`);
  _push(ssrRenderComponent(_component_TeamMember, {
    name: "Ehab Ghabashneh",
    title: "Ph.D. Candidate",
    area: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamMember, {
    name: "Chandan Bothra",
    title: "Ph.D Student",
    area: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamMember, {
    name: "Usman Jafari",
    title: "Ph.D. Student",
    area: ""
  }, null, _parent));
  _push(`</div></div><div class="team-group-container"><h1 class="team-group-header">Undergraduate Students</h1><div class="team-members-container">`);
  _push(ssrRenderComponent(_component_TeamMember, {
    name: "Clayton Walker",
    title: "Undergraduate researcher",
    area: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamMember, {
    name: "Jagan Krishnasamy",
    title: "Undergraduate researcher",
    area: ""
  }, null, _parent));
  _push(`</div></div><div class="team-group-container"><h1 class="team-group-header">Alumni</h1><div class="alumni-members-container">`);
  _push(ssrRenderComponent(_component_TeamAlumni, {
    name: "Chuan Jiang",
    degree: "Ph.D.",
    graduation_year: "2022",
    thesis_title: "Resilient Wide Area Network Routing Algorithms For Meeting Service Level Objectives",
    position: "Meta Platforms"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_TeamAlumni, {
    name: "Russ Shirey",
    degree: "Ph.D.",
    graduation_year: "2021",
    thesis_title: "Data-Driven and Control Theoretic Approaches for Real-Time Sensor Data Transmission Over Unmanned Aerial Systems Networks",
    position: "US Air Force",
    co_advisor: "Shreyas Sundaram"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_TeamAlumni, {
    name: "Yun Seong Nam",
    degree: "Ph.D.",
    graduation_year: "2020",
    thesis_title: "Characterizing and Optimizing Internet Video Streaming",
    position: "Google"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_TeamAlumni, {
    name: "Yiyang Chang ",
    degree: "Ph.D.",
    graduation_year: "2019",
    thesis_title: "Ensuring Network Designs meet Performance Requirements under Failures",
    position: "ByteDance"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_TeamAlumni, {
    name: "Ashiwan Sivakumar ",
    degree: "Ph.D.",
    graduation_year: "2017",
    thesis_title: "Scalable Redundant Proxy Execution for low-latency Web over Cellular Networks",
    position: "Post-doc @ CMU",
    c_position: "AT&T Labs Research"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_TeamAlumni, {
    name: "Shankaranarayanan Narayanan ",
    degree: "Ph.D.",
    graduation_year: "2016",
    thesis_title: "A Holistic Approach to Lowering Latency in Geo-distributed Web Applications",
    position: "AT&T Labs Research"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_TeamAlumni, {
    name: "Mohammad Hajjat ",
    degree: "Ph.D.",
    graduation_year: "2014",
    thesis_title: "Architecting Delay Sensitive Applications for the Cloud",
    position: "Microsoft Azure",
    c_position: "Roblox"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_TeamAlumni, {
    name: "Srivathsava Rangarajan ",
    degree: "MSc Thesis",
    graduation_year: "2014",
    thesis_title: "Paxos based directory updates for geo-replicated cloud storage",
    position: "Enova"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamSeparator, null, null, _parent));
  _push(ssrRenderComponent(_component_TeamAlumni, {
    name: "Xin Sun ",
    degree: "Ph.D.",
    graduation_year: "2012",
    thesis_title: "Towards Systematic Migration of Enterprise Networks",
    position: "Assistant Professor @ Florida International University",
    c_position: "Assistant Professor @ Ball State (Winner of NSF Career Research Initiation Initiative Award)"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamSeparator, null, null, _parent));
  _push(`</div></div></div><div class="pb-[150px]"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const team = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  team as default
};
//# sourceMappingURL=team-0f84148f.js.map
