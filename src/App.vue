<template>
  <div id="app" class="bg-secondary">
    <transition name="fade">
      <div v-if="onLoad" id="nav">
        <b-spinner label="Загрузка" variant="primary" style="z-index: 1001; width: 5rem; height: 5rem;" />
      </div>
    </transition>
    <router-view/>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'app',
  components:{
  },
  computed:{
    ...mapGetters(['onLoad'])
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
#nav{
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0, 0.3);
}
.hr{
  margin: 1rem 0;
  height: 2px;
  width: 95%;
  border-radius: 100px;
  background-color: #565656;
  align-self: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-move{
  transition: transform .5s ease;
}
</style>
