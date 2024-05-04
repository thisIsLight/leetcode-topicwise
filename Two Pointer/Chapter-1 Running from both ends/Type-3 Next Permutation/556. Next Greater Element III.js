var nextGreaterElement = function(n) {
    let arr = n.toString().split('')

    for(let i=0;i<arr.length;i++){
        arr[i] = Number(arr[i])
    }

    let index = arr.length-2
    while(index >=0){
        if(arr[index+1] > arr[index]){
            break
        }
        index--
    }

    if(index < 0){
        return -1
    }

    let j
    for(j=arr.length-1; j>index;j--){
        if( arr[j] > arr[index]){
            let temp = arr[j]
            arr[j] = arr[index]
            arr[index] = temp
            break
        }
    }
    reverse(arr, index+1)

    return arr.join('') <= 2147483647 ? arr.join('') : -1
};

const reverse = (arr, index) => {    
    let stack = []
    for(let i=index;i<arr.length;i++){
        stack.push(arr[i])
    }
    let i = index
    while(stack.length > 0){
        arr[i] = stack.pop()
        i++
    }
}