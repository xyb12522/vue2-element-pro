<template>
  <div
    class="el-select-dropdown el-popper"
    :style="{ width: width }">
    <slot></slot>
  </div>
</template>
 
<script>
export default {
  name: 'SelectDropdown',
  data() {
    return {
      width: ''
    };
  },
  mounted() {
    this.width = this.$parent.$el.clientWidth + 'px';
    window.addEventListener('resize', this.resizeWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeWidth);
  },
  methods: {
    resizeWidth() {
      this.width = this.$parent.$el.clientWidth + 'px';
    }
  }
};
</script>