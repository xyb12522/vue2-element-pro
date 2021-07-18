// 整个包的入口
import Table from '../packages/table/index.js';
import Form from '../packages/form/index.js';
import Select from '../packages/select/index.js';

const components = [
  Table,
  Form,
  Select
];
// 定义install方法
const install = function(Vue) {
  // 注册所有的组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
// 导出install方法
export default {
  install,
};
