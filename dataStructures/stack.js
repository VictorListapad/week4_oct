// Last In, First Out -> Stack
// First In, First Out -> Queue
class Stack {
  constructor() {
    this.values = [];
  }

  push(x) {
    this.values.push(x);
  }

  pop(x) {
    let val = this.values.pop(x);
    return val;
  }

  peek() {
    console.log(this.values[this.values.length-1]);
  }

  delete(str) {
    let temp = []
    for(let i = this.values.length-1; i >= 0; i--) {
      if (str == this.values[i]) {
        this.pop();
        break;
      }
      let value = this.pop();
      temp.push(value);
    }
    temp.forEach(value => {
      this.push(value);
    })
  }

  printAll() {
    this.values.forEach(value => {
      console.log(value);
    })
  }
}

let stack = new Stack();

stack.push("Forest Gump");
stack.push("Inception");
stack.push("Titanic");
stack.push("Whiplash");
stack.push("Boondoc saints");
stack.push("Social Network");
stack.push("Hancock");
stack.push("The Internship");
stack.push("Wedding Crashers");
stack.push("Silver Linnings Playbook");
stack.push("Hot Tub Time Machine");
stack.push("Pinneaple Express");

// stack.printAll();
stack.peek();

stack.delete("Hancock")

console.log("-------------- after deleting");

stack.printAll();

