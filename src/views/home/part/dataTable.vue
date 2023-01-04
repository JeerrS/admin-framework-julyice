<template>
    <el-card style="min-width: 275px">
        <el-table :data="data" style="width: 100%">
            <el-table-column
                v-for="(column, index) in columns"
                :key="index"
                :prop="column.prop"
                :label="column.label">
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {
    name: 'dataTable',
    props: {
        data: Array,
        columns: Array
    }
};
</script>

<style scoped>

</style>
