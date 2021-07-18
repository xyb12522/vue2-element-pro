<template>
  <div class="pro-code">
    <div class="pro-title pro-bottom">安装</div>
    <div>yarn安装 / npm安装</div>
    <highlightjs language="shell" :code="code" />
    <div class="pro-title pro-bottom">CDN</div>
    <!-- <div>
      目前可以通过
      <a href="https://unpkg.com/mcrm-jsapi/">unpkg.com/vue2/element-pro</a>
      获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。</div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      code:
      `yarn add @vue2/element-pro
or
npm install @vue2/element-pro`,
    };
  },
};
</script>
