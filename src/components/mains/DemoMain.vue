<template>
  <el-container>
    <el-header style="height: 30px">
      <!--     顶部互动区   -->
      <div>
        <!--搜索新增区        -->
        <div class="mt-4 text-sm font-bold">
          <keep-alive>
            <el-input
                v-model="select_text" class="select_text_style" maxlength="10"
                placeholder="请输入搜索条件" show-word-limit type="text"/>
          </keep-alive>
          <el-button style="height: 35px;height: 35px;width: 75px">
            <el-icon style="margin-right: 2px">
              <Search/>
            </el-icon>
            查找
          </el-button>
          <el-button style="margin-left: 20px;height: 35px;width: 75px" @click="drawer = true">
            新增
          </el-button>
        </div>

        <!--     右弹窗   -->
        <el-drawer v-model="drawer" :before-close="handleClose">
          <!--     右弹窗标题   -->
          <template #header>
            <p style="font-size: large;font-family: 黑体;font-weight: bolder;letter-spacing: 2px;">添加设备</p>
          </template>
<!--       新增维护区   -->

          <!--     右弹窗表单   -->
          <template #default>
            <el-form  label-width="auto" style="max-width: 600px">
              <el-form-item label="名称">
                <el-input/>
              </el-form-item>
              <el-form-item label="番号">
                <el-input/>
              </el-form-item>
              <el-form-item label="制作时间">
                <el-col>
                  <el-date-picker
                      type="date"
                      placeholder="Pick a date"
                      style="width: 100%"/>
                </el-col>
              </el-form-item>
              <el-form-item label="入库数量">
                <el-input/>
              </el-form-item>
              <el-form-item label="分类">
                <el-select  placeholder="please select your zone">
                  <el-option label="shanghai" value="shanghai" />
                  <el-option label="beijing" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item label="Activity time">
                <el-col >
                  <el-date-picker
                      type="date"
                      placeholder="Pick a date"
                      style="width: 100%"/>
                </el-col>
              </el-form-item>
              <el-form-item label="Activity form">
                <el-input  type="textarea" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" >Create</el-button>
                <el-button>Cancel</el-button>
              </el-form-item>
            </el-form>
          </template>
          <!--     右弹窗底部  -->
<!--          <template #footer>-->
<!--            <div style="flex: auto">-->
<!--              <el-button type="primary" @click="drawer = false;loading = true" :loading="loading">提交</el-button>-->
<!--              <el-button type="info" @click="drawer = false">退出</el-button>-->
<!--            </div>-->
<!--          </template>-->

        </el-drawer>
        <!--     右弹窗结束   -->
      </div>
      <!--     顶部互动区结束   -->
    </el-header>
    <!--  主功能区  -->
    <el-main style="flex: 1">
      <div>
        <el-table :data="tableData" border class="table_style">
          <el-table-column prop="id" label="ID" align="center" width="80px"/>
          <el-table-column prop="name" label="名称" align="center" width="260px"/>
          <el-table-column prop="product_id" label="产品番号" align="center" width="260px"/>
          <el-table-column prop="production_time" label="制作时间" align="center" width="240px"/>
          <el-table-column prop="init_time" label="入库时间" align="center" width="240px"/>
          <el-table-column prop="Inventory" label="库存" align="center" width="90px"/>
          <el-table-column prop="sales" label="销量" align="center" width="90px"/>
          <el-table-column prop="parts" label="分类" align="center" width="90px"/>
          <el-table-column label="操作" align="center">
            <template #default="scope">
              <el-button @click="handleEdit(scope.row)" link>编辑</el-button>
              <el-button link>导出</el-button>
              <!--   隐藏删除键/根据权限判断-->
              <el-button link type="danger" disabled style="visibility: initial">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-main>
  </el-container>

</template>

<script>
import {ref, inject} from 'vue';
import {useRouter, useRoute} from 'vue-router'
import {ElMessage} from 'element-plus'
import {ElDrawer, ElMessageBox} from 'element-plus'

export default {
  name: "DemoMain",
  setup(props, ctx) {

    //读取其他组件传的值
    // const mynum = inject('mynum');

    //数据表数组，可以使用循环/索引来提取
    const tableData = ref([
      {
        id: 102,
        name: 'RTGC07A',
        product_id: 'UIDW12186781',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 112,
        name: 'RTGC07A',
        product_id: 'UIDW12186781',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 122,
        name: 'RTGC07A',
        product_id: 'UIDW12156831',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 132,
        name: 'RTGC07A',
        product_id: 'UIDW12262345',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 142,
        name: 'RTGC07A',
        product_id: 'UIDW13543535',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 152,
        name: 'RTGC07A',
        product_id: 'UIDW12235466',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 162,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 172,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 182,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 192,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 192,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 192,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 192,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 192,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        parts: '测试部门',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      },

    ]);

    //搜索关键字
    const select_text = ref('');

    //弹窗是否显示
    const drawer = ref(false);

    //弹窗按钮加载画面是否显示
    const loading = ref(false);

    //点击其他位置退出弹窗的提示
    const handleClose = () => {
      ElMessageBox.confirm(
          '要退出编辑吗? 所有未储存的数据都会被清除',
          '警告',
          {
            confirmButtonText: '继续编辑',
            cancelButtonText: '退出编辑',
            type: 'warning',
          }
      )
          .then(() => {
            //  继续编辑

          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '退出编辑',
            });
            drawer.value = false;
          })
    }


    var router = useRouter();


    return {
      tableData,
      select_text,
      drawer,
      loading,
      handleClose,
    };
  }
}
</script>

<style scoped>

.table_style {
  display: flex;
  flex: 1;
  font-size: small;
}

.select_text_style {
  width: 240px;
  height: 35px;
  margin-right: 10px
}

* el-icon {
  size: "18";
  margin-right: 2px;
}


</style>