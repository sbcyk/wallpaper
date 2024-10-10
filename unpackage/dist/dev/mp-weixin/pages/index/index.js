"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const imageList = ["../../common/images/banner1.jpg", "../../common/images/banner2.jpg", "../../common/images/banner3.jpg"];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(imageList, (item, k0, i0) => {
          return {
            a: item
          };
        }),
        b: common_vendor.p({
          type: "sound-filled",
          size: "20"
        }),
        c: common_vendor.f(4, (item, k0, i0) => {
          return {};
        }),
        d: common_vendor.p({
          type: "right",
          size: "16",
          color: "#333"
        }),
        e: common_vendor.p({
          type: "calendar",
          size: "18"
        }),
        f: common_vendor.p({
          date: Date.now(),
          format: "dd日"
        }),
        g: common_vendor.f(8, (item, k0, i0) => {
          return {};
        }),
        h: common_assets._imports_0,
        i: common_vendor.f(8, (item, k0, i0) => {
          return {
            a: "1cf27b2a-6-" + i0
          };
        }),
        j: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
