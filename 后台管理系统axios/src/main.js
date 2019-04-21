// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
//import VueResource from 'vue-resource'
import axios from 'axios'
import nav from './components/header-nav'
import table from './components/header-table'
import about from './components/about'
import add from './components/add'
import tableXq from './components/table-xq'
import edit from './components/edit'
import login from './components/login'
import zhuce from './components/zhuce'

Vue.config.productionTip = false
Vue.use(VueRouter)
//Vue.use(VueResource)
Vue.prototype.$http=axios
Vue.component(nav.name,nav)
Vue.component(table.name,table)
Vue.component(about.name,about)
Vue.component(login.name,login)
Vue.component(zhuce.name,zhuce)

//设置路由
const router=new VueRouter({
  mode:"history",
  routes:[
    {path: '/',  redirect: '/table' },
    {path:"/login",name:"login",component:login},
    {path:"/zhuce",name:"zhuce",component:zhuce},
    {path:"/table",name:"table",component:table},
    {path:"/about",name:"about",component:about},
    {path:"/add",name:"add",component:add},
    {path:"/table/:id",name:"table/:id",component:tableXq},
    {path:"/edit/:id",name:"edit/:id",component:edit}
  ]
})

/*
router.beforeEach((to, from, next) => {
  console.log('navigation-guards');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  const nextRoute = ['zhuce', 'table', 'about', 'add', 'table/:id', 'edit/:id'];
  let isLogin = global.isLogin;  // 是否登录
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {
    if (!isLogin) {
      console.log('what fuck');
      router.push({ name: 'login' })
    }
  }
  // 已登录状态；当路由到login时，跳转至home
  if (to.name === 'login') {
    if (isLogin) {
      router.push({ name: 'table' });
    }
  }
  next();
});
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
