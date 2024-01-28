// import './assets/main.css'

import { createApp } from 'vue'
import Main from './Main2.vue'
import ChildComp from '@/component/Child.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';


const app = createApp(Main)
//全局注册
app.use(ElementPlus);
app.component('ChildComp', ChildComp);
app.mount('#app')
