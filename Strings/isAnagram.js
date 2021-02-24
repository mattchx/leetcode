// Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // use a map
    // loop thru the S string and create a map of char frequency ie count
    // then iterate thru the T string 
    // if char exists then substract 1 
    // if char does exist return false
    // if char = 0 then return false
    
    if (s.length !== t.length) return false
    
    let count = new Map()
    for (let char of s.split("")) {
        if (count.has(char)){
            count.set(char,1+(count.get(char)))
        } else {
            count.set(char,1)
        }
    }
    
    // has is created so now loop through t string
    for (let i=0;i<t.length;i++) {
        let char = t.charAt(i)
        if (count.has(char)) {
            if (count.get(char) !== 0) {
                 count.set(char, count.get(char) -1)
            } else {
                return false
            }
        } else {
            return false
        }
    }
    return true
    
};
