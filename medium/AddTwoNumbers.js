//You are given two non-empty linked lists representing two non-negative integer
//s. The digits are stored in reverse order, and each of their nodes contains a si
//ngle digit. Add the two numbers and return the sum as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the nu
//mber 0 itself.
//
//
// Example 1:
//
//
//Input: l1 = [2,4,3], l2 = [5,6,4]
//Output: [7,0,8]
//Explanation: 342 + 465 = 807.
//
//
// Example 2:
//
//
//Input: l1 = [0], l2 = [0]
//Output: [0]
//
//
// Example 3:
//
//
//Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//Output: [8,9,9,9,0,0,0,1]
//
//
//
// Constraints:
//
//
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading
// zeros.
//
// Related Topics Linked List Math Recursion
// 👍 12218 👎 2847


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
  let first_list = []
  let second_list = []

  while (l1) {
    first_list.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    second_list.push(l2.val);
    l2 = l2.next;
  }
  let num1 = BigInt(first_list.reverse().join(''));
  let num2 = BigInt(second_list.reverse().join(''));
  let num3 = num1 + num2;
  let num3_arr = num3.toString().split('').reverse().map(a => parseInt(a));

  // create your new LinkedList
  let newLl = new ListNode();
  let newLlObj = newLl;
  const newLllen = num3_arr.length;
  for (let i = 0; i < newLllen; i++) {
    newLlObj.next = new ListNode(num3_arr[i]);
    newLlObj = newLlObj.next
  }

  return newLl.next;
}
//leetcode submit region end(Prohibit modification and deletion)
