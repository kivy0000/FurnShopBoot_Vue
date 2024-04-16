<h1>springboot+vue项目：前端部分</h1>
一. npm创建项目；
二.安装element-plus；
三.配置端口
四.前端排布：
    1.element-plus提供的容器所占用像素和其中的div可能不同，需要单独调整，可以在容器/div上调整
    2.display: flex 表示该元素的子元素将以flex形式完成分割填充，但自身的占用像素仍需自己设置
    3.flex: 1 表示该元素将占用父元素剩余的所有像素
    4.display: flex和flex: 1 可以针对不同的父元素和子元素循环使用
    5.如果出现页面拉动后，样式出现问题，可以设置max/min-height/width
    
五.当前项目布局：
    app.vue包含：HomeView（通过路由）
    HomeView包含：Header aside main 三个vue（通过el容器和路由）
    
    