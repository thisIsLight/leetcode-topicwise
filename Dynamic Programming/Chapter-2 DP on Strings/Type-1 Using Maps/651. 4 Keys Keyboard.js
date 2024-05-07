var maxA = function(n) {
    let dp = new Map()
    return recur(n, 0, 0, dp)
};

const recur = (len, word, iscopy, dp) => {
    if(len <= 0){
        return word
    }
    let key = len+'_'+word+'_'+iscopy
    if(dp.has(key)){
        return dp.get(key)
    }

    let res = 0

    let pressA = iscopy > 0 ? 0 : recur(len-1, word+1, 0, dp)
    let copypaste = recur(len-2, word, word, dp)
    let paste = iscopy > 0 ? recur(len-1, word+iscopy, iscopy, dp) : 0
    res = Math.max(pressA, copypaste, paste, res)

    dp.set(key, res)
    return res
}