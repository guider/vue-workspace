<template>
  <div id="app" style="height: 100%">
    <!-- main content -->
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
      <transition
        @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
        :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view class="router-view"></router-view>
      </transition>

      <tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="!isTabbarDemo" slot="bottom">
        <tabbar-item :link="{path:'/'}" :selected="route.path === '/'">
          <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>
          <span slot="label">Home</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/demo'}" :selected="isDemo" badge="9">
          <span class="demo-icon-22" slot="icon">&#xe633;</span>
          <span slot="label"><span v-if="componentName" class="vux-demo-tabbar-component">{{componentName}}</span><span v-else>Demos</span></span>
        </tabbar-item>
        <tabbar-item :link="{path:'/project/donate'}" :selected="route.path === '/project/donate'" show-dot>
          <span class="demo-icon-22" slot="icon">&#xe630;</span>
          <span slot="label">Donate</span>
        </tabbar-item>
      </tabbar>

    </view-box>

  </div>
</template>

<script>
  import {
    Radio,
    Group,
    Cell,
    Badge,
    Drawer,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
    TransferDom
  } from 'vux'

  export default {
    components: {
      Radio,
      Group,
      Cell,
      Badge,
      Drawer,
      ButtonTab,
      ButtonTabItem,
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
      Loading,
      Actionsheet
    },
    name: 'app'
    , data() {
      return {
        showMenu: false,
        menus: {
          'language.noop': '<span class="menu-title">Language</span>',
          'zh-CN': '中文',
          'en': 'English'
        },
        drawerVisibility: false,
        showMode: 'push',
        showModeValue: 'push',
        showPlacement: 'left',
        showPlacementValue: 'left'
      }
    },
    computed: {
      computed: {
        isShowBar() {
          if (/component/.test(this.path)) {
            return true
          }
          return false
        },
        leftOptions() {
          return {
            showBack: this.route.path !== '/'
          }
        },
        rightOptions() {
          return {
            showMore: true
          }
        },
        headerTransition() {
          return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
        },
        componentName() {
          if (this.route.path) {
            const parts = this.route.path.split('/')
            if (/component/.test(this.route.path) && parts[2]) return parts[2]
          }
        },
        isDemo() {
          return /component|demo/.test(this.route.path)
        },
        isTabbarDemo() {
          return /tabbar/.test(this.route.path)
        },
        title() {
          if (this.route.path === '/') return 'Home'
          if (this.route.path === '/project/donate') return 'Donate'
          if (this.route.path === '/demo') return 'Demo list'
          return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
        }
      },
    }
  }
</script>

<style lang="less">
  @import "~vux/src/styles/reset.less";
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
</style>
