<template>
  <div class="common-layout" style="display: flex">
    <!--外部容器-->
    <el-container>
      <!--内部顶部容器   -->
      <el-header>
        <Header/>
      </el-header>
      <!-- 内部侧边+main容器-->
      <el-container>
        <!--侧边容器-->
        <el-aside >
          <Aside/>
        </el-aside>
        <!--内部main容器-->
        <el-main>
          <Main/>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>

import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Main from "@/components/Main";


export default {
  name: 'HomeView',
  components: {
    Header,
    Aside,
    Main,
  },

}
</script>

<style scoped>


</style>
