import axios from 'axios'
import store from '@/store'
export class Plan{
    constructor({ id = 1,
                    list_id = 1,
                    title = '',
                    description = '',
                    priority = 0,
                    complete = false,
                    created_at = new Date(),
                    updated_at = new Date() }){
        this.id = id
        this.list_id = list_id
        this.title = title
        this.description = description
        this.priority = priority
        this.complete = complete
        this.created = new Date(created_at)
        this.changed = new Date(updated_at)
    }
    MarkPlanComplete(){
        if (!this.complete){
            axios.post(`${store.state.todoUrl}/api/to_do_list/plans/change/${this.id}/${this.list_id}`, this, store.getters.reqConfig)
                .then(res => {
                    console.log(res)
                    this.complete = true
                })
                .catch(() => {
                    this.complete = false
                })

        }
        else{
            axios.post(`${store.state.todoUrl}/api/to_do_list/plans/change/${this.id}/${this.list_id}`, this, store.getters.reqConfig)
                .then(res => {
                    console.log(res)
                    this.complete = false
                })
                .catch(() => {
                    this.complete = true
                })
        }
    }
    get important(){
        return this.priority > 3
    }

}
