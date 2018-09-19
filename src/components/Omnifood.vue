<template lang="pug">
    div.g-html 
        //- HEADER
        food-header

        //- SECTIONS
        //- Features
        feature-section
        //- Meals
        meals-section

        how-it-works
    
</template>


<script>

  import FoodHeader from './Header.vue'
  import FeatureSection from './sections/Features.vue'
  import MealsSection from './sections/Meals.vue'
  import HowItWorks from './sections/Steps.vue'

export default {
  name: 'HtmlCss',
  components: {
    FoodHeader,
    FeatureSection,
    MealsSection,
    HowItWorks
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style>
  @import './resources/css/style.css';
  @import './vendors/css/grid.css';
  @import './vendors/css/normalize.css';
  @import './vendors/css/ionicons.min.css';
</style>
