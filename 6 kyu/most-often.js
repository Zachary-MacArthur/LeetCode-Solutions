// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

//params: a string
//return: the letter that appears most often
//ex assert.equal(max("Hello World!"), "l");
//pesudocode: create a map 


function mostOften(string){
    let letters = string.split('')
    const map = {}
    for (const letter of letters){
        map[letter] = true
    }
    for (const )
}