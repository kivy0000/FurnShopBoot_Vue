import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DemoMain from "@/components/mains/DemoMain";
import Main from "@/components/Main";
import SecondMain from "@/components/mains/SecondMain";


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
        //         {
        //             path: 'secondMain',
        //             name: 'secondMain',
        //             component: SecondMain,
        //         },
        //
        //     ],
        // }]

    },


    //view的另一种引用方式
    //
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
