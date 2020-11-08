<template>
  <div class="list-wrap">
    <b-list-group class="lists">
      <b-list-group-item v-for="list in lists" :key="list.id" :style="`background-color: ${list.color}`" >
        <div class="row no-gutters justify-content-between">
          <router-link :to="list.link" class="row no-gutters justify-content-between align-items-center">
            <div class="mx-1">{{list.title}}</div>
            <div class="mx-1">Невыполнено: {{list.undoneLocal}}</div>
          </router-link>
          <b-button class="mx-1" variant="danger" @click="DelList(list)">Delete</b-button>
        </div>

      </b-list-group-item>
    </b-list-group>
    <div class="px-1">
      <b-input placeholder="Название списка" v-model="newListTitle" />
    </div>
    <b-button class="align-self-end m-1" variant="primary" @click="NewList">Создать список</b-button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import {List} from "@/classes";
export default {
name: "Lists",
  data(){
  return{
    newListTitle:''
  }
  },
  computed:{
    ...mapState(['lists']),
    ...mapGetters(['onLoad'])
  },
  methods:{
    ...mapActions(['GetLists', 'CreateList', 'DeleteList']),
    ...mapMutations(['DeleteListLocally']),
    NewList(){
      this.CreateList(this.newListTitle)
        .then(() => {
          this.GetLists()
          this.newListTitle = ''
        })
    },
    DelList(list = new List({})){
      this.DeleteList(list.id)
          .then(() => {
            this.DeleteListLocally(list)
          })
    }
  }
}
</script>

<style scoped>
.list-wrap{
  height: 80vh;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  border: solid #212121 3px;
  border-radius: 10px;
}
.lists{
  overflow-y: auto;
  height: 100%;
}
</style>
