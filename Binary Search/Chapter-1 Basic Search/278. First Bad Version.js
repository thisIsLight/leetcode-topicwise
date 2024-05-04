var solution = function(isBadVersion) {
    /**
    * @param {integer} n Total versions
    * @return {integer} The first bad version
    */
    
    return function(n) {
        let res = -1
        let left = 0
        let right = n
        while(left <= right){
            let mid = left + Math.floor((right-left)/2)
            if(isBadVersion(mid)){
                res = mid
                right = mid-1
            }
            else{
                left = mid+1
            }
        }
        return res
    };
};