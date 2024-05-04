var removeNthFromEnd = function(head, n) {
    let res = head
    n = n-1
    while(head.next){
        if(n == 0){
            break
        }
        head = head.next
        n--
    }

    let remove = res
    let prev = null

    while(head.next){
        prev = remove
        remove = remove.next
        head = head.next
    }

    if(prev == null){
        return res.next
    }
    prev.next = remove.next
    return res
};