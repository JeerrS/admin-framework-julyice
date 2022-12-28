<template>
    <el-container>
        <el-aside width="200px">
            <common-aside></common-aside>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue';

export default {
    name: 'mainIndex',
    components: {
        CommonAside
    }
};
</script>

<style lang="scss" scoped>

</style>
