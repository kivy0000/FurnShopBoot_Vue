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
    6.如果需要显示2、3级路由组件，需要在index.js中配置children组件，并将path设置为‘’，注意：默认的‘’path只能有一个，其他的2/3级路由访问需要改变url
        如果不希望改变url，可以通过条件渲染`<component :is="componentName"></component>`来动态切换展示的子组件
        注意:两种方式只能使用一种，循环使用会有页面错误
    7.如果需要调用子组件的方法，可以通过在已渲染的组件（如 <Main></Main>，<component :is="componentName"></component>）上
        设置ref属性，通过ref值.value.其他组件方法（），来调用
      如果需要调用父组件的方法
    
    
    
五.当前项目布局：
    app.vue包含：HomeView（通过路由）
    HomeView包含：Header aside main foot 4个vue（通过el容器和路由）
    
    