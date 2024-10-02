//params: four integers
// return years number
//pseudocode: using a for loop we can subtract the tax from the interest and add that value to th principal each loop and check to see if it meets the required sum, increment years each loop
function calculateYears(principal, interest, tax, desired) {
    let years = 0
      for (let i = 0; principal < desired; years++){
        principal += ( (principal * interest) - ((principal * interest) * tax) )
       
        }
    return years
  }