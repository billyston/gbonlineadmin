import Vue from 'vue'
import App from './App.vue'

// Use the event bus
window.EventBus                             = new Vue();

// Define and use the axios
window.axios                                = require( 'axios' );

// Import the and use the vue-router and the routes
import VueRouter                            from "vue-router";
import routes                               from "./routes";
Vue.use( VueRouter );

import datePicker from 'vue-bootstrap-datetimepicker';
Vue.use( datePicker );

// Import the iziToast function and use it
import VueIziToast                          from 'vue-izitoast'
import                                      "izitoast/dist/css/iziToast.css"
Vue.use( VueIziToast );

// Import the and use the vue-meta package
import VueMeta                              from "vue-meta";
Vue.use( VueMeta );

// Import the balloon-css
import 'balloon-css';

Vue.config.productionTip = false;

const router = new VueRouter(
{
    mode: "history",
    routes
});

new Vue(
{
    render: h => h( App ),
    router,
}).$mount('#app');