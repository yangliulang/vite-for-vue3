import { createApp } from "vue";
import Store from "./store";
import Router from "./router";
import App from "./App.vue";
import "./test";
import "./index.css";

const app = createApp(App);
app.component("hello-v", {
  template: "<p>hello</p>"
});
app.use(Store).use(Router);
app.mount("#app");
