
<template lang="pug">
    header
        nav
            div.row
                img.logo(:src="require('./resources/img/logo-white.png')" alt="Omnifood logo")
                ul.main-nav 
                    li(v-for="link in links")
                        a(href="#") {{link}}
        div.hero-text-box
            h1  Goodbye junk food.
                br 
                | Help super healthy meals.
            a.btn.btn-full(href="#") I'm hungry
            a.btn.btn-ghost(href="#") Show me more
            
</template>

<script>
export default {
    data(){
        return{
            links: [
                'Food delivery',
                'How it works',
                'Our cities',
                'Sing up'
            ]
        }
    }
}
</script>


<style scoped>
    @import './resources/css/style.css';

header {
    background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('./resources/css/img/hero.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;        
}

.hero-text-box {
    position: absolute;
    width: 1140px;
    /* Porcentagens em relação ao pai */
    top: 50%;
    left: 50%;

    /* Porcentagens do próprio componente */
    transform: translate(-50%, -50%);
}

.logo {
    height: 100px;
    width: auto;
    float: left;
}

.main-nav {
    float: right;
    list-style: none;
    margin-top: 55px;
}

.main-nav li {
    display: inline-block;
    margin-left: 40px;
}

.main-nav li a:link,
.main-nav li a:visited {
    padding: 8px 0;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 80ox;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.2s;
}
.main-nav li a:hover,
.main-nav li a:active {
    border-bottom: 2px solid #e67e22;
}
</style>

