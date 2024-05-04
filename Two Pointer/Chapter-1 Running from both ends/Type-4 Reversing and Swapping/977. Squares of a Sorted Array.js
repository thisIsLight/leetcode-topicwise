var sortedSquares = function(nums) {
    let negs = []
    let pos = []
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] < 0){
            negs.push(nums[i])
        }
        else{
            pos.push(nums[i])
        }
    }
    let res = []
    let i=0
    let j=negs.length-1
    
    while(i < pos.length && j >= 0){
        let first = pos[i]*pos[i]
        let second = negs[j]*negs[j]
        
        if(first < second){
            res.push(first)
            i++
        }
        else if(second < first){
            res.push(second)
            j--
        }
        else{
            res.push(first)
            i++
        }
    }
    
    while(i < pos.length){
        let sq = pos[i]*pos[i]
        res.push(sq)
        i++
    }
    
    while(j >= 0){
        let sq = negs[j]*negs[j]
        res.push(sq)
        j--
    }
    return res
};