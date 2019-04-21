<template>
  <nav class="navbar navbar-default " role="navigation" id="header-nav" >
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target="#example-navbar-collapse">
          <span class="sr-only">切换导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">用户管理系统</router-link>
      </div>
      <div class="collapse navbar-collapse" id="example-navbar-collapse">
        <ul class="nav navbar-nav">
          <li ><router-link to="/" >主页</router-link></li>
          <li ><router-link to="/add">
            添加用户
          </router-link>
          </li>
          <li><router-link to="/about">关于我们</router-link></li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/zhuce">
              <span class="glyphicon glyphicon-user"></span>
              注册
            </router-link>
          </li>
          <li>
            <router-link to="/login">
              <span class="glyphicon glyphicon-log-in"></span>
              登录
            </router-link>
          </li>
        </ul>

      </div>
    </div>
  </nav>

</template>

<script>
    export default {
        name: "header-nav"
    }
</script>

<style scoped>

</style>
