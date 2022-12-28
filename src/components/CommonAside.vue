<template>
    <el-menu style="height: 100vh">
        <el-menu-item
            v-for="item in menuData"
            :key="item.name"
            :index="item.name"
            @click="handleClickMenuItem(item)">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: 'CommonAside',
    data() {
        const menuData = [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home'
            },
            {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon: 'user'
            }
        ];
        return {
            menuData
        };
    },
    methods: {
        handleClickMenuItem(menu) {
            if (this.$route.path !== menu.path &&
                !(this.$route.path === '/home' && menu.path === '/')) {
                this.$router.push(menu.path);
            }
        }
    }
};
</script>

<style scoped>

</style>
