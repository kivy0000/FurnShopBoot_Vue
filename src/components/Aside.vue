<template>
  <div id="aside_style">
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        default-active="1"
        text-color="#fff"
        style="flex: 1"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>设备处理1</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
        <el-menu-item index="1-4">item one</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>设备处理2</span>
        </template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-menu-item index="2-4">item one</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>设备处理3</span>
        </template>
        <el-menu-item index="3-1">item one</el-menu-item>
        <el-menu-item index="3-2">item two</el-menu-item>
        <el-menu-item index="3-3">item three</el-menu-item>
        <el-menu-item index="3-4">item one</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>设备处理4</span>
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
</style>