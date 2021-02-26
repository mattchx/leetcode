# 206. Reverse Linked List

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head is None or head.next is None:
            return head
        
        #Setup
        alreadyReversed, current = head, head.next
        alreadyReversed.next = None
        print(alreadyReversed)
        print(current)
        while current is not None:
            storePtr = current.next
            current.next = alreadyReversed
            
            alreadyReversed = current
            current = storePtr
            
        return alreadyReversed
