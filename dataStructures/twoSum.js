let test = [15,2,7,11];
let test2 = [2,5,5,7,4];
target = 10;

const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      // they match and the number is not the same index;
      if (nums[i] + nums[j] == target) {
        console.log([i,j])
        return [i, j];
      }
    }
  }
} 

twoSum(test2, target)

// let test = [15,2,7,11]; let target = 9
const twoSumHash = function(nums, target) {
  let hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    if (target-nums[i] in hashMap) {
      return [hashMap[target-nums[i]], i];
    } else {
      hashMap[nums[i]] = i;
    }
  }
}

/*
  target = 9
        v
  [15,2,7,11];
  return[ object["2"], i ]
  {
    "15": 0,
    "2": 1 
  }
  return [1, 2]
*/

// twoSum(test, 6)