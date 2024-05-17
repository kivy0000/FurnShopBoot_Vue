<template>
  <el-container>
    <el-header style="height: 30px;">
      <!--     顶部互动区   -->
      <div>
        <!--搜索删除新增导出区        -->
        <div class="mt-4 text-sm font-bold">
          <keep-alive>
            <el-input
                v-model="select_text" class="select_text_style" maxlength="10"
                placeholder="请输入搜索条件" show-word-limit type="text"/>
          </keep-alive>

          <el-button style="height: 35px;height: 35px;width: 78px">
            <el-icon style="margin-right: 2px">
              <Search/>
            </el-icon>
            查找
          </el-button>
          <el-button @click="drawer = true" style="margin-left: 30px;height: 35px;width: 78px">新增</el-button>
          <el-button @click="deleteMoreRow" style="margin-left: 10px;height: 35px;width: 78px">批量删除</el-button>
          <el-button @click="exportMoreRow" style="margin-left: 10px;height: 35px;width: 78px">批量导出</el-button>
        </div>

        <!--     右弹窗   -->
        <el-drawer v-model="drawer" :before-close="handleClose">
          <!--     右弹窗标题   -->
          <template #header>
            <p style="font-size: large;font-family: 黑体;font-weight: bolder;letter-spacing: 2px;">添加设备</p>
          </template>

          <!--     右弹窗表单   -->
          <template #default>
            <el-form :model="drawerForm" label-width="auto" style="max-width: 600px">
              <el-form-item label="名称">
                <el-input v-model="drawerForm.name"/>
              </el-form-item>
              <el-form-item label="番号">
                <el-input v-model="drawerForm.productId"/>
              </el-form-item>
              <el-form-item label="制作时间">
                <el-date-picker v-model="drawerForm.productionTime" value-format="YYYY-MM-DD HH:mm:ss" type="datetime"
                                placeholder="Select date and time"/>
              </el-form-item>
              <el-form-item label="入库数量">
                <el-input v-model="drawerForm.inventory"/>
              </el-form-item>
              <el-form-item label="销量">
                <el-input v-model="drawerForm.sales"/>
              </el-form-item>
              <el-form-item label="部门">
                <el-select placeholder="选择你的部门" v-model="drawerForm.parts">
                  <el-option label="技术部" value="技术部"/>
                  <el-option label="测试部" value="测试部"/>
                  <el-option label="开发部" value="开发部"/>
                  <el-option label="保洁部" value="保洁部"/>
                  <el-option label="测试组" value="测试组"/>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" :loading="loading" @click="addProduct()">添加</el-button>
                <el-button @click="handleClose">返回</el-button>
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

      </div>
      <!--     顶部互动区结束   -->
    </el-header>
    <!--  主内容区  -->
    <el-main>
      <div>
        <el-table :data="tableData" border class="table_style" height="650px" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="35px"/>
          <el-table-column prop="id" label="ID" align="center" width="55px"/>
          <el-table-column prop="name" label="名称" align="center" width="200px"/>
          <el-table-column prop="productId" label="产品番号" align="center" width="360px"/>
          <el-table-column prop="productionTime" label="制作时间" align="center" width="260px"/>
          <el-table-column prop="initTime" label="入库时间" align="center" width="240px"/>
          <el-table-column prop="inventory" label="库存" align="center" width="60px"/>
          <el-table-column prop="sales" label="销量" align="center" width="60px"/>
          <el-table-column prop="parts" label="部门" align="center" width="90px"/>

          <el-table-column label="操作" align="center">
            <template #default="scope">

              <el-button @click="handleEdit(scope.row)" link>编辑</el-button>
              <el-button @click="exportRow(scope.row)" link>导出</el-button>

              <el-popconfirm title="确认删除？" @confirm="deleteRow(scope.row)">
                <template #reference>
                  <el-button style="margin-left: 5px" link type="danger">删除</el-button>
                </template>
              </el-popconfirm>

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
import {ElMessage, ElNotification} from 'element-plus'
import {ElDrawer, ElMessageBox} from 'element-plus'
//引入axios对象
import request from "@/utils/request";
//生成uuid
import {v4 as uuidv4} from 'uuid';

export default {
  name: "DemoMain",
  components: [],
  created() {
    //初始化表单数据
    this.flashTableData();
  },
  setup(props, ctx) {


    //读取其他组件传的值
    // const mynum = inject('mynum');

    //刷新数据表数组tableData,flashTableData()带方法括号
    const flashTableData = () => {
      request.get("/api/getAll")
          .then(res => {
            tableData.value = res;
            elSout("表单刷新成功", 'success');
          })
          .catch(reason => {
            console.log(reason);
            elSout("表单刷新失败，使用默认数据", 'warning')
          })
    };

    //数据表数组，可以使用循环/索引来提取
    const tableData = ref([
      {
        id: 102,
        name: 'RTGC07A',
        productId: 'UIDW12186781',
        parts: '测试部门',
        productionTime: '2022/1/1 13:28:16',
        initTime: '2022/1/1 13:28:16',
        inventory: 718,
        sales: 42,
      }, {
        id: 102,
        name: 'RTGC07A',
        productId: 'UIDW12186781',
        parts: '测试部门',
        productionTime: '2022/1/1 13:28:16',
        initTime: '2022/1/1 13:28:16',
        inventory: 718,
        sales: 42,
      }
    ]);

    //单项删除
    const deleteRow = (row) => {
      console.log(row)
    };

    //批量删除
    const deleteMoreRow = () => {
      //TODO 批量删除
      ElMessageBox.confirm
      (
          '确定要删除选中项吗?',
          '警告',
          {
            confirmButtonText: '删除',
            cancelButtonText: '取消',
            type: 'warning',
          }
      )
          .then(() => {
            ElMessage({
              type: 'success',
              message: '删除成功',
            });
            console.log(selectionTableData.value);
            flashTableData();
          })
          .catch(() => {
            //  继续编辑
            ElMessage({
              type: 'info',
              message: '取消删除',
            });
          })


    };

    //单行导出
    const exportRow = (row) => {
      console.log(row);
    }

    //批量导出
    const exportMoreRow = () => {
      //TODO 批量导出
      ElMessageBox.confirm(
          '要导出选中项吗?',
          '提示',
          {
            confirmButtonText: '导出',
            cancelButtonText: '取消',
            type: 'info',
          }
      )
          .then(() => {
            ElMessage({
              type: 'success',
              message: '导出成功',
            });
            console.log(selectionTableData.value);
          })
          .catch(() => {
            //  继续编辑
            ElMessage({
              type: 'info',
              message: '取消导出',
            });
          })


    };

    //动态获取选中的行
    const handleSelectionChange = (selection) => {
      selectionTableData.value = selection;
      console.log(selectionTableData.value);
    }

    //选中的行
    const selectionTableData = ref();

    //搜索关键字
    const select_text = ref('');

    //弹窗的表单数据
    const drawerForm = ref({
      //测试数据，用完删除
      //  id: '13',
      name: 'ikun' + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10),
      productId: uuidv4(4),
      inventory: '20',
      sales: '16',
      parts: '技术部',
      productionTime: '',
      // init_time: '',
    },);

    //提交表单
    const addProduct = () => {
      //表单未提交结束时，不应让提交按钮点击
      loading.value = true;
      console.log(drawerForm.value);
      //发送给后端数据
      request.post("/api/addProduct/", drawerForm.value).then(res => {
        console.log('新的id为', res);

        //判断是否添加成功
        if (res > 0) {
          elOpen('成功', '添加成功，新的id为' + res, 'success');
        } else if ((res < 0)) {
          elOpen('失败', "添加失败" + res, 'warning');
        }
        //刷新数据
        flashTableData();
        //无论数据是否提交成功，都应该在结束时设置loading为false，否则会导致弹窗始终无法关闭
        loading.value = false;
        drawer.value = false;
      }).catch(reason => {
        console.log(reason);
        elSout("添加失败，原因是" + reason, 'error');
        loading.value = false;
      });

    }

    //弹窗是否显示
    const drawer = ref(false);

    //弹窗按钮加载画面是否显示
    const loading = ref(false);


    //点击其他位置退出弹窗的提示
    const handleClose = () => {
      //如果正在提交信息，不关闭弹窗
      if (loading.value == true) {
        elSout('数据正在提交，请耐心等待', 'warning');
        return;
      }
      //表单未提交结束时，不应让返回按钮点击   :disabled="loading != false"     不能点击和提示信息二选一
      ElMessageBox.confirm(
          '要退出编辑吗? 所有未储存的数据都会被清除',
          '警告',
          {
            confirmButtonText: '退出编辑',
            cancelButtonText: '继续编辑',
            type: 'warning',
          }
      )
          .then(() => {
            ElMessage({
              type: 'info',
              message: '退出编辑',
            });
            drawer.value = false;

          })
          .catch(() => {
            //  继续编辑
          })
    }

    //消息通知
    const elSout = (mMessage, mType) => {
      ElMessage({
        message: mMessage,
        type: mType,
        center: true,
        duration: 2500,
        showClose: false,
        grouping: false,
      })
    }

    //右侧提示消息通知
    const elOpen = (mTitle, mMessage, mType) => {
      ElNotification({
        title: mTitle,
        message: mMessage,
        type: mType,
        offset: 100,
        duration: 3000
      })
    }


    //路由
    var router = useRouter();

    return {
      tableData,
      selectionTableData,
      drawerForm,
      select_text,
      drawer,
      loading,
      deleteRow,
      deleteMoreRow,
      exportMoreRow,
      exportRow,
      handleSelectionChange,
      flashTableData,
      addProduct,
      handleClose,
      elSout,
      elOpen,
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