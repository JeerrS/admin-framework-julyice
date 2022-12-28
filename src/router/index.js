import Vue from 'vue';
import VueRouter from 'vue-router';
import mainIndex from '@/views/mainIndex.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: mainIndex
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
