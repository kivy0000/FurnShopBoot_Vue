<template>
  <el-container>
    <el-header>
      <div>
        <el-input
            v-model="select_text"
            style="width: 240px;height: 35px;margin-right: 5px" maxlength="10" placeholder="请输入搜索条件" show-word-limit type="text"/>
        <el-button style="height: 35px">查找</el-button>
        <el-button style="margin-left: 20px;height: 35px;">新增</el-button>
      </div>
    </el-header>

    <el-main>
      <div style="margin-top: -20px">
      <el-table :data="tableData" border  class="table_style" >
        <el-table-column prop="id" label="ID" width="60px" align="center"/>
        <el-table-column prop="name" label="名称" align="center" width="280px"/>
        <el-table-column prop="product_id" label="产品番号" align="center" width="240px"/>
        <el-table-column prop="production_time" label="制作时间" align="center" width="240px"/>
        <el-table-column prop="init_time" label="入库时间" align="center" width="240px"/>
        <el-table-column prop="Inventory" label="库存" width="90px" align="center"/>
        <el-table-column prop="sales" label="销量" width="90px" align="center"/>
        <el-table-column label="操作"  align="center">
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)" link >编辑</el-button>
            <el-button link >导出</el-button>
            <el-button link type="danger" >删除</el-button>
            <!--    自定义提示内容-->
            <!--        {{scope.row.date}}-->
          </template>
        </el-table-column>
      </el-table>
    </div>
    </el-main>
  </el-container>






</template>

<script>
import {ref} from 'vue';

export default {
  name: "Main",
  setup() {
    //数据表数组，可以使用循环/索引来提取
    const tableData = ref([
      {
        id: 102,
        name: 'RTGC07A',
        product_id: 'UIDW12186781',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      },{
        id: 112,
        name: 'RTGC07A',
        product_id: 'UIDW12186781',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      },{
        id: 122,
        name: 'RTGC07A',
        product_id: 'UIDW12156831',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      },{
        id: 132,
        name: 'RTGC07A',
        product_id: 'UIDW12262345',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      },{
        id: 142,
        name: 'RTGC07A',
        product_id: 'UIDW13543535',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      },{
        id: 152,
        name: 'RTGC07A',
        product_id: 'UIDW12235466',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      },{
        id: 162,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      },{
        id: 172,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      },{
        id: 182,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      },{
        id: 192,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      },

    ]);

    //搜索关键字
    const select_text = ref("1");

    return {
      tableData,
      select_text,
    };
  }
}
</script>

<style scoped>

.table_style {
  flex: 1;
  font-size: small;
}
.test_nextid{
  margin-right: 30px;
  display: flex;
}
</style>