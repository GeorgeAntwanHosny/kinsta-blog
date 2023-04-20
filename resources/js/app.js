import "./bootstrap";
import "../css/app.css";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import {InertiaProgress} from "@inertiajs/progress";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

createInertiaApp({
    title: (title) => `my-app ${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup: function ({el, app, props, plugin}) {
        return createApp({render: () => h(app, props)})
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
});
InertiaProgress.init({ color: "#000000", showSpinner: true });

