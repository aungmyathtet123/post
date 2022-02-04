<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/post">Post</router-link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>
<script>
export default {
    name:"Nav",
}
</script>

<style>
  .navbar{
    text-align: center;
  }
</style>