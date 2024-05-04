var numRescueBoats = function(people, limit) {
    people.sort((a,b) => {
        return a-b
    })
    let left = 0
    let res = 0
    let right = people.length-1

    while(left <= right){
        let sum = people[left] + people[right]
        if(sum <= limit){
            left++
            right--
            res++
        }
        else{
            right--
            res++
        }
    }
    return res
};