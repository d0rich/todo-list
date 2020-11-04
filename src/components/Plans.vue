<template>
  <div class="plans-wrap">
    <b-button class="align-self-end m-1" variant="danger" @click="$router.push('/')">Закрыть</b-button>
    <div class="text-center h2">{{list.title}}</div>
    <b-list-group class="plans">
      <b-list-group-item v-for="plan in list.plans" :key="plan.id" >
        <b-checkbox class="row" v-model="plan.complete" >
          <div class="row no-gutters">
            <div class="col-2 mx-1">{{plan.title}}</div>
            <div class="col-3 mx-1">Создано: {{DateToString(plan.created)}}</div>
          </div>
        </b-checkbox>
      </b-list-group-item>
    </b-list-group>
    <div class="px-1">
      <b-input placeholder="Введите план" v-model="newPlan.title" />
    </div>
    <b-button class="align-self-end m-1" variant="primary" @click="NewPlan">Создать план</b-button>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {Plan} from "@/classes";
export default {
name: "Plans",
  data(){
    return{
      newPlan: {
        title: '',
        list_id: this.$route.params.list_id,
        priority: 1
      }
    }
  },
  computed:{
    ...mapState(['lists']),
    list(){
      return this.lists.find(list => list.id === this.$route.params.list_id)
    }
  },
  methods:{
    ...mapActions(['CreatePlan']),
    NewPlan(){
      let newPlan = new Plan(this.newPlan)
      this.CreatePlan(newPlan)
        .then(() => {
          this.list.GetPlans()
          this.newPlan = {
            title: '',
            list_id: this.$route.params.list_id,
            priority: 1
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
}
.plans{
  overflow-y: auto;
  height: 100%;
}
</style>
