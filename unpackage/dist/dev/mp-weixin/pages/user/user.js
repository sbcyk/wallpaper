"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const list2 = common_vendor.ref([
      { name: "sub", value: "订阅更新", icon: "notification-filled" },
      { name: "problem", value: "常见问题", icon: "flag-filled" }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        c: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        d: common_vendor.p({
          type: "star-filled",
          size: "20"
        }),
        e: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        f: common_vendor.p({
          type: "chatboxes-filled",
          size: "20"
        }),
        g: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        h: common_vendor.f(list2.value, (item, k0, i0) => {
          return {
            a: "0f7520f0-6-" + i0,
            b: common_vendor.p({
              type: item.icon,
              size: "20"
            }),
            c: common_vendor.t(item.value),
            d: "0f7520f0-7-" + i0,
            e: item.name
          };
        }),
        i: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
