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

        cities-section

        customer-section
        plans-section

        form-section
        footer-section
    
</template>


<script>

  import FoodHeader from './Header.vue'
  import FeatureSection from './sections/Features.vue'
  import MealsSection from './sections/Meals.vue'
  import HowItWorks from './sections/Steps.vue'
  import CitiesSection from './sections/Cities.vue'
  import CustomerSection from './sections/Customer.vue'
  import PlansSection from './sections/Plans.vue'
  import FormSection from './sections/Form.vue'
  import FooterSection from './sections/Footer.vue'

export default {
  name: 'HtmlCss',
  components: {
    FoodHeader,
    FeatureSection,
    MealsSection,
    HowItWorks,
    CitiesSection,
    CustomerSection,
    PlansSection,
    FormSection,
    FooterSection
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

  @import './resources/css/query.css';

</style>
