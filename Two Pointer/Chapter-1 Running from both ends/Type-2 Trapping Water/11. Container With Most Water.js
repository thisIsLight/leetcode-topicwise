var maxArea = function(height) {
    let i=0
    let j = height.length-1
    let res = -Infinity
    while(i < j){
        let water = Math.min(height[i], height[j]) * Math.abs(i-j)
        res = Math.max(res, water)
        if(height[i] <= height[j]){
            i++
        }
        else{
            j--
        }
    }
    return res
};