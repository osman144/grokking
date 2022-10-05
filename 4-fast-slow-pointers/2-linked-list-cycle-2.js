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
head.next.next.next.next.next.next = head; // back to 3

function cycle(head){
  let slow = head;
  let fast = head;
  let isCycle = false;
  let slowTwo = head;

  while(fast !== null && fast.next !== null){
    fast = fast.next.next;
    slow = slow.next;
    if(slow === fast){
      isCycle = true;
      break;
    };
  };

  while(isCycle){
    if(slow.val === 1 && slowTwo.val === 1) return slow.val;
    slowTwo = slowTwo.next;
    slow = slow.next;
    if(slowTwo === slow){
      return slow.val;
    }
  }

  return false;
}

console.log(cycle(head));