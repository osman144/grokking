// // Easy
// ============ Length LinkedList Cycle ==============

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
head.next.next.next.next.next.next = head.next.next; // back to 3

function cycle(head){
  let slow = head;
  let fast = head;

  while(fast.next !== null && slow.next !== null){
    fast = fast.next.next; // add 2
    slow = slow.next; // add 1
    if(fast === slow){
      return lengthCounter(slow);
    }
  }

  return false;
}

function lengthCounter(slow){
  let current = slow;
  let counter = 0;

  while(true){
    current = current.next;
    counter = counter + 1;
    if(current === slow){
      break;
    }
  }

  return counter;
}

console.log(cycle(head));