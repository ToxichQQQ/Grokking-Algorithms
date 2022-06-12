// Stack  last in first out
// Стек Последним пришел первым вышел

class Stack {
    data;
        constructor() {
            this.data = []
        }

        show(){
            return this.data
        }

        add(value){
            this.data = [...this.data,value]
        }

        get(){
            if (this.data.length){
                return this.data.pop()
            }else{
                return null
            }
        }
}

const stack = new Stack()

stack.add(1) // [1]
stack.add(2)  // [1,2]
stack.add(3)  // [1,2,3]


stack.get()  // [1,2]
