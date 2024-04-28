<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header ref="headerRef" />
      </el-header>
      <el-container>
        <el-container style="height: 800px">
          <el-aside style="width: 250px">
            <Aside ref="asideRef" @changeMain="changeMainVue" />
          </el-aside>
          <el-main>
            <!--二级+三级路由写法-->
            <!--           <router-view></router-view>-->
            <!--      组件写法      -->
            <Main  ref="mainRef"></Main>

          </el-main>
        </el-container>
        <el-footer>
          <Foot ref="footRef"/>
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
import {ref} from 'vue';


export default {
  name: 'HomeView',
  components: {
    Header,
    Aside,
    Main,
    Foot,
  },
  setup() {
    //方便父子组件来回调用方法
    const headerRef = ref(null);
    const asideRef = ref(null);
    const mainRef = ref(null);
    const footRef = ref(null);


    //更改主页组件
    const changeMainVue = (vueName,newTitle) => {
      console.log('得到事件')
      mainRef.value.changeModol(vueName,newTitle);

    }

    return {
      headerRef,
      asideRef,
      mainRef,
      footRef,
      changeMainVue,
    }
  }
}
</script>

<style scoped>


</style>
