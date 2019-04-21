
<template>
  <div class="container">
    <alert v-if="alert" :message="alert"></alert>
  <div id="login" >
    <div class="well col-lg-4 col-md-5 col-sm-6 col-xs-10 col-lg-offset-4 col-md-offset-3.5 col-sm-offset-3 col-xs-offset-1">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title text-center">
            登录
          </h3>
        </div>
        <div class="panel-body">
          <form role="form" @submit="login">
            <div class="form-group">
              <label for="name">用户名</label>
              <input type="text" class="form-control" id="name" placeholder="请输入名称" v-model="user">
            </div>
            <div class="form-group">
              <label for="pwd">密码</label>
              <input type="password" class="form-control" id="pwd" placeholder="请输入名称" v-model="pwd">
            </div>
            <button type="submit" class="btn btn-default btn-sm btn-block btn-primary">登录</button>
            <router-link to="/zhuce" class="btn btn-default btn-sm btn-block btn-info">注册</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import alert from './alert'
  export default {
    name: "login",
    data(){
      return{
        user:"",
        pwd:"",
        alert:"",
        users:[]
      }
    },
    methods:{
      login(e){
        this.$http.get("http://localhost:3000/password")
          .then((responent)=>{
            //console.log(responent);
            this.users=responent.data;
           //console.log(this.users);
            this.users.forEach(usna=>{
              if(usna.name==this.user &&usna.password==this.pwd){
                this.$router.push({path:"/table",query:{alert:"用户登录成功"}});
              }else {
                this.$router.push({path:"/"});
                this.alert="请填写正确的用户名或密码";
              }
            })
            e.preventDefault();
          })
        e.preventDefault();
      }
    },
    components:{
      alert
    }
  }
</script>

<style scoped>
  #login{
    margin-top: 100px;
  }
</style>
