<template >
  <div id="aside_style">
    <!--  默认选中  default-active="1"-->
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        default-active="1"
        text-color="#fff"
        style="flex: 1;height: auto;text-align:center;"
    >
      <el-menu-item index="1" class="menuItem">
        <el-icon>
          <!--          <icon-menu/>-->
        </el-icon>
        <span>设备处理</span>
      </el-menu-item>
      <el-menu-item index="2" class="menuItem">
        <el-icon>
          <!--          <icon-menu/>-->
        </el-icon>
        <span>结构调整</span>
      </el-menu-item>
      <el-menu-item index="3" class="menuItem">
        <template #title>
          <el-icon>
            <!--          <icon-menu/>-->
          </el-icon>
          <span>算法维护</span>
        </template>
      </el-menu-item>
      <el-sub-menu index="4">
        <template #title >
          <el-icon>
          </el-icon>
          <span  class="subMenuItem">计算属性</span>
        </template>

        <el-menu-item index="4-1" class="childMenuItem">模板语法</el-menu-item>
        <el-menu-item index="4-2" class="childMenuItem">条件渲染</el-menu-item>
        <el-menu-item index="4-3" class="childMenuItem">生命周期</el-menu-item>
        <el-menu-item index="4-4" class="childMenuItem">模板引用</el-menu-item>
      </el-sub-menu>

    </el-menu>
  </div>
</template>

<script>
import {ref} from 'vue';
import {useRouter, useRoute} from 'vue-router'

export default {
  name: "Aside",
  components: {},
  setup() {

    return {}
  }
}
</script>

<style scoped>
#aside_style {
  padding-left: 12px;
  padding-top: 12px;
  display: flex;
  flex: 1;
  height: 100%;
  width: 250px;

}

.menuItem,.subMenuItem {
  text-align: center;
  color: white;
  margin-bottom: 15px;
  margin-left: 15px;
  font-size: medium;
  letter-spacing: 5px;
  font-family: "等线";
}
.subMenuItem{
  font-size: 16px;
}


.childMenuItem {
  text-align: center;
  color: #cccccc;
  margin-bottom: 10px;
  margin-left: 28px;
  font-size: small;
  letter-spacing: 5px;
  font-family: "等线";
}


</style>