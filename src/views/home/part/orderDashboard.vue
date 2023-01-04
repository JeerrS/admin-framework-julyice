<template>
    <div class="order-dashboard">
        <el-card v-for="item in orderData" :key="item.name" :body-style="{ display: 'flex', padding: 0}">
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{ backgroundColor: item.color }"></i>
            <div class="order">
                <p class="order-value">{{ priceFormat(item.value) }}</p>
                <p class="order-title">{{ item.name }}</p>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'orderDashboard',
    props: {
        orderData: Array
    },
    methods: {
        priceFormat(value) {
            return '¥ ' + value;
        }
    }
};
</script>

<style lang="scss" scoped>
.order-dashboard {
    margin-left: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
        width: 32%;
        margin-bottom: 16px;
        .icon {
            width: 80px;
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: 32px;
            color: white;
        }
        .order {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 16px;
            .order-value {
                margin-top: 0;
                font-size: 30px;
                margin-bottom: 10px;
                line-height: 30px;
                height: 30px;
            }
            .order-title {
                font-size: 14px;
                color: #999;
                text-align: center;
                margin-bottom: 0;
                margin-top: 0;
            }
        }
    }
}
</style>
