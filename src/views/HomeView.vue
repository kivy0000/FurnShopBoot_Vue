<template>
  <div class="common-layout" style="display: flex">

    <el-container>
      <el-header>
        <Header/>
      </el-header>

      <el-container>
        <el-container>
          <el-aside>
            <Aside/>
          </el-aside>
          <el-main>
            <Main/>
          </el-main>
        </el-container>
        <el-footer>
          <Foot/>
        </el-footer>
      </el-container>

    </el-container>

  </div>
</template>

<script>

import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Main from "@/components/Main";
import Foot from "@/components/Foot";


export default {
  name: 'HomeView',
  components: {
    Header,
    Aside,
    Main,
    Foot,
  },

}
</script>

<style scoped>


</style>
