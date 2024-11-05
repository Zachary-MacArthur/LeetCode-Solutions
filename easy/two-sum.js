// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });
//params: an array of ints, and a  number (sum)
//return: array of array of two nums that add up to sum - there will always be one pair in arr
//ex: twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]
//pseudocode: create new arr, create hashmap obj
// for loop through arr
// find the difference between current num and sum to search for pair and save as var
// search for diff in obj

function twoSum(arr, sum){
    let summed = []
    let hashMap = {}
    for (const num of arr){
        let diff = sum - num
        if (hashMap[diff]){
            summed.push([num, diff])
        } else {
            hashMap[num] = true
        }
    }
    return summed

}