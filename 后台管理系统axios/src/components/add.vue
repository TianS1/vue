<template>
    <div class="container">
      <alert v-if="alert" :message="alert"></alert>
      <h1 class="page-header">添加用户</h1>
      <form action="" v-on:submit="addTable">
        <div class="well">
          <h4>用户信息</h4>
          <div class="form-group">
            <label >姓名</label>
            <input type="text" class="form-control" placeholder="name" v-model="table.name">
          </div>
          <div class="form-group">
            <label >电话</label>
            <input type="text" class="form-control" placeholder="phone" v-model="table.phone">
          </div>
          <div class="form-group">
            <label >邮箱</label>
            <input type="text" class="form-control" placeholder="email" v-model="table.email">
          </div>
          <div class="form-group">
            <label >学历</label>
            <input type="text" class="form-control" placeholder="xueli" v-model="table.xueli">
          </div>
          <div class="form-group">
            <label >毕业学校</label>
            <input type="text" class="form-control" placeholder="scholl" v-model="table.scholl">
          </div>
          <div class="form-group">
            <label >职业</label>
            <input type="text" class="form-control" placeholder="zhiye" v-model="table.zhiye">
          </div>
          <div class="form-group">
            <label >个人简介</label>
            <textarea  rows="3" class="form-control" v-model="table.text"></textarea>
          </div>
          <button type="submit" class="btn btn-info">提交</button>
        </div>
      </form>
    </div>
</template>

<script>
  import alert from './alert'
    export default {
        name: "add",
      data(){
          return{
            table:{},
            alert:""
          }
      },
      methods:{
          addTable(e){
            //console.log(123)
            if(!this.table.name||!this.table.phone||!this.table.email){
             this.alert="请添加相应的信息";
            }else{
              let newTable={
                name:this.table.name,
                phone:this.table.phone,
                email:this.table.email,
                xueli:this.table.xueli,
                scholl:this.table.scholl,
                zhiye:this.table.zhiye,
                text:this.table.text
              }
              this.$http.post("http://localhost:3000/users",newTable)
                .then((responent)=>{
                  //console.log(responent);
                  this.$router.push({path:"/table",query:{alert:"用户信息添加成功"}});
                })
              e.preventDefault();
            }
            e.preventDefault();//阻止默认submit事件
          }
      },
      components:{
          alert
      }
    }
</script>

<style scoped>

</style>
