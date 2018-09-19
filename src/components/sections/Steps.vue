
<template lang="pug">
    
    section.section-steps
        div.row
            h2 How it works &mdash; Simple as 1, 2, 3
        
        div.row
            div.col.span_1_of_2.steps-box
                img.app-screen(:src="require('../resources/img/app-iPhone.png')")
            
            div.col.span_1_of_2.steps-box 
                div.works-step
                    div 1
                    p Choose the subscription plan that best fits your needs and sign up today.
                div.works-step
                    div 2
                    p Order your delicious meal using our mobile app or website. Or you can even call us!
                div.works-step
                    div 3
                    p Enjoy your meal after less than 20 minutes. See you the next time!

                a.btn-app(href="#")
                    img(:src="require('../resources/img/download-app.svg')" alt="App store button")
                a.btn-app(href="#")
                    img(:src="require('../resources/img/download-app-android.png')" alt="Play store button")
</template>

<style scoped>

    .section-steps {
        background-color: #f0f0f0;
    }

    .steps-box:first-child {
        text-align: right;
        padding-right: 3%;
        margin-top: 30px;
    }

    .steps-box:last-child {
        padding-left: 3%;
        margin-top: 70px;
    }

    .app-screen {
        width: 40%;
    }

    .works-step {
        margin-bottom: 50px;
    }

    .works-step:last-of-type {
        margin-bottom: 80px;
    }

    .works-step div {
        color: #e67e22;
        border: 2px solid #e67e22;
        display: inline-block;
        border-radius: 50%;
        width: 55px;
        height: 55px;
        text-align: center;
        padding: 5px;
        font-size: 150%;
        float: left;
        margin-right: 25px;
    }

    .btn-app:link,
    .btn-app:visited {
        border: 0px;
    }

    .btn-app img {
        height: 50px;
        width: auto;
        margin-right: 10px;
    }
</style>
