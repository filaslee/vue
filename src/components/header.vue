<template>
    <div>
    <b-navbar toggleable="sm" type="light" variant="light" class="navbar">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand  to="/"><img src="../assets/images/logo.svg" class="logo" alt=""></b-navbar-brand>

        <b-collapse class=" topnav justify-content-end" id="nav-text-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-text class="link"><router-link class="text-white nav-link" to="/">Home</router-link></b-nav-text>
            <b-nav-text class="link"><router-link class="nav-link text-white" to="/add">Add Post</router-link></b-nav-text>
            <b-nav-text class="link"><router-link class="text-white nav-link" to="/apinews">From Api</router-link></b-nav-text>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .navbar
    {
        background-image: linear-gradient(-90deg, #348ac7, #7474bf  );
        font-family: 'Nunito', sans-serif;
    }
   .logo
    {
        width: 100px;
        height: 50px;
    }
</style>