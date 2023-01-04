<template>
    <el-row>
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <user-card></user-card>
                <data-table
                    :columns="tableColumns"
                    :data="tableData"
                ></data-table>
            </div>
        </el-col>
        <el-col :span="16">
            <div class="grid-content bg-purple-light">
                <order-dashboard
                    :order-data="orderData"
                ></order-dashboard>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import UserCard from '@/views/home/part/userCard.vue';
import DataTable from '@/views/home/part/dataTable.vue';
import OrderDashboard from '@/views/home/part/orderDashboard.vue';

export default {
    name: 'home',
    components: {
        OrderDashboard,
        DataTable,
        UserCard
    },
    data() {
        return {
            tableData: [
                {
                    name: 'Test',
                    value: 123
                }
            ],
            tableColumns: [
                {
                    prop: 'name',
                    label: '名称'
                },
                {
                    prop: 'value',
                    label: '价格'
                }
            ],
            orderData: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
.el-card+.el-card {
    margin-top: 16px;
}
</style>
