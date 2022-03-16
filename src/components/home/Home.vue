<template>
 
  <div class="homebody">
      <XzdHeader/>

  <div class="i_flex"><XzdLsitruter/><router-view/></div>
  </div>
</template>

<script>
// import XzdLsitruter from './components/xzd-lstruter/XzdLsitruter.vue'
import XzdHeader from './xzd-header/XzdHdeader.vue'
import XzdLsitruter from './xzd-lstruter/XzdLsitruter.vue'

export default {
  components: {
  
    XzdHeader,
    XzdLsitruter
  }
}
</script>

<style scoped>
  .i_flex{
    display: flex;
    width: 100vw;

  }
.homebody{
    box-sizing: border-box;
    width: 100vw;
  
    background-color: #f0f2f5;
  }

</style>>

