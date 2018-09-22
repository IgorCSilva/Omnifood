
<template lang="pug">
    
    section#cities.section-cities
        div.row
            h2 We're currently in these cities
        
        div.row
            div.col.span_1_of_4.box
                img(:src="require('../resources/img/lisbon-3.jpg')" alt="Lisbon")
                h3 Lisbon 
                div.city-feature
                    i.ion-ios-person.icon-small
                    | 1600+ happy eaters 
                div.city-feature
                    i.ion-ios-star.icon-small
                    | 60+ top chefs
                div.city-feature
                    i.ion-social-twitter.icon-small
                    a(href="#") @omnifood_lx
            div.col.span_1_of_4.box
                img(:src="require('../resources/img/san-francisco.jpg')" alt="San Francisco")
                h3 San Francisco 
                div.city-feature
                    i.ion-ios-person.icon-small
                    | 3700+ happy eaters
                div.city-feature
                    i.ion-ios-star.icon-small
                    | 160+ top chefs
                div.city-feature
                    i.ion-social-twitter.icon-small
                    a(href="#") @omnifood_sf
            div.col.span_1_of_4.box
                img(:src="require('../resources/img/berlin.jpg')" alt="Berlin")
                h3 Berlin 
                div.city-feature
                    i.ion-ios-person.icon-small
                    | 2300+ happy eaters
                div.city-feature
                    i.ion-ios-star.icon-small
                    | 110+ top chefs
                div.city-feature
                    i.ion-social-twitter.icon-small
                    a(href="#") @omnifood_berlin
            div.col.span_1_of_4.box
                img(:src="require('../resources/img/london.jpg')" alt="London")
                h3 London 
                div.city-feature
                    i.ion-ios-person.icon-small
                    | 1200+ happy eaters 
                div.city-feature
                    i.ion-ios-star.icon-small
                    | 50+ top chefs
                div.city-feature
                    i.ion-social-twitter.icon-small
                    a(href="#") @omnifood_london
        

        

</template>



<style scoped>

    .box img {
        width: 100%;
        height: auto;
        margin-bottom: 15px;
    }

    .city-feature {
        margin-bottom: 5px;
    }

/* Small tablets to big tablets: from 768px to 1023px */
/* iPad landscape mede 1024px */
@media only screen and (max-width: 1023px) {
    .city-feature {
        font-size: 90%;
    }

    
}
</style>
