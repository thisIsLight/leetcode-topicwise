var longestStrChain = function(words) {
    let dp = new Map()
    let set = new Set()

    for(let i=0;i<words.length;i++){
        set.add(words[i])
    }
    let res = 0
    for(let i=0;i<words.length;i++){
        res = Math.max(res, recur(words[i], dp, set))
    }
    return res
};

const recur = (current, dp, set) => {
    if(current.length == 0){
        return 0
    }

    if(dp.has(current)){
        return dp.get(current)
    }

    let maxlen = 1
    for(let i=0;i<current.length;i++){
        let arr = current.split('')
        arr.splice(i,1)
        arr = arr.join('')
        let temp = 0
        if(set.has(arr)){
            temp = 1 + recur(arr, dp, set)
        }
        maxlen = Math.max(maxlen, temp)
    }
    dp.set(current, maxlen)
    return maxlen
}