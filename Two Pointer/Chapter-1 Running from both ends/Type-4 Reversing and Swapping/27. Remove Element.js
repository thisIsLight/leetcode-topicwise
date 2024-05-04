var removeElement = function(nums, val) {
    let temp = [...nums]
    let ind = 0
    let i=0
    while(i<nums.length && ind < temp.length){
        if(temp[ind] == val){
            ind++
            continue
        }
        else{
            nums[i] = temp[ind]
        }
        ind++
        i++
    }
    return i
};