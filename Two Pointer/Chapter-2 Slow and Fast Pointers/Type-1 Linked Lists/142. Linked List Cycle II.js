var detectCycle = function(head) {
    if(head === null){
        return null
    }
    
    if(head.next === head){
        return head
    }
    if(head.next === null){
        return null
    }
    
    
    let fast = head
    let slow = head
    
    while(fast?.next){
        fast = fast.next.next
        slow = slow.next
          
        if(fast === slow){
            break
        }
    }
    if(fast !== slow){
        return null
    }

    while(head !== fast){
        head = head.next
        fast = fast.next
    }        
    
    return head
};