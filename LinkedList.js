class LinkedListNode{
    constructor(val,next= null) {
        this.value = val
        this.next = next
    }

    toString(){
        return `${this.value}`
    }
}


class LinkedList{
    constructor() {
        this.head = null
        this.tail = null
    }

    append(val){
        const newNode = new LinkedListNode(val)

        if (!this.head || !this.tail){
            this.head = newNode
            this.tail = newNode

            return this
        }

        this.tail.next = newNode

        this.tail = newNode

        return this
    }
}


const list = new LinkedList()



list.append('a').append('b').append('c')


console.log(JSON.stringify(list))
