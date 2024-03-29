import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "小涵的家",
  description: "vuepress-theme-hope 的文档演示",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
