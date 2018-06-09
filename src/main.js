// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VUeResource from 'vue-resource'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

// import './common/stylus/index'
// import './common/stylus/mixin'

Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(VUeResource)

/* eslint-disable no-new */
const router = new VueRouter({
	linkActiveClass: 'active',
	mode: 'history',
	routes: [
		{
			path: '/',
			component: App,
		    redirect: '/goods',
			children:[
				{ 
					path: '/goods', 
					component: goods,
				},
				{ 
					path: '/ratings', 
					component: ratings,
				},
				{ 
					path: '/seller', 
					component: seller,
				},
			]
		},
	]
})
const app = new Vue({
  router,
  // render: h => h(App)
}).$mount('#app')