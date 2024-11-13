/**
params: array of integers and an integer(val) 
return: number of elements in nums that dont = val
 ex: nums = [3,2,2,3], val = 3 -> output 2
 pseudocode: use the filter method
 */
 var removeElement = function(nums, val) {
    k = 0
    for (let i = 0; i < nums.length; i++){
      if(nums[i] != val){
          nums[k] = nums[i]
          k += 1
      }
    }
    return k
  };