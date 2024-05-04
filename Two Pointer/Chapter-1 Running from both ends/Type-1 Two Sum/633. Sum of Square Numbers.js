var judgeSquareSum = function(c) {
    let left = 0
    let right = Math.floor(Math.sqrt(c))
    
    while(left <= right){
        let sqSum = (left*left) + (right*right)

        if(sqSum == c){
            return true
        }
        else if(sqSum > c){
            right--
        }
        else{
            left++
        }
    }
    return false
};