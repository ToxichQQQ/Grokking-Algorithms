class Queues {
    data;

    constructor() {
        this.data = []
    }

    add(value){
        this.data = [...this.data,value]
    }

    get(){
        if (this.data.length){
            return this.data.shift()
        }else{
            return null
        }
    }

    show(){
        return this.data
    }
}


const queues = new Queues()


queues.add(1)
queues.add(2)
queues.add(3)

console.log(queues.show())

queues.get()

console.log(queues.show())




