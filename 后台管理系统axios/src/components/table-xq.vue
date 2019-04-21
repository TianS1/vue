<template>
    <div class="datails container" >
      <router-link class="btn btn-default" to="/table">返回</router-link>
      <h2 class="page-header">
        {{table.name}}
        <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/'+table.id">编辑</router-link>
          <button class="btn btn-danger" @click="deleteTable(table.id)">删除</button>
        </span>
      </h2>
      <ul class="list-group">
        <li class="list-group-item">
          <span class="glyphicon glyphicon-asterisk">{{table.phone}}</span>
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-asterisk">{{table.email}}</span>
        </li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item">
          <span class="glyphicon glyphicon-asterisk">{{table.xueli}}</span>
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-asterisk">{{table.scholl}}</span>
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-asterisk">{{table.zhiye}}</span>
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-asterisk">{{table.text}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "table-xq",
      data(){
          return{
            table:[]
          }
      },
      methods:{
        fetchTable(id){
          this.$http.get("http://localhost:3000/users/"+id)
            .then( (responent)=> {
              //console.log(responent);
              this.table=responent.data;
            })
        },
        deleteTable(id){
          this.$http.delete("http://localhost:3000/users/"+id)
            .then( (responent)=> {
              this.$router.push({path:"/table",query:{alert:"用户信息删除成功"}})
            })
        }
      },
      created(){
          this.fetchTable(this.$route.params.id);
      }
    }
</script>

<style scoped>

</style>
