
let items = [];

class Stack{

    push(value){
        items.push(value);
    };

    pop(){
        return items.pop();
    };

    isEmpty(){
        return items.length === 0;
    }
}

export default Stack;