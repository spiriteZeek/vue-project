// import './assets/main.css'

import { createApp } from 'vue'
import Main from './Main.vue'
import ChildComp from '@/component/Child.vue'

const app = createApp(Main)
//全局注册
app.component('ChildComp', ChildComp);
app.mount('#app')
