<template>
  <div style="flex: 1;min-width: 1310px;min-height: 590px;">
    <div v-if=mainDialog>
      <el-page-header @back="goBack" title="回首页">
        <template #content>
          <!--       使用span容器标签来拼合     -->
          <span style="font-size: 15px;font-family: 'Microsoft YaHei UI'"> {{ pageTitle }} </span>
        </template>
      </el-page-header>
    </div>

    <div style="margin-top: 15px;">
      <!--  二级+三级路由写法  -->
      <!--      <router-view v-is="urlComponents"></router-view>-->
      <!--   组件写法   -->
      <component name="childComponent" :is="urlComponents"></component>
    </div>

  </div>

</template>

<script>
import {ref, provide} from 'vue';
import {useRouter, useRoute} from 'vue-router'
import DemoMain from "@/components/mains/DemoMain";
import DefaultMain from "@/components/mains/DefaultMain";


export default {
  name: "Main",
  components: {
    DemoMain,
    DefaultMain,
  },

  setup() {

    // //传递给其他组件值
    // provide("mynum", 666)
    //返回上一页/组件
    const goBack = () => {
      /*二级路由写法// router.push('/');// router.go(-1);*/
      //组件写法
      urlComponents.value = 'DefaultMain';
      mainDialog.value = false;
    }

    //返回上一页选项是否显示，默认不显示
    const mainDialog = ref(false);


    const changeModol = (targetComponent, newTitle) => {
      /*
     二级路由写法
     * router.push(urlComponents.value);
     */
      //组件写法
      if (targetComponent) {
        urlComponents.value = targetComponent;
        changePageTitle(newTitle);
      } else {
        urlComponents.value = 'DefaultMain';
      }
      mainDialog.value = true;
    }

    //选择main默认显示的子组件
    const urlComponents = ref('DefaultMain');


    //标题关键字
    const pageTitle = ref("设备处理");

    //修改标题
    const changePageTitle = (newTitle) => {
      if (newTitle) {
        pageTitle.value = newTitle;
      }
      return;
    }

    //等于this.$Router
    var router = useRouter();

    return {
      urlComponents,
      pageTitle,
      goBack,
      changeModol,
      mainDialog,
      changePageTitle,
    };
  }

}
</script>

<style scoped>
</style>