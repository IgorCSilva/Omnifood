
<template lang="pug">
    header
        nav
            div.row
                img.logo(:src="require('./resources/img/logo-white.png')" alt="Omnifood logo")
                ul.main-nav.js--main-nav 
                    li(v-for="link in links")
                        a(:href="link.href") {{link.text}}
                
                a.mobile-nav-icon.js--nav-icon
                    i.ion-navicon-round
        div.hero-text-box
            h1  Goodbye junk food.
                br 
                | Help super healthy meals.
            a.btn.btn-full.js--scroll-to-plans(href="#") I'm hungry
            a.btn.btn-ghost.js--scroll-to-start(href="#") Show me more
            
</template>

<script>
export default {
    data(){
        return{
            links: [
                {
                    href: '#features',
                    text: 'Food delivery'
                },
                {
                    href: '#works',
                    text: 'How it works'
                },
                {
                    href: '#cities',
                    text: 'Our cities'
                },
                {
                    href: '#plans',
                    text: 'Sing up'
                },
                
            ]
        }
    }
}
</script>


<style scoped>
    @import './resources/css/style.css';

header {
    background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('./resources/css/img/hero.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    height: 100vh;        
}

header div a {
    margin-bottom: 2px;
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

.mobile-nav-icon {
    float: right;
    margin-top: 30px;
    cursor: pointer;
    display: none;
}

.mobile-nav-icon i {
    font-size: 200%;
    color: white;
}

/* Big tablets to 1200px (widths smaller taht the 1140px row */
@media only screen and (max-width: 1200px) {
    .hero-text-box {        
        width: 100%;
        padding: 0 2%;
        
    }
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

 /* Small phones to small tablets: from 481px to 767px */
/* iPad mede 768px */
@media only screen and (max-width: 767px) {
   
   .main-nav {display: none;}
    .mobile-nav-icon {display: inline-block;}
   
    .main-nav {
        float: left;
        margin-top: 35px;
        margin-left: 25px;
    }
    .main-nav li {
        display: block;
    }
    .main-nav li a:link,
    .main-nav li a:visited {
        display: block;
        border: 0;
        padding: 10px 0;
        font-size: 100%;
    }
}
</style>

