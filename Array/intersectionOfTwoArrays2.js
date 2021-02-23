/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1]
    }
    
    let map = new Map()
    let result = []
    // make  a hashmap of the first array of nums
    for (let num of nums1) {
        if (map.has(num)) {
            map.set(num, 1+map.get(num))  
        } else {
            map.set(num, 1)
        }
    }
    //loop through the second array of nums ass to see if hashmap has a count of the value
    for (let num of nums2){
        if (map.get(num) > 0){ 
            result.push(num)
            map.set(num, map.get(num) -1)
        }
    }
    console.log(map)
    return result
   
};
