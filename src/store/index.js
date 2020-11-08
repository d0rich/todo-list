import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {List, Plan, Sort} from "@/classes";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoUrl: 'https://sa-mysite-anchousi.herokuapp.com',
    plans: [],
    lists: [],
    listsOnLoad: false
  },
  mutations: {
      DeleteListLocally(state, list = new List({})){
          state.lists.splice(state.lists.indexOf(list), 1)
      },
      DeletePlanLocally(state, plan = new Plan({})){
          state.lists.find(l => l.id === plan.list_id)
              .plans.splice(state.lists.find(l => l.id === plan.list_id).plans.indexOf(plan), 1)
      }
  },
  actions: {
    GetLists({state}){
        return new Promise((resolve,reject) => {
            state.listsOnLoad = true
            axios.get(`${state.todoUrl}/api/GetLists?count=99`)
                .then(res => {
                    console.log(res)
                    state.lists = []
                    res.data.forEach(list => {
                        state.lists.push(new List(list))
                    })
                    state.lists.sort(Sort.byAttr('title'))
                    state.listsOnLoad = false
                    resolve()
                })
                .catch(err =>{
                    state.listsOnLoad = false
                    reject(err)
                })

        })

    },
    CreateList({state}, title){
        return new Promise(((resolve, reject) => {
            axios.post(`${state.todoUrl}/api/CreateList`, {title})
                .then(res => {
                    console.log(res)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        }))
    },
    DeleteList({state}, id){
        return new Promise((resolve, reject) => {
            axios.delete(`${state.todoUrl}/api/DeleteList/${id}`)
                .then(res => {
                    console.log(res)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    CreatePlan({state}, plan = new Plan({title:'test', description:'test', priority: 1, list_id: 6})){
        return new Promise((resolve, reject) => {
            axios.post(`${state.todoUrl}/api/CreatePlan/${plan.list_id}`, plan)
                .then(res => {
                    console.log(res)
                    resolve()
                })
                .catch(err =>{
                    reject(err)
                })
        })

    }
  },
    getters:{
      onLoad(state){
          return state.listsOnLoad
      }
    },
  modules: {
  }
})
