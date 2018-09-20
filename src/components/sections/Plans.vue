
<template lang="pug">
    
    section.section-plans
        div.row
            h2 Start eating healthy today
        
        div.row
            div.col.span_1_of_3
                div.plan-box
                    div
                        h3 Premium
                        p.plan-price $399 
                            span / month
                        p.plan-price-meal That’s only 13.30$ per meal
                    
                    div
                        ul
                            li
                                i.ion-ios-checkmark-empty.icon-small
                                | 1 meal every day
                            li
                                i.ion-ios-checkmark-empty.icon-small
                                | Order 24/7
                            li
                                i.ion-ios-checkmark-empty.icon-small
                                | Access to newest creations
                            li
                                i.ion-ios-checkmark-empty.icon-small
                                | Free delivery

                    div 
                        a.btn.btn-full(href="#") Sing up
            

            div.col.span_1_of_3
                div.plan-box
                    div
                        h3 Pro
                        p.plan-price 149$ 
                            span per month
                        p.plan-price-meal That’s only 14.90$ per meal
                    
                    div
                        ul
                            li
                                i.ion-ios-checkmark-empty.icon-small
                                | 1 meal 10 days/month
                            li
                                i.ion-ios-checkmark-empty.icon-small
                                | Order 24/7
                            li
                                i.ion-ios-checkmark-empty.icon-small
                                | Access to newest creations
                            li
                                i.ion-ios-checkmark-empty.icon-small
                                | Free delivery

                    div 
                        a.btn.btn-ghost(href="#") Sing up
            

            div.col.span_1_of_3
                div.plan-box
                    div
                        h3 Starter
                        p.plan-price 19$ 
                            span per meal

                        //- Esse &nbsp resolve o problema do espaço.
                        //- Retirar ele e testar para notar a diferença.
                        p.plan-price-meal &nbsp; 
                    
                    div
                        ul
                            li
                                i.ion-ios-checkmark-empty.icon-small
                                | 1 meal
                            li
                                i.ion-ios-checkmark-empty.icon-small
                                | Order from 8 am to 12 pm
                            li
                                i.ion-ios-close-empty.icon-small
                                
                            li
                                i.ion-ios-checkmark-empty.icon-small
                                | Free delivery

                    div 
                        a.btn.btn-ghost(href="#") Sing up
            

</template>

<style scoped>

    .section-plans {
        background-color: #f4f4f4;
    }

    .plan-box {
        background-color: white;
        border-radius: 5px;
        width: 90%;
        margin-left: 5%;
        box-shadow: 0 2px 2px #e3e3e3;
    }

    .plan-box div {
        padding: 15px;
        border-bottom: 1px solid #e8e8e8;
        background-color: #f7f0e5;
    }

    .plan-box div:first-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .plan-box div:last-child {
        text-align: center;
        border: 0;

    }

    .plan-price {
        font-size: 300%;
        margin-bottom: 10px;   
        font-weight: 300;
        color: #e67e22;     
    }

    .plan-price span {
        font-size: 30%;
        font-weight: 300;
    }

    .plan-price-meal {
        font-size: 80%;
    }

    .plan-box ul {
        list-style: none;
    }

    .plan-box ul li {
        padding: 5px 0;
    }

    /* Small tablets to big tablets: from 768px to 1023px */
/* iPad landscape mede 1024px */
@media only screen and (max-width: 1023px) {
    .plan-box {
       width: 100%;
       margin-left: 0%; 
    }

    .plan-price {
        font-size: 250%;
    }
    
}

</style>
