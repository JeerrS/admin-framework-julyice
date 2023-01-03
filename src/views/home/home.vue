<template>
    <el-row>
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <user-card></user-card>
            </div>
        </el-col>
        <el-col :span="16">
            <div class="grid-content bg-purple-light"></div>
        </el-col>
    </el-row>
</template>

<script>
import UserCard from '@/views/home/part/userCard.vue';

export default {
    name: 'home',
    components: {UserCard}
};
</script>

<style scoped>

</style>
