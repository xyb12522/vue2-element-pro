import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 测试打包后的element-pro
import elementpro from '../lib/vue2-element-pro.umd.js';
import '../lib/vue2-element-pro.css';
Vue.use(elementpro);

// 本地引入测试组件
// import elementpro from '../src/index.js';
// Vue.use(elementpro);
// console.log(1111, elementpro);

// 引入highlight.js
import hljs from 'highlight.js';
Vue.use(hljs.vuePlugin);
import 'highlight.js/styles/github.css';
// import 'highlight.js/styles/default.css';

// 引入全局样式
import '@examples/less/common.less';

// 全局注册代码块样式
Vue.component('ComDemoBlock', () => import('./components/demo-block.vue'));
Vue.component('FooterNav', () => import('./components/footer-nav.vue'));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
