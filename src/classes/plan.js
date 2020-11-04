export class Plan{
    constructor({ id = 1,
                    list_id = 1,
                    title = '',
                    description = '',
                    priority = 0,
                    complete = false,
                    date_create = new Date(),
                    date_change = new Date() }){
        this.id = id
        this.list_id = list_id
        this.title = title
        this.description = description
        this.priority = priority
        this.complete = complete
        this.created = new Date(date_create)
        this.changed = new Date(date_change)
    }
}
