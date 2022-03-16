<template>
    <div class="conter">
        <p >科技师欢乐驿站</p>
        <div class="video_div">
            <div  >
                <video ref="videoRef" :src="video" :controls="controls"  :autoplay="autoplay" :muted='play' :loop="loop"  :style="{width:width+'%',height:'auto'}">
                    您的浏览器不支持 video 标签。
                </video>
      
            </div>

            <div>
                <!-- <img style="width:100% "  src="/src/assets/carousel01.jpg"/> -->
                <div class="div_text">
                    <span>驿起造噪</span>
                    <span>广西科技师范超燃趴</span>
                </div>
                
                <div class="div_time">
                    <CaretRight style="width: 1em; height: 1em; margin-right: 1px" /><span>02:25</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'VideoView',
    props:{
        //视频地址
        url:{
            type:String,
            default:'/src/assets/video/video01.mp4'
        },
        //自动播放 静音和自动播放要在一起
        play:{
            type:Boolean,
            default:true
        },
        autoplay:{
            type:Boolean,
            default:true
        },
        //不显示控件
        controls:{
            type:Boolean,
            default:false
        },
        width:{
            type:Number,
            default:100,
        },
      
        //重复播放
        loop:{
             type:Boolean,
            default:true
        }
    },
     data() {
    	return {
            video:'/src/assets/video/video01.mp4',
    	}
    }


}
</script>

<style lang='less' scoped>
//容器
.conter{
    //  background-color:#8008;
    box-sizing: border-box;
    padding: 0 2vw;
    width: 100%;
    height: 20vh;
}
//标题样式
p{
    font-size: 16px;
    font-weight:bold;
}


//装2视频的容器
.video_div{
    display:flex;
    justify-content:space-between;
    // 自动视频的容器 
   & div:nth-child(1){
       overflow: hidden;
    //    background-color: red;
       flex: 6;
       height: 15vh;
       display: flex;
       align-items: center;
   }



   //封面视频的容器
    &>div:nth-child(2){
       position: relative;
       flex: 4;
       height: 15vh;
       margin-left: 1vw;
       overflow:hidden;
       background-image: url(/src/assets/carousel01.jpg);
    //    background-color: #000;
        // 设置图片显示方式
        background-size: cover;
        
        //视频文字容器
       div{
            position: absolute;
           width: auto;
           height: auto;
           color: #fff;
       }
        .div_text{
            left: 5%;
            top: 40%;
             flex-direction: column;
             align-items: flex-start;
             span{
                 margin: 0;
                 padding: 0;
                 font-size: 8px;
             }
             & span:nth-child(1){
                    font-weight: bold;
                     font-size: 16px;
                     margin-bottom:1% ;
                 }
        }
        .div_time{
           
            right: 5%;
            bottom: 5%;
        }    

   }
}
</style>