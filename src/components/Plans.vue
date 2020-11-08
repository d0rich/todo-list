<template>
  <div class="plans-wrap">
    <b-button class="align-self-end m-1" variant="danger" @click="$router.push('/')">Закрыть</b-button>
    <div class="text-center h2">{{list.title}}</div>
    <b-list-group class="plans">

      <b-list-group-item v-for="plan in list.plans" :key="plan.id" >
        <div class="row no-gutters justify-content-between">
          <b-checkbox class="mx-1" @change="plan.MarkPlanComplete()" v-model="plan.complete" >
            {{plan.title}}
          </b-checkbox>
          <div class="mx-1">Создано: {{DateToString(plan.created)}}</div>
          <div class="h4 my-0 mx-1 ">
            <b-icon v-if="plan.important" icon="exclamation-circle-fill" variant="danger"></b-icon>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
    <div class="px-1">
      <b-input placeholder="Введите план" v-model="newPlan.title" />
    </div>
    <div class="row no-gutters align-items-center m-1 justify-content-end">
      <b-form-checkbox
          v-model="newPlan.important"
          class="mx-1"
      >
        Срочно
      </b-form-checkbox>
      <b-button class="mx-1" variant="primary" @click="NewPlan">Создать план</b-button>
    </div>

  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import {Plan} from "@/classes";
import {List} from "@/classes";
export default {
name: "Plans",
  data(){
    return{
      newPlan: {
        title: '',
        important: false
      }
    }
  },
  computed:{
    ...mapState(['lists']),
    ...mapGetters(['onLoad']),
    list(){
      if (this.onLoad){
        return new List({title: 'Загрузка...'})
      }
      else{
        let list = this.lists.find(list => list.id === this.$route.params.list_id)
        console.log(this.lists)
        console.log(list)
        if (list) return list
        else return new List({title: 'Ошибка: список не найден'})
      }
    }
  },
  methods:{
    ...mapActions(['CreatePlan']),
    NewPlan(){
      let newPlan = new Plan({...this.newPlan, list_id: this.$route.params.list_id, priority: this.newPlan.important ? 99 : 1})
      this.CreatePlan(newPlan)
        .then(() => {
          this.list.GetPlans()
          this.newPlan = {
            title: '',
            important: false
          }
        })
    }
  }
}
</script>

<style scoped>
.plans-wrap{
  height: 80vh;
  display: flex;
  flex-direction: column;
  border: solid #212121 3px;
  border-radius: 10px;
  max-width: 800px;
}
.plans{
  overflow-y: auto;
  height: 100%;
}
</style>
