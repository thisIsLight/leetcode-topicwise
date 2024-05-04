var findTarget = function(root, k) {
    let arr = []
    dfs(root, arr)
    let i=0;j=arr.length-1
    while(i<j){
        let sum = arr[i]+arr[j]
        if(sum == k){
            return true
        }
        else if(sum > k){
            j--
        }
        else{
            i++
        }
    }
    return false
};

const dfs = (root, arr) => {
    if(root == null){
        return
    }
    else{
        dfs(root.left,arr)
        arr.push(root.val)
        dfs(root.right,arr)
    }
}