var minPairSum = function(nums) {
    nums.sort((a,b) => {
        return a-b
    })
    let max = 0
    let i=0
    let j = nums.length-1
    while(i<j){
        let sum  = nums[i]+nums[j]
        if(max <= sum){
            max = sum
        }
        i++
        j--
    }
    return max
};