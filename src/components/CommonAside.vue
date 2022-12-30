<template>
    <el-menu
        style=" height: calc(100vh - 60px)"
        :collapse="isCollapse"
    >
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
    computed: {
        isCollapse() {
            return this.$store.state.isCollapse;
        }
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

<style lang="scss" scoped>
.el-menu-item:hover {
    background-color: #333;
    color: white;
    > i {
        color: white;
    }
}
.el-tooltip:hover {
    > i {
        color: white;
    }
}
</style>
