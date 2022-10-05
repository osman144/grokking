class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode; // update tail pointer
      this.tail = newNode;
    }
    this.length++;
    return this;
  };

  print(){
    let arr = [];
    let current = this.head;
    while(current){
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let ll = new LinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);
ll.push(6)