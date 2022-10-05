// Easy
// ============ LinkedList Cycle ==============

/*
  Given the head of a Singly LinkedList, write a function to determine if the LinkedList 
  has a cycle in it or not.
**/

// Solve using fast/slow pointer

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
// head.next.next.next.next.next.next = head.next.next; // back to 3
head.next.next.next.next.next.next = null;

function fastSlow(head){
  // eventually should meet
  let slowPointer = head;
  let fastPointer = head; // move 2 paces

  while(fastPointer){
    slowPointer = slowPointer.next // move 1 node
    fastPointer = fastPointer.next.next // move 2 nodes

    if(slowPointer === fastPointer){
      return true;
    }
  }

  return false;
}

console.log(fastSlow(head));