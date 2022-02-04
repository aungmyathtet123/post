import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Page/Home';
import Post from '../Page/Post';
import Postdetail from '../Page/Postdetail';




Vue.use(VueRouter);

const routes=[
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/post',
        name:'post',
        component:Post
    },
    {
        path:'/singlepost/:id',
        name:'postdetail',
        component:Postdetail
    },
];

const router=new VueRouter({
    mode:"history",
    routes,
});

export default router;