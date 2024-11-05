/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 //params: array of integers (nums) and integer (target)
 // return: the indices of the two nums that add up to target in an array, each input only has one solution
 //ex: Input: nums = [2,7,11,15], target = 9 [0,1]
 //pseudocode: define indices array [] and hashmap obj
 // for loop through nums
 //define difference target - num to find other num
//search hashmap for difference if found add indexof diff and index of num to indices
//if not add num to hash map obj = true

var twoSum = function(nums, target) {
    let indices = []
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (nums[i] + nums[j] === target && i != j){
                indices.push(i)
                
            }
        }
    }
      return indices
};
//optimized
// //var twoSum = function (nums, target) {
//     const newMap = new Map();

//   for(let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];

//     if(newMap.has(diff)) {
//       return [newMap.get(diff), i]
//     }

//     newMap.set(nums[i], i)
//   }
//   return []
// };