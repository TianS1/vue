<template>
  <div id="two">
    <ul v-for="data in data2">
      <li>{{data.name}}--{{data.price}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "two",
    computed:{
      data(){
        return this.$store.state.data;
      },
      data2(){
        return this.$store.getters.sel;
      }
    }
  }
</script>

<style scoped>

</style>
