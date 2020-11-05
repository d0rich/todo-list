<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'app',
  components:{
  },
  methods:{
    ...mapActions(['GetLists'])
  },
  created() {
    this.GetLists()
  }
}
</script>
<style lang="scss">
@media screen and (max-width: 500px) {
  html{
    font-size: 10pt;
  }
}
</style>
