<template>
  <div style="flex: 1;min-width: 1310px;min-height: 590px">
    <div  v-if=mainDialog>
      <el-page-header @back="goBack" title="回首页"  >
        <template #content>
          <!--       使用span容器标签来拼合     -->
          <span style="font-size: 15px;font-family: 'Microsoft YaHei UI'"> {{ pageTitle }} </span>
        </template>
      </el-page-header>
    </div>
    <el-button  @click="changeModol">切换组件</el-button>
    <div style="margin-top: 15px">
      <!--  二级+三级路由写法  -->
<!--      <router-view v-is="urlComponents"></router-view>-->
<!--   组件写法   -->
      <component name="childComponent" :is="urlComponents"></component>
    </div>

  </div>

</template>

<script>
import {ref} from 'vue';
import {useRouter, useRoute} from 'vue-router'
import DemoMain from "@/components/mains/DemoMain";


export default {
  name: "Main",
  components: {
    DemoMain,
  },

  setup() {

    //等于this.$Router
    var router = useRouter();

    //返回上一页/组件
    const goBack = () => {
      /*
      二级路由写法
      // router.push('/');
      // router.go(-1);
      */
      //组件写法
      urlComponents.value = 'DemoMain';
      mainDialog.value = false;
    }


    const changeModol = () => {
      /*
     二级路由写法
     * router.push(urlComponents.value);
     */
      //组件写法
      urlComponents.value = 'SecondMain';
      mainDialog.value = true;
    }

    //选择main显示的子组件
    const urlComponents = ref('DemoMain');

    //返回上一页选项是否显示
    const mainDialog = ref(false);

    //标题关键字
    const pageTitle = ref("设备处理");


    return {
      urlComponents,
      pageTitle,
      goBack,
      changeModol,
      mainDialog,
    };
  }

}
</script>

<style scoped>
</style>