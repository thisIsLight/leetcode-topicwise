var getMoneyAmount = function(n) {
    let dp = new Array(n+1)
    for(let i=0;i<dp.length;i++){
        dp[i] = new Array(n+1).fill(-1)
    }

    return recur(1, n, dp)
};

const recur = (start, end, dp) => {
    if(start >= end){
        return 0
    }

    if(dp[start][end] != -1){
        return dp[start][end]
    }

    let res = Infinity

    for(let i=start;i<=end;i++){
        let ans = i + Math.max(recur(start, i-1,dp) , recur(i+1, end,dp))
        res = Math.min(res, ans)
    }

    return dp[start][end] = res
}