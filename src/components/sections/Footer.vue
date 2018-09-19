
<template lang="pug">
    
    footer
        div.row
            div.col.span_1_of_2
                ul.footer-nav
                    li
                        a(href="#") About us
                    li
                        a(href="#") Blog
                    li
                        a(href="#") Press
                    li
                        a(href="#") iOS App
                    li
                        a(href="#") Android App
            
            div.col.span_1_of_2 
                ul.social-links
                    li
                        a(href="#")
                            i.ion-social-facebook
                    li
                        a(href="#")
                            i.ion-social-twitter
                    li
                        a(href="#")
                            i.ion-social-googleplus
                    li
                        a(href="#")
                            i.ion-social-instagram
            
        
        div.row
            p Copyright &copy; 2015 by Omnifood. All rights reserved.
</template>

<style scoped>

    footer {
        background-color: #333;
        padding: 60px;
        font-size: 80%;
    }

    .footer-nav {
        list-style: none;
        float: left;

    }

    .social-links {
        list-style: none;
        float: right;
    }

    .footer-nav li,
    .social-links li {
        display: inline-block;
        margin-right: 20px;
    }

    
    .footer-nav li:last-child,
    .social-links li:last-child {
        margin-right: 0;
    }

    .footer-nav li a:link,
    .footer-nav li a:visited,
    .social-links li a:link,
    .social-links li a:visited {
        text-decoration: none;
        border: 0;
        color: #888;
    }

    .footer-nav li a:hover,
    .footer-nav li a:active {
        color: #ddd;
    }

    .social-links li a:link,
    .social-links li a:visited {
        font-size: 160%;
    }

    .ion-social-facebook,     
    .ion-social-twitter,     
    .ion-social-googleplus,     
    .ion-social-instagram {
        transition: color 0.2s;
    }
     

    .ion-social-facebook:hover {
        color: #3b5998;
    }
    .ion-social-twitter:hover {
        color: #00aced;
    }
    .ion-social-googleplus:hover {
        color: #dd4b39;
    }
    .ion-social-instagram:hover {
        color: #517fa4;
    }

    footer p {
        color: #888;
        text-align: center;
        margin-top: 20px;
    }


</style>
