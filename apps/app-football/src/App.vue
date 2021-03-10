<template>
  <div id="app">

    <HcodeHeader
      @select-championship="changeChampionship"
      @change-component="changeComponent"
    />

    <HcodeSection />
    <HcodeFooter />
  </div>

</template>

<script>
import HcodeHeader from './components/HcodeHeader'
import HcodeFooter from './components/HcodeFooter'
import HcodeSection from './components/HcodeSection'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    HcodeHeader,
    HcodeFooter,
    HcodeSection
  },
  data() {
    return {
      
    }
  },
  methods: { 
    ...mapActions(['changeChampionship']),
    changeComponent(value) {

      let component;
      
      switch (value) {
        case 'home':
        default:
          component = 'HcodeSectionBanner';
        break;

        case 'news':
            component = 'HcodeSectionNews'
        break;
      }

      this.currentSectionComponent = component;

    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap')
</style>
