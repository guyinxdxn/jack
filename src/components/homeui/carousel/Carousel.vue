<template>
  <el-carousel indicator-position="outside" height='18vh'>

    <el-carousel-item v-for="item in img" :key="item">
        <img :src="item.url"/>
      <h3>{{ item.url }}</h3>
    </el-carousel-item>
  </el-carousel>
  <div class="i_text">
      
      <div><Promotion style="width: 2em; height: 2em; padding-right: 8px" />
      <span>校知道——广西科技师范大学的知识驿站</span></div>
      <div><span >立即查看</span><ArrowRight style="width: 2em; height: 2em; padding-left: 8px" /></div></div>
</template>


<script>
export default {
name:'Carousel',
data(){
   return {
      img:[{
          url:'/src/assets/carousel01.jpg'
      },{
          url:'/src/assets/carousel02.jpg'  
      },
      {
          url:'/src/assets/carousel01.jpg'
      },{
          url:'/src/assets/carousel02.jpg'  
      },{
          url:'/src/assets/carousel01.jpg'
      },{
          url:'/src/assets/carousel02.jpg'  
      }]
   }
}
}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}


img{
    
    width: 94vw;
    height: 100%;
    margin: auto;
    display:table-cell;
    text-align: center;
    vertical-align: middle;
}
.i_text{
    border-bottom: #F5f5f5 1px solid;
    box-sizing: border-box;

    height: 28px;
    font-size: 8px;
    margin: 0 2vw;
    display: flex;
  
    justify-content:space-between;
   div{
        box-sizing: border-box;
    display:flex ;
   }
   & div:nth-child(2){
       color: #808080;
   }
}
</style>