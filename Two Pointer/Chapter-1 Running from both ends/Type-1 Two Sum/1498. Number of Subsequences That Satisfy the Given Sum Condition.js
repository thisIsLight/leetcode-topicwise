var numSubseq = function(nums, target) {
    nums.sort((a,b) => {
        return a-b
    })
    let res = 0
    let left = 0
    let right = nums.length-1
    let pow = power(2, nums.length+1)
    while(left <= right){
        if(nums[left] + nums[right] <= target){
            let subcs = pow[right-left]
            res = (res + subcs)%1000000007
            left++
        }
        else{
            right--
        }
    }
    return res
};

const power = (a, b) => {
    let res = [1]
    for(let i=1;i<b;i++){
        res[i] = (res[i-1]*2)%1000000007
    }
    return res
}