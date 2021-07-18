<template>
  <div class="pro-code">
    <div class="pro-title pro-bottom">版本0.1.1</div>
    <highlightjs language="shell" :code="code" />
    <div class="pro-title pro-bottom">持续更新...</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code:
      `初步搭建element-pro
组件list：
    table-pro
    form-pro
    select-pro`,
    };
  },
};
</script>
