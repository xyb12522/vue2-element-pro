export default {
  // 默认输入类型
  input: {
    // 对应到 Element 中的组件 tag
    component: 'el-input',
    // 传递给 Element 组件的默认 props
    props: {
      clearable: true,
    }
  },
  // 数字输入框
  inputNumber: {
    component: 'el-input-number',
    props: {
      clearable: true
    }
  },
  datetime: {
    component: 'el-date-picker',
    props: {
      type: 'datetime',
      valueFormat: 'timestamp'
    }
  },
  select: {
    component: 'the-select',
    props: {
      clearable: true
    }
  },
};