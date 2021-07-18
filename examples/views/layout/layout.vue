<template>
  <div class="lay-cc">
    <com-demo-block>
      <button slot="source">测试</button>
      <!-- <highlight-code slot="highlight" lang="vue">
        <template>
          <com-back-button></com-back-button>
        </template>
      </highlight-code>
      Code Block -->
      <!-- <highlightjs slot="highlight" autodetect :code="code" /> -->
      <highlightjs slot="highlight" language="xml" :code="code" />
    </com-demo-block>
    <select-pro
      v-model="value"
      :options="arr"
      :column="3"
    ></select-pro>
    <form-pro :formFields="formList" @submit="query"></form-pro>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: `
        <template>
          <com-back-button></com-back-button>
        </template>
      `,
      value: ['AAA1'],
      arr: [],
      formList: [
        { key: 'name', title: '测试名字' },
        { key: 'class', title: '班级', type: 'select', options: [
          { label: '三(1)班', value: '1' },
          { label: '三(2)班', value: '2' },
          { label: '三(3)班', value: '3' }
        ] },
        { key: 'date', title: '日期', type: 'datetime' },
        { key: 'num', title: '第几名', type: 'inputNumber' },
      ]
    };
  },
  created() {
    for (let index = 0; index < 26; index++) {
      this.arr.push({ label: '让我看看11' + index, value: 'AAA' + index });
    }
  },
  methods: {
    query(...v) {
      console.log('form==>', v);
    }
  }
};
</script>
