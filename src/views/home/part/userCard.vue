<template>
    <el-card style="min-width: 275px">
        <div class="user-card">
            <i class="user-icon el-icon-user"></i>
            <div class="user-info">
                <p class="user-name">Admin</p>
                <p class="user-role">超级管理员</p>
            </div>
        </div>
        <div class="login-info">
            <p>上次登陆时间：<span>2022-12-31</span></p>
            <p>上次登陆地点：<span>未知</span></p>
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'userCard'
};
</script>

<style lang="scss" scoped>
.user-card {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    .user-icon {
        width: 100px;
        height: 100px;
        margin-right: 24px;
        font-size: 100px;
    }
    .user-info {
        .user-name {
            font-size: 32px;
            margin-bottom: 10px;
        }
        .user-role {
            color: #999;
        }
    }
}
.login-info {
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999;
        span {
            color: #666;
            margin-left: 6px;
        }
    }
}
</style>
