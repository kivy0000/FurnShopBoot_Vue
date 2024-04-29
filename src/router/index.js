import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        //二级+三级路由写法
        // children: [
        // {
        //     path: '',
        //     name: 'main',
        //     component: Main,
        //     children: [
        //         {
        //             path: '',
        //             name: 'demoMain',
        //             component: DemoMain,
        //         },
        //
        //
        //     ],
        // }]

    },


    //view的另一种引用方式,函数式
    //
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    //界门纲目科属种
    //动物界节肢动物门甲壳亚门软甲纲口足目虾姑科
    //动物界节肢动物门甲壳亚门软甲纲十足目虾科
    //动物界节肢动物门甲壳亚门软甲纲十足目鳌虾科
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
