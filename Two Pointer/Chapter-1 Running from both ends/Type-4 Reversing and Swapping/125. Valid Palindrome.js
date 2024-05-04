var isPalindrome = function(s) {
    s = s.toLowerCase()
    let newStr=''

for(let i=0; i<s.length;i++){
    var ascii = s[i].charCodeAt(0);
    if((ascii >= 97 && ascii <= 122) || (ascii>= 48 && ascii<=57)){
        newStr = newStr+s[i]
    }

}
    s = newStr
    let left = 0
    let right = s.length-1
    while(left<=right){
        if(s[left]!==s[right]){
            return false
        }
        left++
        right--
    }
    return true
};