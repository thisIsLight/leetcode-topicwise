var shipWithinDays = function(weights, days) {
    let totalWeights = 0
    for(let i=0;i<weights.length;i++){
        totalWeights+=weights[i]
    }
    let res = -1
    let start = 0
    let end = totalWeights

    while(start <= end){
        let mid = start + Math.floor((end-start)/2)
        if(isPossible(weights, mid, days)){
            res = mid
            end = mid-1
        }
        else{
            start = mid+1
        }
    }
    return res
};

const isPossible = (arr, cap, days) => {
    let sum = 0
    let day = 1
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
        if(sum > cap){
            day++
            sum = arr[i]
            if(sum > cap){
                return false
            }
        }
        if(day > days){
            console.log(false, day)
            return false
        }
    }
    return true
}