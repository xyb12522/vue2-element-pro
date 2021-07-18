<template>
  <el-table
    :data="data"
    style="width: 100%"
    class="ComTable"
    v-bind="$attrs"
    v-on="$listeners"
    @select="$comSelect"
    @select-all="$comSelect">
    <el-table-column
      v-if="checkbox"
      type="selection"
      :selectable="selectable"
      width="50"
      :fixed="showFixed"></el-table-column>
    <el-table-column v-if="showExpand" type="expand" :fixed="showFixed">
      <template #default="scope">
        <slot v-bind="scope" name="expand"></slot>
      </template>
    </el-table-column>
    <el-table-column
      v-for="(item, index) in column"
      :key="'otable' + index"
      :prop="`${Object.keys(item)[0]}`"
      :label="item[Object.keys(item)[0]]"
      :width="item.width || ''"
      :min-width="item.minWidth || ''"
      :formatter="item.formatter"
      :align="item.align"
      :show-overflow-tooltip="!!!item.noshowTooltip">
      <template v-if="isShowHeader(Object.keys(item)[0])" #header="scope">
        <slot v-bind="scope" :name="Object.keys(item)[0] + 'Header'"></slot>
      </template>
      <template v-if="isShowSlots(Object.keys(item)[0])" #default="scope">
        <slot v-bind="scope" :name="Object.keys(item)[0]"></slot>
        <!--<slot v-if="item[Object.keys(item)[0]] === column[index][Object.keys(item)[0]]" v-bind="scope" :name="Object.keys(item)[0]"></slot>-->
      </template>
    </el-table-column>
    <!-- 操作列 -->
    <el-table-column
      v-if="showOperation"
      label="操作"
      :min-width="operationWidth"
      :align="operationAlign">
      <template #default="scope">
        <slot v-bind="scope"></slot>
      </template>
    </el-table-column>
    <div slot="empty">
      <img :src="require('@packages/assets/image/nodatatable.png')" />
      <span>暂无数据</span>
    </div>
  </el-table>
</template>

<script>
export default {
  name: 'TablePro',
  props: {
    // 表单数据
    data: {
      type: Array,
      default: () => ([])
    },
    // 表单列内容
    column: {
      type: Array,
      default: () => ([])
    },
    // 是否具备展开列
    showExpand: {
      type: Boolean,
      default: false
    },
    showFixed: {
      type: Boolean,
      default: true
    },
    // 是否展示checkbox
    checkbox: {
      type: Boolean,
      default: false
    },
    // 设置操作项宽度
    operationWidth: {
      type: String,
      default: 'auto'
    },
    showOperation: {
      type: Boolean,
      default: false
    },
    showSlots: {
      type: Array,
      default: () => ([])
    },
    showHeader: {
      type: Array,
      default: () => ([])
    },
    // 多选框选择规则
    selectable: {
      type: Function,
      default: () => ([])
    },
    // 操作列对齐方式
    operationAlign: {
      type: String,
      default: 'left'
    }
  },
  methods: {
    // 将选中的状态值抛出去接收
    $comSelect(selectData) {
      if (!this.checkbox) {
        return false;
      }
      this.$emit('onSelect', selectData);
    },
    isShowSlots(val) {
      return this.showSlots.includes(val);
    },
    isShowHeader(val) {
      let bool = false;
      this.showHeader.map(e => {
        if (e.includes(val)) {
          bool = true;
          return false;
        }
      });
      return bool;
    }
  }
};
</script>

<style lang="less">
.ComTable .el-table__empty-text {
  line-height: 14px;
  color: #cccccc;
  div {
    min-height: 100px;
    display: flex;
    flex-direction: column;
    place-items: center;
  }
}
</style>
