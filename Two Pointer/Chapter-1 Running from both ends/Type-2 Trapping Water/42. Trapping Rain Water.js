var trap = function(height) {
    let left = []
    let right = new Array(height.length).fill(-1)

    let max = -1
    for(let i=0;i<height.length;i++){
        left.push(max)
        max = Math.max(max, height[i])
    }

    max = -1
    for(let i=height.length-1;i>=0;i--){
        right[i] = max
        max = Math.max(max, height[i])
    }

    let res = 0

    for(let i=0;i<height.length;i++){
        let leftside = left[i]
        let rightside = right[i]

        if(leftside <= height[i] || rightside <= height[i]){
            continue
        }

        let water = (Math.min(leftside, rightside) - height[i])
        res = res+water
    }

    return res
};