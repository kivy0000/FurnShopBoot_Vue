<template>
  <el-container>
    <el-header style="height: 30px">
      <div>
        <div class="mt-4 text-sm font-bold">
          <keep-alive>
            <el-input
                v-model="select_text" class="select_text_style" maxlength="10"
                placeholder="请输入搜索条件" show-word-limit type="text"/>
          </keep-alive>
          <el-button style="height: 35px">查找</el-button>
          <el-button style="margin-left: 20px;height: 35px;">新增</el-button>
        </div>

      </div>
    </el-header>
    <el-main style="flex: 1">
      <div>
        <el-table :data="tableData" border class="table_style">
          <el-table-column prop="id" label="ID" align="center" width="80px" />
          <el-table-column prop="name" label="名称" align="center" width="260px"/>
          <el-table-column prop="product_id" label="产品番号" align="center" width="260px"/>
          <el-table-column prop="production_time" label="制作时间" align="center" width="240px"/>
          <el-table-column prop="init_time" label="入库时间" align="center" width="240px"/>
          <el-table-column prop="Inventory" label="库存"  align="center" width="90px"/>
          <el-table-column prop="sales" label="销量" align="center" width="90px"/>
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
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 112,
        name: 'RTGC07A',
        product_id: 'UIDW12186781',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 122,
        name: 'RTGC07A',
        product_id: 'UIDW12156831',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 132,
        name: 'RTGC07A',
        product_id: 'UIDW12262345',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 142,
        name: 'RTGC07A',
        product_id: 'UIDW13543535',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 152,
        name: 'RTGC07A',
        product_id: 'UIDW12235466',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 162,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 172,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 182,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 192,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 192,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 192,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
        id: 192,
        name: 'RTGC07A',
        product_id: 'UIDW12196867',
        production_time: '2022/1/1 13:28:16',
        init_time: '2022/1/1 13:28:16',
        Inventory: 718,
        sales: 42,
      }, {
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
    const select_text = ref('');

    var router = useRouter();

    return {
      tableData,
      select_text,
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
</style>