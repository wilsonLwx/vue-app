<template>
  <el-container class="home-container">
    <!-- 页面头部区 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt="" />
        <span>后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menueList"
            :key="item.id"
          >
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id + '']"></i>
              <!-- 文本 -->
              <span>{{ item.optionName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/' + item.path[index]"
              v-for="(subitem, index) in item.subOptionNames"
              :key="item.id + '-' + index"
              @click="saveNavState('/' + item.path[index])"
            >
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{ subitem }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体区 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import gql from "graphql-tag";
const userLogin = gql`
  query initLeftSideOptions {
    initLeftSideOptions {
      options {
        id
        path
        optionName
        subOptionNames
      }
    }
  }
`;

export default {
  data() {
    return {
      menueList: [],
      iconsObj: {
        0: "iconfont icon-users",
        1: "iconfont icon-tijikongjian",
        2: "iconfont icon-shangpingouwudai2",
        3: "iconfont icon-danju-tianchong ",
        4: "iconfont icon-baobiao",
      },
      // 是否折叠
      isCollapse: false,
      sideWidth: "200px",
      activePath: "",
    };
  },
  created() {
    this.getMenueList(),
      (this.activePath = window.sessionStorage.getItem("activePath"));
  },
  methods: {
    // 退出
    logout() {
      // 清空token
      window.localStorage.clear();
      this.$router.push("/login");
    },
    // 获取左侧菜单
    async getMenueList() {
      await this.$apollo
        .query({
          query: userLogin,
        })
        .then((res) => {
          this.menueList = res.data.initLeftSideOptions.options;
        });
    },
    // 切换菜单折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    // 保存链接的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem("activePath", activePath),
        (this.activePath = activePath);
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #333744;
}

.el-main {
  background-color: #eaedf1;
}

.el-menu {
  border-right: none;
}

.iconfont {
  margin-right: 10px;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
