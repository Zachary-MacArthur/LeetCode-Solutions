//params: two arrays of integers: nums1 & nums2, sorted in numerically, and two integers m=num of integers in 1 and n = num of integers in 2
// return: merge the two arrays into one array sorted numerically, store in the var num1
//pseudocode: slice nums1 by the value of n
//push nums2 to nums1 and sort


var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n)
    for(let i = 0; i < nums2.length; i++){
        nums1.push(nums2[i])
    }
    return nums1.sort((a,b) => a - b)
};