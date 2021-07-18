import TablePro from './src/table';

/* istanbul ignore next */
TablePro.install = function(Vue) {
  Vue.component(TablePro.name, TablePro);
};

export default TablePro;