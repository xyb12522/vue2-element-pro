<template>
  <div v-clickoutside="()=>visible=false" class="com-select" :class="{'is-disabeled' : disabled}">
    <div ref="reference" class="com-select-input" @click="clickSelectInput">
      <div class="one"></div>
      <!-- tags展示 -->
      <div v-if="value.length > 0" class="two">
        <span v-for="item in optionArr" :key="item[listKey]">
          <el-tag
            v-show="item.selected"
            size="small"
            closable
            hit
            type="info"
            disable-transitions
            @close="deleteTag(item)">
            <span class="el-select__tags-text">{{ item[listVal] }}</span>
          </el-tag>
        </span>
      </div>
      <div v-else class="two" style="color: #c4c9db">请选择</div>
      <div class="three" @mouseenter.stop="inputHovering = true" @mouseleave.stop="inputHovering = false" >
        <i
          v-if="showClose"
          class="el-select__caret el-input__icon el-icon-circle-close"
          @click.stop="cancelCheckAll"
        ></i>
        <i
          v-else
          :class="`el-icon-arrow-${
            visible ? 'up' : 'down'
          } el-select__caret el-input__icon`"
        ></i>
      </div>
    </div>
    <transition name="el-zoom-in-top">
      <!-- 下拉框 -->
      <the-select-menu v-show="visible" ref="popper" append-to-body>
        <!-- 搜索框 -->
        <el-input
          v-model="queryVal"
          placeholder="请输入"
          size="small"
          clearable
          @input="handleSearch">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <!-- select选项 -->
        <div class="com-select-body">
          <div
            v-for="(item) in displayArr"
            :key="item[listKey]"
            :title="item[listVal]"
            :style="formatColumn()"
            :class="['com-option', { selected: item.selected }]"
            @click="selectOptionClick(item)">
            {{ item[listVal] }}
          </div>
          <div v-if="displayArr.length === 0" class="com-select-nodata">
            <img :src="require('@packages/assets/image/nodatatable.png')" />
            <div>暂无数据</div>
          </div>
          <template v-if="nextPageStaus">
            <i v-for="v in 3" :key="'AA' + v" :style="formatColumn()"></i>
          </template>
        </div>
        <!-- 分页 -->
        <div class="com-footer-page">
          <el-button size="small" :disabled="prePageStaus" @click="currentPage--">上一页</el-button>
          <div class="selected">已选{{ selectedArr.length }}</div>
          <el-button type="primary" size="small" @click="checkAll">全选</el-button>
          <div class="selected">共{{ options.length }}</div>
          <el-button size="small" :disabled="nextPageStaus" @click="currentPage++">下一页</el-button>
        </div>
      </the-select-menu>
    </transition>
  </div>
</template>

<script>
import TheSelectMenu from './select-dropdown.vue'
import Clickoutside from 'element-ui/src/utils/clickoutside'

export default {
  name: 'SelectPro',
  components: { TheSelectMenu },
  directives: { Clickoutside },
  props: {
    value: {
      // 默认选中的值
      type: Array,
      default: () => [],
      required: true,
    },
    options: {
      // 传进来的选项数组
      type: Array,
      default: () => [],
    },
    props: {
      type: Object,
      default: () => ({ label: 'label', value: 'value' }),
    },
    column: {
      // 展示多少列 暂时支持1-4列
      type: Number,
      default: 3,
    },
    disabled: {
      // 置灰
      type: Boolean,
      default: false,
    },
    selectAll: {
      // 初始化是否全选
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      optionArr: [], // 未过滤的全部的选项
      inputHovering: false,
      filterArr: [],
      queryVal: '', // 过滤输入框绑定的值
      visible: false,
      pageSize: this.column * 4,
      currentPage: 1,
      toggleCheckAll: this.selectAll,
    }
  },
  computed: {
    // 过滤后当前页展示的选项
    displayArr() {
      return this.filterArr.slice((this.currentPage - 1) * this.pageSize,this.currentPage * this.pageSize)
    },
    selectedArr() {
      return this.optionArr.filter((opt) => opt.selected)
    },
    listKey() {
      return this.props['value'] || 'value'
    },
    listVal() {
      return this.props['label'] || 'label'
    },
    showClose() {
      return this.selectedArr.length > 0 && this.inputHovering && !this.disabled
    },
    prePageStaus() {
      const len = Math.ceil(this.filterArr.length / this.pageSize)
      if (this.currentPage === 1 || len === 0)  return true;
      return false;
    },
    nextPageStaus() {
      const len = Math.ceil(this.filterArr.length / this.pageSize)
      if (len && this.currentPage < len) return false;
      return true;
    },
  },
  watch: {
    selectedArr(val) {
      const arr = val.map(item => item[this.listKey]);
      this.$emit('input', arr)
    },
    options: {
      handler(newOption) {
        if (!newOption || newOption.length === 0) return;
        this.currentPage = 1;
        this.optionArr = newOption.map((item) => {
          return { ...item, selected: this.selectAll || this.value.includes(item[this.props['value'] || 'value']) }
        });
        this.filterArr = this.optionArr
      },
      deep: true,
      immediate: true,
    }
  },

  methods: {
    deleteTag(item) {
      if (this.disabled) return;
      this.optionArr.find((opt) => opt[this.listKey] === item[this.listKey]).selected  = false;
    },

    handleSearch(str) {
      this.currentPage = 1;
      this.filterArr = []
      if (str) {
        this.filterArr = this.optionArr.filter(opt =>  opt[this.listKey].includes(str) || opt[this.listVal].includes(str))
      } else {
        this.filterArr = this.optionArr
      }
    },

    /* 点击输入框，切换选择框的筛选条件 */
    clickSelectInput() {
      if (this.disabled) return
      this.visible = !this.visible
    },

    selectOptionClick(item) {
      // 单击check
      item.selected = !item.selected
      this.optionArr.find(
        (opt) => opt[this.listKey] === item[this.listKey]
      ).selected = item.selected
    },

    checkAll() {
      const filterSelectedArr = this.filterArr.filter(opt => opt.selected);
      if (filterSelectedArr.length === this.filterArr.length) {
        this.toggleCheckAll = false
      } else {
        this.toggleCheckAll = true
      }
      this.handleCheckAll()
    },

    cancelCheckAll() {
      // 取消全选
      if (this.disabled) return
      this.toggleCheckAll = false
      this.handleCheckAll()
    },

    handleCheckAll() {
      this.filterArr.forEach((item) => {
        this.optionArr.forEach((opt) => {
          if (opt[this.listKey] === item[this.listKey]) {
            opt.selected = this.toggleCheckAll
          }
        })
      })
    },

    // 展示列数，支持1-4列
    formatColumn() {
      const arr = [{ width: '100%' }, { width: '49%' }, { width: '32%' }];
      return arr[this.column - 1] || { width: '24%' };
    },
  },
}
</script>
<style lang="less" scoped>
.com-select {
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  cursor: pointer;
  background: #ffffff;
  min-width: 230px;
  min-height: 32px;
  .com-select-input {
    display: flex;
    align-items: center;
    .one {
      width: 10px;
    }
    .two {
      flex: 1;
      line-height: 29px;
      padding: 0 0 1px 0;
      /deep/ .el-tag {
        background-color: #f4f4f5;
        border-color: #e9e9eb;
        color: #909399;
        margin-right: 6px;
      }
      /deep/ .el-tag__close.el-icon-close {
        background-color: #c0c4cc;
      }
    }
    .three {
      width: 30px;
    }
  }
}
.is-disabeled {
  cursor: not-allowed;
  background-color: #f5f7fa;
  border-color: #e4e7ed;
}
.el-select-dropdown {
  height: 280px;
  padding: 10px;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  box-shadow: 1px 2px 6px 0px #7d7d7d;
  box-sizing: border-box;
  cursor: default;
  .com-select-body {
    margin-top: 6px;
    height: 178px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    .com-option {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #797d82;
      border: 1px solid #dcdfe6;
      height: 32px;
      line-height: 32px;
      box-sizing: border-box;
      position: relative;
      text-align: center;
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        border-color: #409eff;
        color: #409eff;
      }
    }
    // 选中样式
    .selected {
      border-color: #409eff;
      &::after {
        content: '';
        width: 19px;
        height: 19px;
        background: url('~@packages/assets/image/check.png') no-repeat 0 0;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    .com-select-nodata {
      color: #c0c4cc;
      width: 100%;
      text-align: center;
    }
  }
  // 分页样式
  .com-footer-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
