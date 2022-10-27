import { createApp } from "vue";
import App from "./App.vue";
import directives from "./directives/";

const app = createApp(App);

// register all directives
directives(App);

app.mount("#app");
