//params: array of nums
//return : sorted array of nums
//ex: solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
//pseudocode: use the sort method and check for null using if else logic
function solution(nums){
    if( nums == [] || nums === null){
      return []
    } else {
      return nums.sort((a, b) => a - b)
    }
    }