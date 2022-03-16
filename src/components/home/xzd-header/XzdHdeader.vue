<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#ffffff"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    
    <div class="header_bcolor">
      <div>校园信息管理</div>
    </div>
     <Menu style="width: 3em; height: 3em; margin-left: 10px; margin-top:15px" />
    <!-- <div class="menu_i2"><Menu />123</div> -->
  </el-menu>
</template>
<style lang='less' socped>
.el-menu-demo{
  height: 7vh;
  .menu_i{
      margin:auto;
  }
  .menu_i2{
    color: #00152a;
    background-color: #000;
  
  }
}
.header_bcolor{
  display: flex;
  
  align-items: center;
  font-size: 20px;
  color: #ffffff;
  width: 30vh;
  background-color:#00152a;
  div{
    margin-left: 25px;
  }
}


.no-inherit{
  font-size: 20px;
}
</style>
