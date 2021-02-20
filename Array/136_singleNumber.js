var singleNumber = function(nums) {
    let dupMap = new Map()
    for(let num of nums) {
      if (dupMap.has(num)) {
        dupMap.set(num, 1+ dupMap.get(num))
      } else {
        dupMap.set(num, 1)
      }
    }
    for (let [key, value] of dupMap.entries()) {
      if (value === 1) {
        return key
      }
    }
};
