import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: "The House您的家"
        }
    },
    {
        path: '/about',
        name: 'About',
        component: function () {
            return import ('../views/About.vue')
        },
        meta: {
            title: "我的"
        }
    },
    {
        path: '/shop',
        name: 'shop',
        component: function () {
            return import ('../views/Shop.vue')
        },
        meta: {
            title: "商城"
        }
    },
    {
        path: '/liuxue',
        name: 'liuxue',
        component: function () {
            return import ('../views/Liuxue.vue')
        },
        meta: {
            title: "留学"
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    // console.log(to,from)
    document.querySelector(".tabbar").innerHTML = to.meta.title
    return next()
})

export default router