<template>
    <div id="one">
      <ul v-for="data in data2">
        <li>{{data.name}}--{{data.price}}</li>
      </ul>
      <button @click="down(4)">减价</button>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

    export default {
        name: "one",
      computed:{
        data(){
          return this.$store.state.data;
        },
        data2(){
          return this.$store.getters.sel;
        }
        /*...mapGetters([
          "sel"
        ])*/
      },
      methods:{
          /*down:function (a) {
            /!*this.$store.state.data.forEach(pro=>{
              pro.price-=1;
            })*!/
            // this.$store.commit("down");
            this.$store.dispatch("down",a);
          }*/
        ...mapActions([
          "down"
        ])
      }
    }
</script>

<style scoped>

</style>
