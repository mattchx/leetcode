//  First Unique Character in a String
var firstUniqChar = function(s) {
    
    let charMap = new Map()
    for (let char of s.split("")) {
        if (charMap.has(char)){
            charMap.set(char, 1+charMap.get(char))
        } else {
            charMap.set(char, 1)
        }
    }
    
    for (let i = 0;i < s.length; i++){
        if (charMap.get(s.charAt(i)) === 1) {
            return i
        }
    }
    return -1
};
