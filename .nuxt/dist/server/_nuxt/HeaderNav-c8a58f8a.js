import { _ as __nuxt_component_0$1 } from "./nuxt-link-7a607302.js";
import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  methods: {
    toggleNavBar() {
      let nav = document.getElementById("nav-container");
      nav.classList.toggle("show");
      let buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.classList.toggle("fade");
      });
      document.getElementById("menu-bar").classList.toggle("close");
    },
    toggleNavBarMobile() {
      let navMobile = document.getElementById("mobile-menu-buttons");
      navMobile.classList.toggle("show");
      let mobile_menu_ham = document.getElementsByClassName("mobile-menu-ham")[0];
      mobile_menu_ham.classList.toggle("show");
      let num_of_buttons = document.querySelectorAll(".mobile-button").length;
      for (var idx = 1; idx < num_of_buttons + 1; idx++) {
        let className = "mobile-button" + idx;
        document.getElementsByClassName(className)[0].classList.toggle("show");
      }
    },
    hideNavBarMobile() {
      console.log(event);
      let navMobile = document.getElementById("mobile-menu-buttons");
      if (navMobile.classList.contains("show")) {
        navMobile.classList.toggle("show");
        let mobile_menu_ham = document.getElementsByClassName("mobile-menu-ham")[0];
        mobile_menu_ham.classList.toggle("show");
        let num_of_buttons = document.querySelectorAll(".mobile-button").length;
        for (var idx = 1; idx < num_of_buttons + 1; idx++) {
          let className = "mobile-button" + idx;
          document.getElementsByClassName(className)[0].classList.toggle("show");
        }
      }
    }
  },
  beforeMount() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<!--[--><nav id="nav-container" class="invisible h-[0] sm:visible sm:nav-bar">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nxt-link-btn",
    onClick: $options.toggleNavBar
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col items-center"${_scopeId}><p class="menu-hamburger-line"${_scopeId}></p><p class="menu-hamburger-line"${_scopeId}></p><p class="menu-hamburger-line"${_scopeId}></p></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col items-center" }, [
            createVNode("p", { class: "menu-hamburger-line" }),
            createVNode("p", { class: "menu-hamburger-line" }),
            createVNode("p", { class: "menu-hamburger-line" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nxt-link-btn",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nxt-link-btn",
    to: "/team"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Team`);
      } else {
        return [
          createTextVNode("Team")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nxt-link-btn",
    to: "/projects"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects`);
      } else {
        return [
          createTextVNode("Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nxt-link-btn",
    to: "/publications"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Publications`);
      } else {
        return [
          createTextVNode("Publications")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { class: "nxt-link-btn" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Open Source`);
      } else {
        return [
          createTextVNode("Open Source")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { class: "nxt-link-btn" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Us`);
      } else {
        return [
          createTextVNode("Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><div id="menu-bar" class="invisible sm:visible menu-hamburger"><p class="menu-hamburger-line"></p><p class="menu-hamburger-line"></p><p class="menu-hamburger-line"></p></div><div class="h-16"></div><nav id="nav-container-mobile" class="nav-bar-mobile sm:invisible"><button class="mobile-menu-ham"><div class="flex flex-col items-center pb-[3px]"><p class="menu-hamburger-line"></p><p class="menu-hamburger-line"></p><p class="menu-hamburger-line"></p></div></button><ul id="mobile-menu-buttons" class="mobile-menu-buttons">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "mobile-button mobile-button1",
    onClick: $options.toggleNavBarMobile,
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "mobile-button mobile-button2",
    onClick: $options.toggleNavBarMobile,
    to: "/team"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Team`);
      } else {
        return [
          createTextVNode("Team")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "mobile-button mobile-button3",
    onClick: $options.toggleNavBarMobile,
    to: "/projects"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Projects `);
      } else {
        return [
          createTextVNode(" Projects ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "mobile-button mobile-button4",
    onClick: $options.toggleNavBarMobile,
    to: "/publications"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Publications `);
      } else {
        return [
          createTextVNode(" Publications ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "mobile-button mobile-button5",
    onClick: $options.toggleNavBarMobile
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Open Source `);
      } else {
        return [
          createTextVNode(" Open Source ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "mobile-button mobile-button6",
    onClick: $options.toggleNavBarMobile
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact Us `);
      } else {
        return [
          createTextVNode(" Contact Us ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul></nav><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=HeaderNav-c8a58f8a.js.map
