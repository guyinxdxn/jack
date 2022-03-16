<template>
  <div :style="{backgroundColor:bcolor}" class="header">
 
  <Back style="width: 2rem; height: 2rem; margin-left: 2vw" />
      <div>{{title}}</div>
  <MoreFilled style="width: 1.7rem; height: 1.7rem; margin-right: 2vw" />
  </div>
</template>

<script>
export default {
  name:'Header',
  props:{
    title:{
      type:String,
      default:'标题名'
    },
    bcolor:{
      type:String,
      default:''
    }
  }
}
</script>

<style lang='less' socped>
.header{
    width: 100%;
    height: 6.5vh;
   position:fixed;
  top: 0;
z-index: 999;
    display: flex;
    justify-content:space-between;
    align-items: center;
    
    div{
      font-size: 18px;
      color: #000;
      text-align: center;
      font-weight: bold;
    }
}
</style>