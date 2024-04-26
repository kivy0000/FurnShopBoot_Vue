<template>
  <div class="common-layout" >

    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-container>
        <el-container>
          <el-aside style="width: 250px">
            <Aside />
          </el-aside>
          <el-main>
    <!--二级+三级路由写法-->
<!--           <router-view></router-view>-->
<!--      组件写法      -->
            <Main></Main>
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
