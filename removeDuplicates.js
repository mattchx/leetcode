// 26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0
    let i = 0
    for (j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]){
            i++
            console.log(nums[i], nums[j])
            nums[i] = nums[j]
        }
    }
    return i + 1
};

N = [0,0,1,1,1,2,2,3,3,4,6,6,6,7,8,8,8]
console.log(removeDuplicates(N))
