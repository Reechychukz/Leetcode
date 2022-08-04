/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head == null) return null;
    let count = 0;
    let node = head;
    let temp = head;
    //let index = count - n;
    while (node) {
        node = node.next;
        count++;
    }
    node = head;
    
    if (n - count == 0) return head.next;
    else {
        while (n < count && node !== 0) {
            temp = node;
            node = node.next;
            n++;
        }
    }
    
    if (node == null) return null;
    temp.next = node.next;
    return head;
    
};
