import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入Vant组件库
import Vant from 'vant';
//导入Vant组件库样式
import 'vant/lib/index.css';
//加载want组件库
import '@/utils/mock'
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
