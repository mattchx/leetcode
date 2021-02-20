/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dupMap = new Map()
    for(num of nums) {
      if (dupMap.has(num)) {
        return true
      } else {
        dupMap.set(num, 1)
      }
    }
    return false
};
