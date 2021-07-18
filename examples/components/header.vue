<style lang="less" scoped>
.headerWrapper {
  height: 60px;
}

#v3-banner {
  background-color: #409eff;
  min-height: 30px;
  padding: 5px 60px;
  z-index: 19;
  box-sizing: border-box;
  text-align: center;
  color: #eee;
}

#v3-banner a {
  color: #fff;
  font-weight: bold;
}

.header {
  height: 60px;
  background-color: #fff;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 60px;
  z-index: 100;
  position: relative;

  .container {
    height: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdfe6;
  }

  .nav-lang-spe {
    color: #888;
  }

  h1 {
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: normal;

    a {
      color: #333;
      text-decoration: none;
      display: block;
    }

    span {
      font-size: 12px;
      display: inline-block;
      width: 34px;
      height: 18px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      text-align: center;
      line-height: 18px;
      vertical-align: middle;
      margin-left: 10px;
      border-radius: 3px;
    }
  }

  .nav {
    float: right;
    height: 100%;
    line-height: 60px;
    background: transparent;
    padding: 0;
    margin: 0;
    &::before,
    &::after {
      display: table;
      content: "";
    }
    &::after {
      clear: both;
    }
  }

  .nav-logo,
  .nav-logo-small {
    vertical-align: sub;
    position: absolute;
  }

  .nav-logo-small {
    display: none;
  }

  .nav-item {
    margin: 0;
    float: left;
    list-style: none;
    position: relative;
    cursor: pointer;

    &.nav-algolia-search {
      cursor: default;
    }

    &.lang-item {
      cursor: default;
      margin-left: 34px;

      span {
        opacity: 0.8;
      }
    }

    a {
      text-decoration: none;
      color: #69db7c;
      opacity: 0.5;
      display: block;
      padding: 0 22px;

      &.active,
      &:hover {
        opacity: 1;
      }

      &.active::after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: calc(50% - 15px);
        width: 30px;
        height: 2px;
        background: #69db7c;
      }
    }
  }
}

@media (max-width: 850px) {
  .header {
    .nav-logo {
      display: none;
    }
    .nav-logo-small {
      display: inline-block;
    }
    .nav-item {
      margin-left: 6px;

      a {
        padding: 0 5px;
      }
    }
    .nav-theme-switch,
    .nav-algolia-search {
      display: none;
    }
  }
}

@media (max-width: 700px) {
  .header {
    .container {
      padding: 0 12px;
    }
    .nav-item {
      a {
        font-size: 12px;
        vertical-align: top;
      }
    }
  }
}
</style>
<template>
  <div class="headerWrapper">
    <header class="header" ref="header">
      <div class="container">
        <h1>
          <router-link to="/component">
            <!-- logo -->
            <slot>
              <img
                src="../assets/logo.png"
                alt="element-logo"
                class="nav-logo"
              />
            </slot>
          </router-link>
        </h1>

        <!-- nav -->
        <ul class="nav">
          <li class="nav-item nav-algolia-search" v-show="isComponentPage">
            <algolia-search></algolia-search>
          </li>
          <!-- <li class="nav-item">
            <router-link active-class="active" :to="`/about`"
              >{{ langConfig.guide }}
            </router-link>
          </li> -->
          <li class="nav-item">
            <router-link active-class="active" to="/component">组件</router-link>
          </li>
          <!-- <li class="nav-item nav-item-theme">
            <router-link active-class="active" to="/template">模板</router-link>
          </li> -->
          <li class="nav-item">
            <router-link active-class="active" to="/d3js">D3.js(V7.0)</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" to="/resource" exact>Github</router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
import AlgoliaSearch from './search.vue';

export default {
  data() {
    return {
      active: '',
      versions: [],
      verDropdownVisible: true,
      langDropdownVisible: true,
      langs: {
        'zh-CN': '中文',
        'en-US': 'English',
        es: 'Español',
        'fr-FR': 'Français',
      },
    };
  },

  components: {
    AlgoliaSearch,
  },

  computed: {
    lang() {
      return 'zh-CN';
    },
    // langConfig() {
    //   return compoLang.filter((config) => config.lang === this.lang)[0][
    //     'header'
    //   ];
    // },
    isComponentPage() {
      return /component/.test(this.$route.path);
    },
    isHome() {
      return /^home/.test(this.$route.name);
    },
  },
  updated() {
    // console.log(this.$route);
  },
  methods: {},
};
</script>
