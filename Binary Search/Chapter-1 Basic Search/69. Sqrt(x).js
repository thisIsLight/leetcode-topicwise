var mySqrt = function(x) {
    let res = 0
    let start = 0
    let end = x
    while(start <= end){
        let mid = start + Math.floor((end-start)/2)
        if(mid*mid == x){
            return mid
        }
        else if(mid*mid < x){
            res = mid
            start = mid+1
        }
        else{
            end = mid-1
        }
    }
    return res
};