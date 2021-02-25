// 125. Valid Palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const charArr = s.replace(/[\W_]+/g, "").toLowerCase().split('');
    
    for(let i=0;i< charArr.length/2; i++ ){
        if (charArr[i] !== charArr[charArr.length-1-i]) {
            return false
        }
    }
    return true
    
};
