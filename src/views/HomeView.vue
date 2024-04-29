<template>
  <div class="common-layout">
    <!--  一级容器  -->
    <el-container>
      <!--   一级容器头部   -->
      <el-header class="header_style">
        <Header ref="headerRef"/>
      </el-header>
      <!--   二级容器   -->
      <el-container>
        <!--   三级容器   -->
        <el-container class="second_container_style">
          <el-aside class="aside_style">
            <Aside ref="asideRef" @changeMain="changeMainVue"/>
          </el-aside>
          <el-main class="main_style">
            <!--二级+三级路由写法 <router-view></router-view>-->
            <Main ref="mainRef"></Main>
          </el-main>
        </el-container>
        <!--   二级容器底部   -->
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
    const changeMainVue = (vueName, newTitle) => {
      console.log('父组件homeview得到事件：@changeMain')
      mainRef.value.changeModol(vueName, newTitle);

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
.header_style {
  min-width: 1500px;
}

.second_container_style {
  height: 800px;
  width: 1900px;
}

.aside_style {
  width: 250px;
}

.main_style {

}




</style>
