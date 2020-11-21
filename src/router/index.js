import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Food from '../views/Food.vue'
import Keranjang from '../views/Keranjang.vue'
import FoodDetail from '../views/FoodDetail.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/food',
        name: 'food',
        component: Food
    },
    {
        path: '/food/:id',
        name: 'FoodDetail',
        component: FoodDetail
    },
    {
        path: '/keranjang',
        name: 'keranjang',
        component: Keranjang
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router