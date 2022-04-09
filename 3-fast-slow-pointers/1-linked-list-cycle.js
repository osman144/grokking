// Easy
// ============ LinkedList Cycle ==============

/*
  Given the head of a Singly LinkedList, write a function to determine if the LinkedList 
  has a cycle in it or not.
**/

// Solve using fast/slow pointer

function fastSlow(head){
  let slowPointer = head;
  let fastPointer = head;

  // while fast pointer not null
  while(fastPointer && fastPointer.val){
    slowPointer = slowPointer.next;
    slowPointer = fastPointer.next.next; // its ahead and moving by two places
    if(slowPointer === fastPointer){
      return true;
    }
  }

  return false;
}


// Design Gurus Additional Problem
// Given the head of a LinkedList with a cycle, find the length of the cycle.
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


function findCycleLength(head) {
  let slow = head, fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) { // found the cycle
      return calculateCycleLength(slow);
    }
  }
  return 0;
}

function calculateCycleLength(slow){
  let current = slow // 5
  let length = 0;
  // 1 -> 2 -> 3 -> 4 -> 5 -> 6
                                  
  while(true){
    current = current.next; // 5
    length = length + 1; // 4
    if(current === slow){
      break
    }
  }
  return length;
}

// function calculate_cycle_length(slow) {
//   let current = slow,
//     cycle_length = 0;
//   while (true) {
//     current = current.next;
//     cycle_length += 1;
//     if (current === slow) {
//       break;
//     }
//   }
//   return cycle_length;
// }


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next; // back to 3
console.log(`LinkedList cycle length: ${findCycleLength(head)}`);



