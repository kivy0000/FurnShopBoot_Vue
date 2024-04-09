<template>
  <div>
    <router-view v-is="routerUrl"></router-view>
  </div>
</template>
<script>

import {ref} from 'vue';

export default {
  name: "layout",
  components: {
  },

  setup(){
    //通过修改routerurl并保存登陆对象在sessionStonge中进行验证和跳转
    const routerUrl = ref("home");

    return {
      routerUrl
    };
  }
}
</script>
<style scoped>
</style>
