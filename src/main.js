import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./services/api";
import VueAxios from "vue-axios";

import "./styles/styles.scss";
const app = createApp(App);

app.use(router).use(store).use(VueAxios, axios);

app.mount("#app");
