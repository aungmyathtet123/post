<template>
<div>
<Master>
    <Loader v-show="isLoad"/>
    <div class="container mt-5" v-show="!isLoad">
        <div class="row">
            <div class="col-lg-12">
                <div class="card mb-3" v-for="p in posts" :key="p.id">
                    <div class="card-body">
                        <router-link class="card-title text-dark" :to="'/singlepost/'+p.id"><h3>{{p.title}}</h3></router-link>
                        <p>{{ p.body }}</p>
                        
                    </div>
                 </div>
            </div>
        </div>
    
   
</div>
</Master>
</div>
</template>
<script>
import Master from '../Layout/Master';
import Loader from '../Component/Loader';
import axios from 'axios';
export default{
    components:{
        Master,Loader
    },
    name:"Post",
    data(){
        return{
            isLoad:true,
            posts:[],
        }
    },
    created(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
                .then((res)=>{
                    this.posts=res.data;
                    this.isLoad=false;
                })
    },
}

</script>