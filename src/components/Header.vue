<template>
  <div style="height:70px;min-width:1000px;line-height: 70px; border-bottom: 3px solid #ccc; flex: 1;display: flex">
    <div style="padding-left: 30px;flex: 1; font-weight: bold; color: #545c64;font-family: 'Microsoft YaHei UI';font-size: x-large">BOM 管理系统
    </div>
    <div style="padding-right: 30px;">
      <el-button link="true" id="header_button">首页</el-button>
      <el-button link="true" id="header_button">协同</el-button>
      <el-button link="true" id="header_button">调整</el-button>
      <el-button link="true" id="header_button">订单</el-button>
      <el-button link="true" id="header_button">个人中心</el-button>
    </div>
    <div style="padding-right: 10px;">
      <el-dropdown>
        <el-button type="info" style="width: 80px;margin-top: 20px;font-size: small;background-color: #545c64;">
          <el-icon class="el-icon--right" style="margin: auto;font-style: initial;">账号管理</el-icon>
        </el-button>
        <arrow-down/>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>账号信息</el-dropdown-item>
           <!--这里提示账号信息，不自动关闭 -->
            <el-dropdown-item>
              <router-link to="/"> 退出登录</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

export default {
  name: "Header",
}
</script>

<style scoped>


#header_button {
  /*顶部按钮*/
  margin-left: 50px;
  font-size: large;
  font-family: 黑体;

}

</style>