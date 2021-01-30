<template>
    <div>
        <!-- 面包屑区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片视图区域 -->
        <el-card>
            <!-- 搜索和添加区域 -->
            <el-row :gutter="20">
                <el-col :span="7">
                    <el-input placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">添加用户</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>
    import gql from "graphql-tag";
    const allUsers = gql `
  query allUsers {
    allUsers {
      id
      username
    }
  }
`;
    export default {
        data() {},
        created() {
            this.getUserList();
        },
        methods: {
            getUserList() {
                this.$apollo.query({
                    query: allUsers,
                }).then(res => {
                    console.log(res.data)
                });
            },
        },
    };
</script>
<style lang="less" scoped>
</style>