import {
    RouteRecordRaw,
    createWebHistory,
    createRouter
} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FilterView from '../views/FilterView.vue';
import FilterView2 from '../views/FilterView2.vue';
import AboutView from '../views/AboutView.vue';


const routes: RouteRecordRaw[] = [{
        path: '/',
        name: 'Home',
        component: HomeView


    },
    {
        path: '/filter',
        name: 'Filter',
        component: FilterView2
    },

    {
        path: '/About',
        name: 'About',
        component: AboutView
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;