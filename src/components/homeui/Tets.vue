<template>
    <div class="father">
        
        <div class="son">1</div>
        <HomeUi/>
        <div class="son2">2</div>
    </div>
</template>



<script>
import HomeUi from '../homeui/HomeUi.vue'
export default {
    name:'Tets',
    components:{
HomeUi,
    }
}
</script>

<style lang="less" scoped>

.father{
    width: 100vw;
    height: 100vh;
     scroll-snap-type: y mandatory;
     overflow: scroll;
}
.son{
    width: 100vw;
    height: 100vh;
    background-color: red;
    scroll-snap-align:start;
}
.son2{
    width: 100vw;
    height: 150vh;
    background-color: blue;
    scroll-snap-align:start;
}
.HomeUi{
     width: 100vw;
    height: 100vh;
    scroll-snap-align:start;
}
</style>>

