<template>
  <div id="app">
   <one></one>
    <hr>
    <two></two>
    <hr>
    <three @show="updata($event)" ></three>
    {{title}}
  </div>
</template>

<script>
import one from './components/one'
import two from './components/two'
import three from './components/three'

// var data=[
//   {"name":"马云","price":"200亿"},
//   {"name":"马云2","price":"200亿"},
//   {"name":"马云3","price":"200亿"}
// ]
export default {
  name: 'App',
  data(){
    return{
       title:"aaaaa"
    }
  },
  components: {
    one,
    two,
    three
  },
  methods:{
    updata(val){
    this.title=val;
    }
  }
}
</script>

<style>

</style>
