<template>
<div>
<Master>
    <div class="container mt-5">
    <div class="row">
    <div class="col-lg-12">
        <div class="card mb-3">
            <div class="card-body">
                <h3 class="card-title text-dark" >{{post.title}}</h3>
                <p>{{ post.body }}</p>
                
            </div>
        </div>
    </div>
    </div>
    </div>
</Master>
</div>
</template>
<script>
import axios from 'axios';
import Master from '../Layout/Master';
export default{
    components:{
        Master
    },
    name:"Postdetail",

    data(){
        return{
            id:this.$route.params.id,
            post:[],
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
        .then((res)=>{
            this.post=res.data;
        })
    }
}

</script>