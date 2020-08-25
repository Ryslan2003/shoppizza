import router from "./router";
import App from "./App";
require('./bootstrap');

window.Vue = require('vue');


const app = new Vue({
    render: h => h(App),
    router
}).$mount('#app');
