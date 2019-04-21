<template>
    <div id="three">
      <p @click="update">点我改变</p>
    </div>
</template>

<script>
    export default {
        name: "three",
      methods:{
        update:function () {
          this.$emit("show","子传父")
        }
      }
    }
</script>

<style scoped>

</style>
