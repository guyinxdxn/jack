<template>
    <div class="conter">
        <p >精品活动</p>

        <!-- 横向滚动 -->
        <div class="card"  ref="cardRef">
            <div :style="{'--translateX3' : translateX3,'--translatescale3':translatescale3,'--translateY3':translateY3}">
                <div></div>
              <!-- <img src="/src/assets/logo.png"/> -->
              <span>1</span>
            </div>
           
            <div :style="{'--translateX2' : translateX2,'--translatescale2':translatescale2,'--translateY2':translateY2}">
                <div></div>
               <span>2</span>
            </div>

            <div :style="{'--translateX' : translateX,'--translatescale':translatescale,'--translateY':translateY}">
                <div></div>
                <span>这里是我写文字的地方啊!!!</span>
            </div>

            <div>
                <div></div>
              <span>4</span>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    name:'Activity',
    data(){
        return{
            translateX:0,
            translateX2:0,
            translateX3:0,
            translatescale:0,
            translatescale2:0.9,
            translatescale3:0.8,
            translateY:0,
            translateY2:"-10%",
            translateY3:"-20%",
        }
    },
       mounted(){
             document.querySelector('.card').addEventListener('scroll', this.getScroll)
       },
       methods:{
           getScroll() {
	            const html=this.$refs.cardRef
                //html.clientWidth 页面宽度
                let scrolled = html.scrollLeft/(html.scrollWidth-html.clientWidth)
                let progrssX=scrolled/0.01
               
                // console.log('scrolled:',progrssX)
                //X位移 

                // console.log(scrolled)
                if(scrolled<=0.5){
                this.translateX2=(progrssX)*3/this.translatescale2+'%';
                this.translateX3=(progrssX)*3/this.translatescale3+'%';
                }
                if(0.5<scrolled<=1)
                {
                     this.translateX3=(progrssX)*3/this.translatescale3+'%';
                }

                // 缩放
                let progrssScale=scrolled/1
                this.translatescale=1;
                if(progrssScale<0.5){
                    this.translatescale2=0.9+(progrssScale*0.2);
                }
                this.translatescale3=0.8+(progrssScale*0.2);
                //y位移
                this.translateY=1;
                if(progrssScale<0.5){
                this.translateY2=-10+(20*progrssScale)+"%";
                }
              
                this.translateY3=-20+(20*progrssScale)+"%";
                // console.log(  (this.translateY2.slice(0,-2)-0).toFixed(2))




                //旋转



                // // console.log(progrss)
                // if(progrss>=1) progrss=1
                // else if(progrss<=0) progrss=0
                // else {
                // this.b=1-(progrss*0.16)
                // this.opacity=1-progrss*3
                // }
            },
       }
   

}
</script>

<style lang="less" scoped>

.conter{
    // overflow: hidden;
    box-sizing: border-box;
    padding: 0 2vw;
    width: 100%;
    height: auto;
    background-color: #fff;
    &>p{
    font-size: 16px;
    font-weight:bold;
}
    .card{
        // display: flex;
        width: 100%;
        height: 20vh;
 
        overflow: auto;
        position: relative;
        >div{

            width: 99.5%;
            height: 15vh;
            position: absolute;
            top: 2vh;
            overflow:hidden;
            border-top: #dfe6e9  1px solid;
            border-right: #dfe6e9  1px solid;
            background-color: #fff;
            div{
                width: 50%;
                height: 20vh;
                background-color:#808080;
                background-image: url(/src/assets/carousel01.jpg);
                background-size:cover;
                background-position-x: -100px;
                background-position-y: -100px;
            }
            span{
                position:absolute;
                font-weight:bold;
                font-size: 10px;
                top: 5%;
                left: 52%;
             

            }
           
        }
        >div:nth-child(1){
            // background-color: red;
            transform: translateY(var(--translateY3))  scale(var(--translatescale3)) translateX(var(--translateX3));
        }
        >div:nth-child(2){
            // display: none;
            // background-color: blue;
            transform: translateY(var(--translateY2))  scale(var(--translatescale2)) translateX(var(--translateX2));
        }
         >div:nth-child(3){
            //  display: none;
            // background-color:blueviolet;
             transform: translateX(var(--translateX)) ;
            //  margin-left: 15%;
        }
         >div:nth-child(4){
             z-index: -1;
            // background-color: #000;
             transform: translateX(300%);
            // flex: 1;
        }
        
    }
    // 让滚动条消失
    // .card::-webkit-scrollbar {display:none}

}





</style>

