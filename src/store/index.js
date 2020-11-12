import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {List, Plan, Sort} from "@/classes";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoUrl: 'https://sa-mysite-anchousi.herokuapp.com',
    token: '1|XqkJHQC2Pocys7tiXsPQnFVSv0rCT2nyyp860syv',
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
    GetLists({state, getters }){
        return new Promise((resolve,reject) => {
            state.listsOnLoad = true
            axios.get(`${state.todoUrl}/api/to_do_list/lists/get?count=99`, getters.reqConfig)
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
      CreateList({state, getters}, title){
        return new Promise(((resolve, reject) => {
            axios.post(`${state.todoUrl}/api/to_do/lists/create`, {title}, getters.reqConfig)
                .then(res => {
                    console.log(res)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        }))
    },
    DeleteList({state, getters}, id){
        return new Promise((resolve, reject) => {
            axios.delete(`${state.todoUrl}/api/to_do/lists/delete/${id}`, getters.reqConfig)
                .then(res => {
                    console.log(res)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    CreatePlan({state, getters}, plan = new Plan({title:'test', description:'test', priority: 1, list_id: 6})){
        return new Promise((resolve, reject) => {
            axios.post(`${state.todoUrl}/api/to_do/plans/create/${plan.list_id}`, plan, getters.reqConfig)
                .then(res => {
                    console.log(res)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })

    },
    DeletePlan({state, getters}, {id}){
        return new Promise(((resolve, reject) => {
            axios.delete(`${state.todoUrl}/api/to_do/plans/delete/${id}`, getters.reqConfig)
                .then(res => {
                    console.log(res)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        }))
    }
  },
    getters:{
      onLoad(state){
          return state.listsOnLoad
      },
      reqConfig(state){
          return {
              headers: {
                  Authorization: `Bearer ${state.token}`
              }
          }
      }
    },
  modules: {
  }
})
