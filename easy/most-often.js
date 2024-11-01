// //solve using javascript Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//     it("Should return max character", () => {
//      assert.equal(max("Hello World!"), "l");
//     });
//    });
   
//    No String or Array Methods (well brute force it first, but then no methods)! 

//params: string of chars
//return: the char that appears most often
//ex:  assert.equal(max("Hello World!"), "l");
//pseudocode: loop through string to count occurrences of each char and identify one with highest count
//create an empty obhect charCount to keep track of each character's count
//iterate through each character in the string str. for each character:
    //if its not in charCounts we add it with a count of 1
    //if its already in charCounts we increment its count
//during the loop check if the current character's count is the highest we've seen, if so update maxChar and maxCount
//return maxChar


function max(str) {
    let charCounts = {};
    let maxChar = '';
    let maxCount = 0
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        if (!charCounts[char]) {
            charCounts[char] = 1;
        } else {
            charCounts[char]++;
        }
        if (charcount[char] > macCount) {
            maxCount = charCounts[char];
            maxChar = char;
        }
    }
    return maxChar;
}
//or 
// //params: array of integers
// //return true or false if any value appears at least twice
// //ex Input: nums = [1,2,3,1] Output: true
// //pseudocode: create an object, loop through array add to object if value already exists in object return true
// function containsDuplicate(nums) {
//     const seen = {};
//         for (const num of nums) {
//         if (seen[num]) {
//             return true;
//         }
//                 seen[num] = true;
//     }
    
//     return false;
// }

// // Alternative solution using Map
// function containsDuplicateWithMap(nums) {
//     // Create a hash map using Map
//     const seen = new Map();
    
//     // Iterate through the array
//     for (const num of nums) {
//         // If the number is already in the map, we found a duplicate
//         if (seen.has(num)) {
//             return true;
//         }
        
//         // Otherwise, add the number to the map
//         seen.set(num, true);
//     }
    
//     // If we've gone through the entire array without finding duplicates
//     return false;
// }