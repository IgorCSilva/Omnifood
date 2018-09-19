
<template lang="pug">
    
    section.section-testemonial
        div.row
            h2 Our customers can't live without us
        
        div.row 
            div.col.span_1_of_3
                blockquote Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                    cite
                        img(:src="require('../resources/img/customer-1.jpg')")
                        | (Alberto Duncan)

            div.col.span_1_of_3
                blockquote Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
                    cite
                        img(:src="require('../resources/img/customer-2.jpg')")
                        | (Joana Silva) 

            div.col.span_1_of_3
                blockquote I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
                    cite
                        img(:src="require('../resources/img/customer-3.jpg')")
                        | (Milton Chapman)



</template>

<style scoped>

    .section-testemonial {
        background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(../resources/img/back-customers.jpg);
        background-size: cover;
        color: white;
        background-attachment: fixed;
    }

    blockquote {
        padding: 2%;

        /* O italic funciona aqui com a fonte escolhida porque ele
        foi adicionado no index.js. */
        font-style: italic; 

        line-height: 145%;
        position: relative;
        margin-top: 40px;
    }

    
    blockquote:before {
        content: '\201C';
        font-size: 400%;
        display: block;

        /* Para usar o absolute aqui junto com top e left 
        tem que colocar o relative no blockquote. */
        position: absolute;
        top: -5px;
        left: -5px;
    }


    cite {
        font-size: 90%;
        margin-top: 25px;  
        display: block;      
    }

    cite img {
        height: 45px;
        border-radius: 50%;
        margin-right: 10px;
        vertical-align: middle;

    }
</style>

