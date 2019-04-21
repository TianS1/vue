<template>
    <div class="container">
     <alert v-if="alert" v-bind:message="alert"></alert>
        <h2>用户管理系统</h2>
      <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
      <table class="table table-striped table-hover">

        <thead >
        <tr >
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr class="success" v-for="table in filterby(tables,filterInput)">
          <td>{{table.name}}</td>
          <td>{{table.phone}}</td>
          <td>{{table.email}}</td>
          <td>
            <router-link class="btn btn-default" :to="'/table/'+table.id">
              详情
            </router-link>
          </td>
        </tr>
        </tbody>
      </table>

    </div>
</template>

<script>
  import alert from './alert'
    export default {
        name: "header-table",
      data(){
          return{
            tables:[],
            alert:"",
            filterInput:""
          }
      },
      methods:{
          fetchTable(){
               this.$http.get("http://localhost:3000/users")
                 .then( (responent)=> {
                  // console.log(responent);
                   this.tables=responent.data;
                 })
          },
        filterby(tables,value){
            return tables.filter(function (table) {
              return table.name.match(value);
            })
        }
      },
      created(){
          if(this.$route.query.alert){
            this.alert=this.$route.query.alert;
          }
          this.fetchTable();
      },
      updated(){
        this.fetchTable();
      },
      components:{
          alert
      }
    }
</script>

<style scoped>

</style>
