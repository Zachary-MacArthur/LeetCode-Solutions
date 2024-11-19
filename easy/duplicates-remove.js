/**
 parms: array of integers - sorted from low to high
 return: number of unique elements in nums -- the original array should be changed in place
 to accept change the array so that the first k elements are unique, k is the number of unique elements
 ex: nums = [1,1,2] ->  2, nums = [1,2,_]
 pseudocode: create var k to hold number of unique ints
 create a for loop to loop through nums
 if nums[k] != nums[i + 1]  - num[k] = numsi + 1, k++
 */
 var removeDuplicates = function(nums) {
    let k = 1
    for (let i = 1; i < nums.length; i++){
     if (nums[i] != nums[k - 1]){
         nums[k] = nums[i]
         k++
     } 
    }
 return k
 }