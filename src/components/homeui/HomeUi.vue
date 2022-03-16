<template>
<Header :style="{'--opacity' : opacity}"  title="校知道" bcolor="#fff" class="headerui"/>
<GetListInput :style="{'--b' : b}" ref="GetListInputRef" class="input"/>
<Carousel/>
<VideoView/>
<Activity/>
<div class="rr"  :style="{'--a' : a}" >这里是首页啊啊</div>
</template>
<script vars={red}>
import Header from './header/Header.vue'
import GetListInput from './get-list-input/GetListInput.vue'
import Carousel from './carousel/Carousel.vue'
import VideoView from './video-view/VideoView.vue'
import Activity from './activity/Activity.vue'

export default {
 name:'HomeUi',
 mounted(){
     window.addEventListener('scroll', this.handleScroll)
 },
 data(){
return {
  a:'red',
  opacity:1,
  //input框缩放
  b:1,
  bBoot:true,
}
 },
 components:{
     Header,
     GetListInput,
     Carousel,
     VideoView,
     Activity
 },
 
 methods:{
  handleScroll () {
      const html=document.documentElement
      let scrolled = html.scrollTop/(html.scrollHeight-html.clientHeight)
      let total= 1/18
      let start=0
      let progrss=(scrolled-start)/(total-start)
     
     
       // console.log(progrss)
      if(progrss>=1) {
          progrss=1; this.b=0.84;
          }
      else if(progrss<=0) progrss=0
      else {

      if(progrss*0.3<0.16){
        this.b=1-(progrss*0.3)
      }
      console.log(progrss)
      
      //header字体变淡
      this.opacity=1-progrss*3
      }
 
}
 }

 
}



</script>
   

<style  scoped>
/* body{
    background-color: #f5f5f5;
} */

 

 .headerui:deep(div){
    opacity:var(--opacity);
 }
 
.input{
  z-index: 999;
      margin-top: 6.5vh;
      position:sticky;
      top:0;
      /* transform:scale(1-(0.2
      *@progress));
        */
    
     transform:scale(var(--b)) ;
}





.rr{
    color: var(--a);
    height: 2000px;
    /* background-color: red; */
}
</style>