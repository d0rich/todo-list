import axios from 'axios'
import {Plan, Sort} from "@/classes";
import store from '@/store'
export class List{
    constructor({ id = 1,
                    title = '',
                    undone = 0,
                    date_create = new Date(),
                    date_change = new Date() }){
        this.id = id
        this.title = title
        this.undone = undone
        this.created = new Date(date_create)
        this.changed = new Date(date_change)
        this.plans = []
        this.GetPlans()
    }

    GetPlans(){
        axios.get(`${store.state.todoUrl}/api/GetPlans/${this.id}`).then(res => {
            this.plans = []
            res.data.forEach(plan => {
                this.plans.push(new Plan(plan))
            })
            this.plans.sort(Sort.byAttr('created'))
        })
    }
    get undoneLocal(){
        return this.plans.filter(plan => !plan.complete).length
    }
    get type(){
        if (this.plans.length === 0) return 1
        if (this.undoneLocal > 0) return 2
        else return 3
    }
    get color(){
        if (this.type === 1) return 'white'
        if (this.type === 2) return '#b8ef8b'
        else return '#cfcdcd'
    }
    get link(){ return {name: 'List', params:{ list_id: this.id } } }
}
