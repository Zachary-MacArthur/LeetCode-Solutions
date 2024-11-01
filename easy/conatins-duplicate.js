//params: array of integers
//return true or false if any value appears at least twice
//ex Input: nums = [1,2,3,1] Output: true
//pseudocode: create an object, loop through array add to object if value already exists in object return true

var containsDuplicate = function(nums) {
    const map = {}
    for (let i = 0; i < nums.length; i++){
     let num = nums[i]
     if (!map[num]) {
         map[num] = 1;
     } else {
         map[num]++;
     }
     } 
     for (let i = 0; i < nums.length; i++){
         let num = nums[i]
         if (map[num] > 1){
             return true
         } else {
             return false
         }
     }
 
     
 };