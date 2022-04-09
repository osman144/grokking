// Easy
// ============ Reverse a LinkedList ==============

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
    this.length = 0
  }

  insert(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode
    }else{
      this.tail.next = newNode; // point to the new node
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }

  print(){
    let arr = [];
    let current = this.head;
    while(current){
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  reverse(){
    // swap the heads and the tail
    let current = this.head; // 1
    this.head = this.tail; // 4
    this.tail = current; // 1

    let prev = null;
    let next;
    while(current){
      next = current.next // 2
      current.next = prev // update pointer
      prev = current; // 1
      current = next // 2
    }
  }
}

let ll = new LinkedList()
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(5);

ll.print()
ll.reverse();
ll.print();


