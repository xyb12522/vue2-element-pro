<template>
  <el-form
    ref="form"
    class="com-form-pro"
    :model="form"
    v-bind="$attrs"
    label-width="126px"
    label-position="left"
  >
    <div class="com-form-pro-body">
      <div v-for="item in formItems" :key="item.key" class="com-form-pro-item">
        <el-form-item
          v-if="item._isShow"
          :rules="item._rule"
          :prop="item.key"
          :label="item.title"
          :class="{ 'twoRows' : getLabelLen(item.title) > 16 }"
        >
          <component
            :is="item.type"
            v-model="form[item.key]"
            :options="item.options"
            v-bind="item.props"
          />
        </el-form-item>
      </div>
      <slot></slot>
      <el-collapse-transition>
        <div v-show="toggleFormItems.length>0 && showSearch">
          <div v-for="item in toggleFormItems" :key="item.key" class="com-form-pro-item">
            <el-form-item
              v-if="item._isShow"
              :rules="item._rule"
              :prop="item.key"
              :label="item.title"
              :class="{ 'twoRows' : getLabelLen(item.title) > 16 }"
            >
              <component
                :is="item.type"
                v-model="form[item.key]"
                :options="item.options"
                v-bind="item.props"
              />
            </el-form-item>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <div class="com-form-pro-button" :style="formItems.length===1 ? {'marginTop': '-52px'} : {}">
      <!-- 表单字段超过4个显示高级搜索 -->
      <div v-if="toggleFormItems.length>0" class="com-form-pro-button-text" @click="showSearch=!showSearch">
        <i :class="`el-icon-arrow-${showSearch ? 'up' : 'down'} el-icon--right`"></i>
        {{ showSearch ? '普通检索' : '高级检索' }}
      </div>
      <el-button type="primary" icon="el-icon-search" size="small" @click="submit">
        {{ submitText }}
      </el-button>
      <el-button icon="el-icon-refresh-left" size="small" @click="reset">
        {{ resetText }}
      </el-button>
    </div>
  </el-form>
</template>
 
<script>
import ComponentsMap from './components-map.js';
import TheSelect from './theselect';
import { isFunction } from 'element-ui/src/utils/types';
export default {
  name: 'FormPro',
  components: { TheSelect },
  props: {
    formFields: {
      type: Array,
      default: () => []
    },
    submitText: {
      type: String,
      default: '查询',
    },
    resetText: {
      type: String,
      default: '重置',
    },
  },
  data() {
    return {
      form: this.initForm(),
      showSearch: false
    };
  },
  computed: {
    // 前4个不隐藏
    formItems() {
      return this.formFields.slice(0, 4).map(item => this.formatFormItem(item, this.form));
    },
    // 超过4个展示高级搜索，可以展示/隐藏
    toggleFormItems() {
      if (this.formFields.length > 4) {
        return this.formFields.slice(4).map(item => this.formatFormItem(item, this.form));
      } else {
        return [];
      }
    }
  },
  watch: {
    formFields: {
      handler() {
        this.form = this.initForm();
      },
      deep: true
    }
  },
  methods: {
    initForm() {
      const form = {};
      const map = {
        input: '',
        inputNumber: undefined
      };
      this.formFields.forEach(item => {
        if (item.defaultValue !== undefined) {
          form[item.key] = item.defaultValue;
        } else {
          // 赋值对应默认值
          form[item.key] = map[item.type || 'input'];
        }
      });
      return form;
    },
    submit() {
      this.$refs.form.validate((valid) => {
        // 传回提交数据
        this.$emit('submit', this.form, valid);
      });
    },
    reset() {
      this.$refs.form.resetFields();
    },
    clear() {
      this.$refs.form.clearValidate();
    },
    setForm(form) {
      for (const key in form) {
        this.form[key] = form[key];
      }
    },
    formatFormItem(config, form) {
      const item = { ...config };
      // 计算组件真实对应的名称并传入一些默认配置
      const res = ComponentsMap[item.type || 'input'];
      item.type = res.component;
      item.props = Object.assign({ placeholder: '请输入' + item.title }, res.props, item.props);
 
      // 处理联动
      isFunction(item.dealFn) && item.dealFn(form, this.formFields);
      // 处理是否展示
      item._isShow = isFunction(item.isShow) ? !!item.isShow(form) : true;
 
      // 处理校验
      item._rule = this.getRule(item);
 
      return item;
    },
    getRule(item) {
      const { rule, isRequired, type, title } = item;
      const InputMap = ['el-input', 'el-input-number'];
      if (typeof isRequired === 'boolean' && isRequired) {
        const isInput = InputMap.indexOf(type) > -1;
        return {
          required: true,
          message: `${title}不能为空`,
          trigger: `${isInput ? 'blur' : 'change'}`
        };
      } else if (isRequired) {
        return rule;
      } else {
        return null;
      }
    },
    /** 汉字占两个字符，英文字母占一个字符。*/
    getLabelLen(str) {
      let len = 0;
      for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) {
          len += 2;
        } else {
          len++;
        }
      }
      return len;
    }
  }
};
</script>
 
<style lang="less" scoped>
  .com-form-pro {
    padding: 20px;
    background: white;
    // 重置element样式
    /deep/ .el-form-item {
      margin-bottom: 20px;
    }
    /deep/ .el-form-item__label {
      line-height: 38px;
    }
    /deep/ .el-form-item__content {
      line-height: 38px;
    }
    /deep/ .el-input__inner {
      height: 38px;
      line-height: 38px;
    }
    /deep/ input {
      vertical-align: unset;
    }
    /deep/ .el-select {
      width: 100%;
    }
    /deep/ .el-range-editor.el-input__inner {
      width: 100%;
    }
    /deep/ .el-date-editor.el-input {
      width: 100%;
    }
    /deep/ .el-button--small, .el-button--small.is-round {
      padding: 8px 10px;
    }
    /deep/ .el-button--small {
      font-size: 14px;
    }
    .com-form-pro-body {
      .com-form-pro-item {
        box-sizing: border-box;
        display: inline-block;
        width: 50%;
        // 奇数
        &:nth-child(odd) {
          padding-right: 25px;
        }
        // 偶数
        &:nth-child(even) {
          padding-left: 25px;
        }
      }
      .twoRows {
        /deep/ .el-form-item__label {
          line-height: unset;
          padding: 5px 12px 0 0;
        }
      }
    }
    .com-form-pro-button {
      text-align: right;
      .com-form-pro-button-text {
        margin-right: 20px;
        display: inline;
        color: #409EFF;
        cursor: pointer;
      }
    }
  }
</style>