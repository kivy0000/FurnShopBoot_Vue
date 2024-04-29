<template>
  <div class="header_title-style">

    <div class="header_second_title-style">
      <el-icon :size="26">
        <Platform />
      </el-icon>
      Product lifecycle management system
    </div>
    <div style="padding-right: 30px">
      <el-button link class="header_button" @click="goBack" style="margin-right: 25px">
        <el-icon>
          <HomeFilled/>
        </el-icon>
        首页
      </el-button>
      <el-button link class="header_button" style="margin-right: 25px">
        <el-icon>
          <Avatar/>
        </el-icon>
        协同
      </el-button>
      <el-button link class="header_button" style="margin-right: 25px">

        <el-icon><TrendCharts /></el-icon>
        调整
      </el-button>
      <el-button link class="header_button" style="margin-right: 25px">
        <el-icon><List /></el-icon>
        订单
      </el-button>
      <el-button link class="header_button" style="margin-right: 25px">
        <el-icon>
          <Grid/>
        </el-icon>
        其他内容
      </el-button>
    </div>
    <div style="padding-right: 10px;">
      <!--   登录后   -->
      <el-dropdown v-if="true"> <!--  true：应使用验证参数，放在homeview里面，使用inject和provide进行全局调用  -->
        <el-button type="info" style="width: 100px;margin-top: 20px;font-size: small;background-color: #424f63;">
          <el-icon :size="18">
            <User style="margin-right: 2px"/>
          </el-icon>
          个人中心
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>账号信息</el-dropdown-item>
            <!--这里提示账号信息，不自动关闭 -->
            <el-dropdown-item>
              <router-link to="/">退出登录</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!--   登陆前   -->
      <el-dropdown v-else="false">
        <el-button type="info" style="width: 100px;margin-top: 20px;font-size: small;background-color: #424f63;">
          <el-icon class="el-icon--right" style="margin: auto;font-style: initial;font-weight: bold">登录/注册</el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>登录</el-dropdown-item>
            <!--这里提示账号信息，不自动关闭 -->
            <el-dropdown-item>
              <router-link to="/">注册</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import {useRouter, useRoute} from 'vue-router'

export default {
  name: "Header",
  components: [],
  setup() {
    //返回首页
    const goBack = () => {
      /*二级路由写法*/
      router.push('/');
      // router.go(-1);
      //组件写法
    }
    //=this.$router
    var router = useRouter();


    return {
      goBack,
    }
  }
}
</script>

<style scoped>


.header_button {
  /*顶部按钮*/
  margin-left: 50px;
  font-size: large;
  font-family: 黑体;
  font-weight: bold;

}

.header_title-style {
  min-width: 300px;
  height: 70px;
  min-width: 1000px;
  line-height: 70px;
  border-bottom: 3px solid #ccc;
  flex: 1;
  display: flex;
}

.header_second_title-style {
  margin-left: 20px;
  flex: 1;
  font-weight: bold;
  color: #545c64;
  font-family: 'Microsoft YaHei UI';
  font-size: 28px;
}

* el-icon {
  size: "18";
  margin-right: 2px;

}

</style>