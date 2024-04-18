<template>
  <div id="aside_style">
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        default-active="1"
        text-color="#fff"
        style="flex: 1;height: auto"
    >
      <el-sub-menu index="1" style="margin-top: 15px;">
        <template #title >
          <el-icon>
            <location/>
          </el-icon>
          <span >设备处理</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
        <el-menu-item index="1-4">item one</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2" style="margin-top: 15px;">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>结构调整</span>
        </template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-menu-item index="2-4">item one</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3" style="margin-top: 15px;">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>算法维护</span>
        </template>
        <el-menu-item index="3-1">item one</el-menu-item>
        <el-menu-item index="3-2">item two</el-menu-item>
        <el-menu-item index="3-3">item three</el-menu-item>
        <el-menu-item index="3-4">item one</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4" style="margin-top: 15px;">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>维护建议</span>
        </template>
        <el-menu-item index="4-1">item one</el-menu-item>
        <el-menu-item index="4-2">item two</el-menu-item>
        <el-menu-item index="4-3">item three</el-menu-item>
        <el-menu-item index="4-4">item one</el-menu-item>
      </el-sub-menu>

    </el-menu>
  </div>
</template>

<script>


export default {
  name: "Aside",
  components: {}
}
</script>

<style scoped>
#aside_style {
  padding-left: 12px;
  padding-top: 12px;
  display: flex;
  min-height: 800px;

}
span{
  font-size: initial;
  font-family: "Microsoft YaHei UI";
}



</style>