var nextPermutation = function(arr) {
    let index = arr.length-1
    while(index >= 0){
        if(arr[index+1] > arr[index]){
            break
        }
        index--
    }
    
    if(index < 0){
        return reverse(arr, 0) 
    }
    else{
        let j=arr.length-1
        while(j > index){
            if(arr[j] > arr[index]){
                let temp = arr[j]
                arr[j] = arr[index]
                arr[index] = temp
            }
            j--
        }
        return reverse(arr, index+1)
    }
};

function reverse(nums, start) {
    let i = start,
        j = nums.length - 1;
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}