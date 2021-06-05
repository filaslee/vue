<template>
    <div>
        <b-navbar toggleable="sm" type="light" variant="light" class="px-5 navbar fixed-top">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <b-navbar-brand  to="/"><img src="../assets/images/logo.svg" class="logo" alt=""></b-navbar-brand>
            <b-collapse class=" topnav justify-content-end" id="nav-text-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-text ><router-link class="link text-white nav-link" activeClassName="underline" to="/">Home</router-link></b-nav-text>
                <b-nav-text ><router-link class="link nav-link text-white" activeClassName="underline" to="/add">Add Post</router-link></b-nav-text>
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
    .link::after
    {
       content: '';
       display: block;
       width: 0;
       height: 1px;
       background: #fff;
       transition: width .3s;
    }
    .link:hover::after{
        width: 100%;
        transition: width;
    }
    
</style>