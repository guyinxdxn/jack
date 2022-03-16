<template>
 
  <router-view/>

</template>

<script>

import Home from './components/home/Home.vue'
import HomeUi from './components/homeui/HomeUi.vue'
export default {
  name: 'App',
  components: {
    Home,
    HomeUi
  }
}
</script>
