var fourSum = function(nums, target) {
    let res = []
    let set = new Set()
    nums.sort((a,b) => {
        return a-b
    })

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            let left = j+1
            let right = nums.length-1

            while(left < right){
                let sum = nums[i]+ nums[j]+nums[left] + nums[right]

                if(sum == target){
                    let str = `${nums[i]}+${nums[j]}+${nums[left]}+${nums[right]}`
                    if(!set.has(str)){
                        set.add(str)
                        res.push([nums[i] , nums[j] , nums[left] , nums[right]])
                    }
                    left++
                    right--
                }
                else if(sum < target){
                    left++
                }
                else {
                    right--
                }
            }
        }
    }
    return res
};