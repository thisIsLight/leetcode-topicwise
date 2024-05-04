var splitArray = function(nums, k) {
    let  totalsum = 0
    for(let i=0;i<nums.length;i++){
        totalsum+=nums[i]
    }

    let start = 0
    let end = totalsum
    let res = 0
    while(start <= end){
        let mid = start + Math.floor((end-start)/2)

        if(isPossible(nums, mid, k)){
            res = mid
            end = mid-1
        }
        else{
            start = mid+1
        }
    }
    return res
};

const isPossible = (arr, cap, count) => {
    let k = 1
    let sum = 0

    for(let i=0;i<arr.length;i++){
        sum+=arr[i]

        if(sum > cap){
            k++
            sum = arr[i]
            if(sum > cap){
                return false
            }
        }

        if(k > count){
            return false
        }
    }
    return true
}