import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

//按钮
import { Button } from 'vant';
Vue.use(Button);

//Tabbar
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

//Skeleton 骨架屏
import { Skeleton } from 'vant';
Vue.use(Skeleton);

//icon图标
import { Icon } from 'vant';
Vue.use(Icon);

//遮罩层
import { Overlay } from 'vant';
Vue.use(Overlay);