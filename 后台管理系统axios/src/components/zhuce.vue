<template>
  <div id="zhuce"  >
    <div class="well col-lg-4 col-md-5 col-sm-6 col-xs-10 col-lg-offset-4 col-md-offset-3.5 col-sm-offset-3 col-xs-offset-1">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title text-center">
            注册
          </h3>
        </div>
        <div class="panel-body">
          <form role="form" @submit="adduser">
            <div class="form-group">
              <label for="name">用户名</label>
              <input type="text" class="form-control" id="name" placeholder="请输入名称" v-model="users.name">
            </div>
            <div class="form-group">
              <label for="pwd">密码</label>
              <input type="password" class="form-control" id="pwd" placeholder="请输入名称" v-model="users.password">
            </div>
            <button type="submit" class="btn btn-default btn-sm btn-block btn-info"6>注册</button>
          </form>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "zhuce",
    data(){
      return{
        users:{}
      }
    },
    methods:{
      adduser(e){
        if(!this.users.name || !this.users.password){
          alert('请输入完整信息')
        }else{
          let newuser={
            name:this.users.name,
            password:this.users.password,
          }
          this.$http.post("http://localhost:3000/password",newuser)
            .then((responent)=>{
              console.log(aa);
            })
          this.$router.push({path:"/"});
          e.preventDefault();
        }
        e.preventDefault();
      }
    }
  }
</script>

<style scoped>
  #zhuce{
    margin-top: 100px;
  }
</style>
