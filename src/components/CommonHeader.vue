<template>
    <div class="header-container">
        <div class="header-content--left">
            <el-button class="header-menu" icon="el-icon-menu" type="text" @click="handleCollapseAside"></el-button>
        </div>
        <div class="header-content--right">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <i class="header-user el-icon-user"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonHeader',
    methods: {
        handleCollapseAside() {
            this.$store.commit('CollapseMenu')
        }
    }
};
</script>

<style lang="scss" scoped>
.header-container {
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
.el-dropdown-link {
    cursor: pointer;
}
.header-menu {
    color: white;
    font-size: 24px;
}
.header-user {
    width: 24px;
    height: 24px;
    font-size: 24px;
    border-radius: 50%;
    color: white;
}
</style>
