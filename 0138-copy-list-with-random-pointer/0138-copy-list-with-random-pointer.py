"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""
class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        d = {None:None}
        dummy = Node(-1)
        cur, new_cur = head, dummy
        while cur:
            new_cur.next = d[cur] = Node(cur.val)
            cur, new_cur = cur.next, new_cur.next
        cur, new_cur = head, dummy.next
        while cur:
            new_cur.random = d[cur.random]
            cur, new_cur = cur.next, new_cur.next
        return dummy.next  