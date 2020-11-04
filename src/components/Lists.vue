<template>
  <div class="list-wrap">
    <b-list-group class="lists">
      <b-list-group-item v-for="list in lists" :key="list.id" >
        <router-link :to="list.link" class="row">
          <div class="col-2 mx-1">{{list.title}}</div>
          <div class="col-3 mx-1">Невыполнено: {{list.undone}}</div>
          <div class="col-3 mx-1">Создано: {{DateToString(list.created)}}</div>
          <b-button variant="danger" @click="DelList(list)">Delete</b-button>
        </router-link>
      </b-list-group-item>
    </b-list-group>
    <div class="px-1">
      <b-input placeholder="Название списка" v-model="newListTitle" />
    </div>
    <b-button class="align-self-end m-1" variant="primary" @click="NewList">Создать список</b-button>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
import {List} from "@/classes";
export default {
name: "Lists",
  data(){
  return{
    newListTitle:''
  }
  },
  computed:{
    ...mapState(['lists'])
  },
  methods:{
    ...mapActions(['GetLists', 'CreateList', 'DeleteList']),
    ...mapMutations(['DeleteListLocally']),
    NewList(){
      this.CreateList(this.newListTitle)
        .then(() => {
          setTimeout(this.GetLists,1000)
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
