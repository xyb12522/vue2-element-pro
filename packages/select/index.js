import SelectPro from './src/select';

/* istanbul ignore next */
SelectPro.install = function(Vue) {
  Vue.component(SelectPro.name, SelectPro);
};

export default SelectPro;