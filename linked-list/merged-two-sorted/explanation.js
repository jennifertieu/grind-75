/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = ListNode(); // one technique is creating a dummy node to not worry about the end case of inserting into an empty list
  let tail = dummy;

  // check that both list are not empty
  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1; // set new list next to node
      list1 = list1.next; // set pointer to next node
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    // update tail pointer
    tail = tail.next;
  }

  // check if either list are not empty, add the remaining nodes to the list
  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
  }

  return dummy.next; // return the head of the sorted node linked list
};
