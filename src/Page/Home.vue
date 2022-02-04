<template>
<div>
    <Master>
        <div class="container mt-5">
            <div class="jumbotron">
                <h1 class="display-4">Welcome Home Page!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4">
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </div>
        </div>
    </Master>
</div>
</template>
<script>
import Master from '../Layout/Master';
export default{
    components:{Master},
    name:"Home",
}

</script>