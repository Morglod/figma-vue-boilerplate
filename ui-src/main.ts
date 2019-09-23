import Vue from 'vue';

import './figma-ds/lib.scss';
import App from './App.vue';

import { initApi } from './api';

Vue.config.productionTip = false;

(async () => {
    await initApi();

    new Vue({
        render: h => h(App),
    }).$mount('#app');
})();