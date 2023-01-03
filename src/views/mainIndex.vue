<template>
    <el-container>
        <el-aside :width="isCollapse ? '65px' : '200px'">
            <div class="header-title">
                {{ isCollapse ? '' : '后台管理系统' }}
            </div>
            <common-aside></common-aside>
        </el-aside>
        <el-container>
            <el-header>
                <common-header></common-header>
            </el-header>
            <el-main>
                <home></home>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
import Home from '@/views/home/home.vue';

export default {
    name: 'mainIndex',
    components: {
        Home,
        CommonHeader,
        CommonAside
    },
    computed: {
        isCollapse() {
            return this.$store.state.isCollapse;
        }
    },
};
</script>

<style lang="scss" scoped>
.header-title {
    height: 60px;
    background-color: #333;
    color: white;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
}
.el-header {
    padding: 0;
}
</style>
