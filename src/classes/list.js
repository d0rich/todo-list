import axios from 'axios'
import {Plan, Sort} from "@/classes";
import store from '@/store'
export class List{
    constructor({ id = 1,
                    title = '',
                    undone = 0,
                    created_at = new Date(),
                    updated_at = new Date() }){
        this.id = id
        this.title = title
        this.undone = undone
        this.created = new Date(created_at)
        this.changed = new Date(updated_at)
        this.plans = []
        this.GetPlans()
    }

    GetPlans(){
        axios.get(`${store.state.todoUrl}/api/to_do_list/plans/get/${this.id}`, store.getters.reqConfig)
            .then(res => {
                this.plans = []
                res.data.forEach(plan => {
                    this.plans.push(new Plan(plan))
                })
                this.plans.sort(Sort.byAttrDesc('created'))
        })
    }
    get undoneLocal(){
        return this.plans.filter(plan => !plan.complete).length
    }
    get type(){
        if (this.plans.length === 0) return 1 //Список без дел
        if (this.undoneLocal > 0) return 2 //Выполнены не все дела
        else return 3 //Выполнены все дела
    }
    get color(){
        if (this.type === 1) return 'white'
        if (this.type === 2) return '#b8ef8b'
        else return '#cfcdcd'
    }
    get link(){ return {name: 'List', params:{ list_id: this.id } } }
}
