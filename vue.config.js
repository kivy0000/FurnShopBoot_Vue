const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    port: 9090, //配置启动端口
    proxy: { //拦截器
      '/api': {
        target: "http://localhost:8989/",//代理目标服务器地址
        changeOrigin: true,//允许跨源
        pathRewrite: {
          '/api': ''
        }
      }
    },
    client: {
      //  解决页面弹出红色报错遮罩层,将overlay设置为false即可
      overlay: false
    },
  },

}
