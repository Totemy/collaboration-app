import { createApp } from "vue";
import App from "./App.vue";
import directives from "./directives/";

const app = createApp(App);

// register all directives
directives(app);

app.mount("#app");
