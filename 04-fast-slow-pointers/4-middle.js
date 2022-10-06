// Easy
// ============ Middle of the LinkedList ==============

/*
Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.
**/

// Solve using fast/slow pointer

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

function middle(head){
  let slow = head;
    let fast = head;
    
  while(fast !== null && fast.next !== null){
      fast = fast.next.next;
      slow = slow.next;
  }
    
  return slow
}

// time complexity = O(n)

// space complexity = O(1)