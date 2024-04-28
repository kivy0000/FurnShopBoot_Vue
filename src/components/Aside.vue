<template>
  <div id="aside_style">
    <!--  默认选中  default-active="1"-->
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        style="flex: 1;height: auto;text-align:center;"
    >
      <!--    循环生成菜单，将当前行的标题数据和将要跳转的组件名传递到方法中 -->
      <el-menu-item :index="item.index" class="menuItem" v-for="item in asideData" :key="item"
                    @click="changeMainView(item.name,item.targetComponent)">
        <template #default="scope">
          <el-icon></el-icon>
          {{ item.name }}

        </template>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
import {ref} from 'vue';
import {useRouter, useRoute} from 'vue-router'

export default {
  name: "Aside",
  components: {},

  //事件触发数组
  emits: [
    'changeMain'
  ],

  setup(props, ctx) {

    //侧栏数组
    const asideData = ref(
        [{
          name: '设备处理',
          targetComponent: 'DemoMain',
          index: '1'
        }, {
          name: '结构调整',
          targetComponent: 'DemoMain',
          index: '2'
        }, {
          name: '算法维护',
          targetComponent: 'DemoMain',
          index: '3'
        },
          {
            name: '计算属性',
            targetComponent: 'DemoMain',
            index: '4',
          },
          {
            name: '模板语法',
            targetComponent: 'DemoMain',
            index: '5',
          }, {
          name: '条件渲染',
          targetComponent: 'DemoMain',
          index: '6',
        }, {
          name: '生命周期',
          targetComponent: 'DemoMain',
          index: '7',
        }, {
          name: '模板引用',
          targetComponent: 'DemoMain',
          index: '8',
        },

        ])

    //输出方法
    const sout = (dates) => {
      console.log(dates)
    }


    //使用事件触发父组件homeviewde的 @changeMain="changeMainVue" 方法，再调用main的changeModol方法
    const changeMainView = (title, targetComponent) => {
      ctx.emit('changeMain',targetComponent, title);
      console.log('触发事件')
    }


    return {
      sout,
      asideData,
      changeMainView,
    }
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

.menuItem {
  text-align: center;
  color: white;
  margin-top: 8px;
  margin-left: 15px;
  font-size: 16px;
  letter-spacing: 5px;
  font-family: 'Microsoft YaHei UI', monospace;
}


</style>