var sortColors = function(nums) {
    
    let zero = 0
    let two = nums.length-1
    let i=0
    while(i< nums.length){

        while(nums[zero] == 0){
            zero++
        }

        while(nums[two] == 2){
            two--
        }

        if(nums[i] == 0 && i > zero){
            let temp = nums[i]
            nums[i] = nums[zero]
            nums[zero] = temp
        }
        else if(nums[i] == 2 && i < two){
            let temp = nums[i]
            nums[i] = nums[two]
            nums[two] = temp
        }
        else{
            i++
        }
    }
};