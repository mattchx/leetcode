// Remove Nth Node From End of List
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
    function method1(head){
        if(head == null ||(head.next== null && n==1)) return null
        
        let first = new ListNode(-1)
        first.next = head // first is first, head is second
        
        // find the length
        let length = 0
        let t = head
        while (t) {
            length++
            t = t.next
        }
        
        for(let i = 0; i< length-n;i++) first=first.next
        console.log(first.next, first.next.next, head)
        
        if(first.next == head){
            head = head.next
            return head
        }
        first.next = first.next.next
        
        return head;
    }
    
    function method2(head){
        if(head == null ||(head.next== null && n==1)) return null
        let first = new ListNode(-1)
        first.next = head
        let second = first
        
        for (let i = 0;i< n;i++){
            if(!second.next) return head
            second = second.next
        }
        
        while(second.next){
            //console.log(second.next, head)
            first = first.next
            second = second.next
        }
        console.log(first.next, head)
        if(first.next == head){
            head = head.next
            return head
        }
        
        first.next = first.next.next
        return head
    }
    
    
    return method2(head)
}
