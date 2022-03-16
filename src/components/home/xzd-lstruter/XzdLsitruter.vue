<template>
  <el-row class="tac">
  
   
   
      <el-menu
        active-text-color="#b8dbff"
        background-color="#00152a"
        class="el-menu-vertical-demo"
        default-active=""
        text-color="#ffffff"
        :default-openeds='openeds'
      >
        <el-menu-item class="menu" index="2">
          <el-icon><Menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>

        <el-sub-menu  index="1">
          <template #title >
            <el-icon><location /></el-icon>
            <span>校知道管理</span>
          </template>
         <el-menu-item-group >
              <router-link to="/home/xzd"><el-menu-item index="1-1"><el-icon><Menu /></el-icon>问题信息 </el-menu-item></router-link>
              <router-link to="/home/xzd2"><el-menu-item index="1-2"><el-icon><Menu /></el-icon>不知道什么管理</el-menu-item></router-link>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
  
  </el-row>
</template>

<script>


export default {
  name:'XzdLsitruter',
  data(){
    return {
        openeds:['1']
    }
  }
}
</script>




<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 30vh; 
  min-height: 93vh;
a {
text-decoration:none;
}
}

.menu{
  background-color: #3f9eff;
}


.user_t{
    margin: 20% 0;
    font-size: 24px;
}
</style>
