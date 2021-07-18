# vue2-element-pro

二次封装element组件，以及丰富实用的企业后台功能组件

> A Vue.js 2.0 UI Toolkit for Web based on Element-UI.

## 快速开发

1.安装element-pro

```shell
yarn add @vue/element-pro
```

2.使用前，必须确保已经（yarn add element-ui）先引入element-ui

``` js
// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
```

3.引入element-pro

``` js
// 引入element-pro
import ElementPro from "@vue2/element-pro";
import "@vue2/element-pro/lib/element-pro.css";
Vue.use(import ElementPro from "@vue2/element-pro";
);
```

4.组件文档Api
使用文档：<https://>

## Project setup

``` shell
npm install
or
yarn install
```

### Compiles and hot-reloads for development

``` shell
yarn serve
or
npm run serve
```
