var threeSum = function(nums) {
    let set = new Set()
    nums.sort((a,b) => {
        return a-b
    })
    let res = []
    for(let i=0;i<nums.length;i++){
        let newtarget = -nums[i]
        let left = i+1
        let right = nums.length-1
        while(left < right){
            if(nums[left] + nums[right] == newtarget){
                let str = `${nums[i]}+${nums[left]}+${nums[right]}`
                if(!set.has(str)){
                    res.push([nums[i], nums[left], nums[right]])
                    set.add(str)
                }
                left++
                right--
            }
            else if(nums[left] + nums[right] < newtarget){
                left++
            }
            else{
                right--
            }
        }
    }
    return res
};