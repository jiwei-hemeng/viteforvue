// @ts-nocheck
import { createApp } from "vue";
// import { createPinia } from "pinia";
import pinia from "@/stores/store"
import App from "@/App.vue";
import router from "@/router";
import "./assets/main.css";
const app = createApp(App);
app.use(pinia)
app.use(router);
app.mount("#app");
