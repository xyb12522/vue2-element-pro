<template>
  <div class="mm pro-code">
    <div class="pro-title pro-bottom">快速上手</div>
    <!-- 1 -->
    <div class="pro-sub-title">1.使用 @vue2/element-pro 前准备工作</div>
    <p class="pro-red-tips">注意：使用前，必须先确定已经安装element-ui（yarn add element-ui）</p>
    <highlightjs language="javascript" :code="step1" />
    <!-- 2 -->
    <div class="pro-sub-title">2.项目里引入 @vue2/element-pro</div>
    <highlightjs language="javascript" :code="step2" />
    <div class="pro-sub-title">3.项目里使用</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step1:
      `// element-ui版本最好在2.13之后(element-pro大部分组件都是基于2.13版本开发的)
// 先引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);`,
      step2:
      `// 安装好element-pro后，引入element-pro
import ElementPro from "@vue2/element-pro";
import "@vue2/element-pro/lib/element-pro.css";
Vue.use(ElementPro);`,
    };
  },
};
</script>
