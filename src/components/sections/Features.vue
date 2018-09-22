
<template lang="pug">
    
    section#features.section-features.js--section-features
        div.row
            h2 Get food fast &mdash; not fast food
            p.long-copy Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
        
        div.row
            div.col.span_1_of_4.box(v-for="col in cols")
                i.icon-big(:class="col.icon")
                h3 {{ col.title }}
                p {{ col.text }}

</template>



<script>
export default {
    data(){
        return{
            cols: [ {
                        title: 'Up to 365 days/year',
                        icon: 'ion-ios-infinite-outline',
                        text: 'Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that\'s your style.'
                    },
                    {
                        title: 'Ready in 20 minutes',
                        icon: 'ion-ios-stopwatch-outline',
                        text: 'You\'re only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you\'re 100% happy.'
                    },
                    {
                        title: '100% organic',
                        icon: 'ion-ios-nutrition-outline',
                        text: 'All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!'
                    },
                    {
                        title: 'Order anything',
                        icon: 'ion-ios-cart-outline',
                        text: 'We don\'t limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It\'s up to you!'
                    },
            ]
        }
    }
    
}
</script>

<style scoped>
    @import '../resources/css/style.css';

    .section-features .long-copy {
        margin-bottom: 30px;
    }

</style>
