<template>
   
        <div class="conterbox">
        <div>全国</div>
        <div><CaretBottom style="width: 1.5rem; height: 1.5rem; " /></div>
        <div><el-input
        v-model="setinput"
        placeholder="我操啊实打实的a"
        class="w-5 m-2000 gg"
        suffix-icon="Search"
        /></div>
        </div>

</template>

<script>
export default {
    name:'GetListInput',
    data(){
        return {
            setinput:''
        }
    }
}
</script>

<style lang='less' scoped>

  

    .conterbox{

    width: 100%;
    height: 6.5vh;
  
    display: flex;
    justify-content: center;
    align-items: center;
    & div:nth-child(1) {
     
    flex: 3;
    font-size: 18px;
    text-align: center;
    }
     & div:nth-child(2) {
  
    flex: 1;
    }
    & div:nth-child(3) {
         // .el-input input::-webkit-input-placeholder {
    // color:red;
    // }
    :deep(.el-input__inner){   /*或者 .s2>>>.el-input__inner  */
   
    font-size: 14px;
    border-radius: 0px;    /*输入框圆角值*/
  }

    box-sizing: border-box;
    flex: 18;
    margin-right: 4vw;
    margin-left: 0;
   
    
    
    }
    
}

</style>