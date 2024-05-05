var maxCoins = function(nums) {
    nums.push(1)
    nums.unshift(1)

    let dp = new Array(nums.length+1)
    for(let i=0;i<dp.length;i++){
        dp[i] = new Array(nums.length+1).fill(-1)
    }

    return recur(nums, 1, nums.length-2, dp)

};

const recur = (arr, start ,end, dp) => {
    if(start > end){
        return 0
    }

    if(dp[start][end] != -1){
        return dp[start][end]
    }

    let max = 0

    for(let i=start;i<=end;i++){
        let left = recur(arr, start, i-1, dp)
        let right = recur(arr, i+1, end, dp)
        let curr = arr[start-1] * arr[i] * arr[end+1]
        let res = left+right+curr
        max = Math.max(res, max)
    }

    return dp[start][end] = max
}