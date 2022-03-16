<template>

  

  <div class="jj">
    <!-- 添加按钮 -->
    <div class="inpnt_color">
    <el-button  type="primary" @click="dialogVisible=true">添加信息</el-button>

    <!-- 查询input -->
    <el-input
      v-model="listinputform"
      class="w-10 m-2"
      placeholder="问题查询"
      suffix-icon="Search"
      clearable
     
    />
    </div>
   

    <!-- 添加信息对话框 -->
    <el-dialog
    v-model="dialogVisible"
    title="添加信息"
    width="30%"
   @close="onclose"
  >
  
        <!-- 添加表单 -->
    
    <el-form ref="formRef" :model="form" label-width="120px" :rules="formRules">
        <el-form-item label="问题描述" prop="question">
            <el-input v-model="form.question" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="问题解答" prop="response">
            <el-input v-model="form.response" type="textarea"></el-input>
        </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.prevent="onAddNewXzd"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>


   

    <!-- 校知道表格 -->
    <el-table :data="xzdList" style="width: 100%" stripe  border>
    
    <el-table-column type="index" label="id" width="150" />
    <el-table-column prop="question" label="问题解释" width="300" />
    <el-table-column  label="答案" prop="response" width="300"/>
    <el-table-column  label="状态" prop="is_delete.data[0]" width="250"/>

    <!-- <eltable-column prop="is_delete" label="审核状态" width="250" /> -->
    <el-table-column label="创建时间" width="250" >
       <template #default="scope">
           <!-- 时间图标 -->
           <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.add_time }}</span>
        </div> 
      </template>
    </el-table-column>

    <el-table-column label="操作" >
        <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
            size="small"
            type="danger"
            @click="handleDelete( scope.row.id)"
            >删除</el-button>
      </template>
    </el-table-column>

  </el-table>
      <div class="example-pagination-block">
  
    <el-pagination
      v-model:currentPage="fenye.currentPage"
      v-model:page-size="fenye.pagesize"
      :page-sizes="[5, 10, 15]"
     
      layout="sizes, prev, pager, next, jumper"
      :total="fenye.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
 
  </div>
</template>




<script>

import debounce from '../debounce'


export default {
    name:'XzdList',
    data(){
        return{
            //input 搜索节流
            listinputform:'',
            ccc:true,
            xzdList:[],
            fenye:{
                currentPage:1,
                pagesize:15,
                total:0
            },
            //添加的对话框显示隐藏状态
            dialogVisible:false,
            // 表单数据
            form:{
                
            },
            //表单验证
            formRules :{
                 question: [
                        {
                            required: true,
                            message: '请输入问题描述',
                            trigger: 'blur',
                        },
                        {
                        min: 3,
                         max: 50,
                        message: '问题描述太短',
                        trigger: 'blur',
                        },
                      
                    ],
                //  response: [
                //         {
                //             required: true,
                //             message: '请输入问题描述',
                //             trigger: 'blur',
                //         },
                //         {
                //         min: 3,
                //          max: 50,
                //         message: '问题描述太短',
                //         trigger: 'blur',
                //         },
                      
                //     ],
                
            }
        }
    },
    created(){
        this.getXzdList()
        console.log(this.xzdList)
    },
    //搜索框监听
    watch: {
	    'listinputform': {
	      deep: true,
	      handler(newVal, oldVal) {
	        // if (newVal.trim().length !== 0) {
	         //this.getList是methods中延迟后调用的方法 延迟500ms
	        this.debounce(this.getList, 500) 
	        // }
	      }
	    }
	  },

    methods:{
       async getXzdList(){
        const {data:res}= await  this.$http.get('/api/xzd/get',{params:{currentPage:this.fenye.currentPage,
        pagesize:this.fenye.pagesize
            
        }})
        if(res.status !==0) return this.$message.error('数据刷新失败')
    
        this.fenye.total=res.all
        this.xzdList=res.message
       

        },
        handleEdit(){
            console.log('修改')
        },


        //确认删除
        async handleDelete(id){
     
        const tishi= await this.$confirm(
        '确定要删除这条信息吗?',
        '警告',
         {
             confirmButtonText: '确定',
             cancelButtonText: '取消',
             type: 'warning',
         }).catch(err=>err)
         //catch捕获错误
            if(tishi !=='confirm') return this.$message.info('取消了删除')
            await this.$http.post('/api/xzd/del2',{'id':id})
            this.getXzdList()
            this.$message.success('删除成功')
            
        },


        //监听对话框关闭
        onclose(){
            //重置表单
            this.$refs.formRef.resetFields()
        },
        onAddNewXzd(){
            // 对整个表单进行校验 validate
            this.$refs.formRef.validate( async (valid)=>{
               if(valid!=true) return this.$message.error('添加失败');
               //执行添加业务
                const {data:res}= await this.$http.post('/api/xzd/add',this.form)
              
                this.dialogVisible=false;
                this.getXzdList()
                this.$message.success('添加成功')
            })
            
        },
        // 分页
        handleSizeChange(a){
            this.fenye.pagesize=a
                this.getXzdList()
               
        }
        ,
        handleCurrentChange(b){
               this.fenye.currentPage=b
                console.log(b)
               this.getXzdList()
        },
        //防抖函数
        debounce(fn, wait) {
	      if (this.timer !== null) {
	        clearTimeout(this.timer)
	      }
	      this.timer = setTimeout(fn, wait)
	    },
        //搜索框请求
       async getList(){
            const {data:res}=await this.$http.get('/api/xzd/like_get',{
                params:{
                    question:this.listinputform
                }
            })
            if(res.status!==0) return
            this.xzdList=res.message
           
           

        }




        
    }

}
</script>

<style lang='less' scoped>
.el-table{
    padding-top: 10px;
}

.example-pagination-block{
    margin-top: 10px;
}
.jj{
    width: 85%;
    padding: 10px 10px;
    .el-input{
        width: 200px;
        margin-left: 20px;
    }
    // height: 93vh;
}
.inpnt_color{
    background-color: #fff;
    padding: 10px; 
}
  

</style>