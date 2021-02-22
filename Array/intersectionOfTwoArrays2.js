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
    
    for (let num of nums1) {
        if (map.has(num)) {
            map.set(num, 1+map.get(num))  
        } else {
            map.set(num, 1)
        }
    }
    
    let list = []
    for (let num of nums2){
        let count = map.get(num) 
        console.log(count)
        if (count>0) {
            list.push(num)
            map.set(num, count - 1)
        }
    }
    
    let result = []
    let i = 0
    for (let num of list) {
        result[i++] = num
    }
    return result
};
