//params: array constaining a random assortment of directions ex ( 'n', 's', 'e') , never empty
//return: true if walk will take exactly ten minutes, otherswise return false
//ex: assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
//pseudocode: check if walk.legnth === 10, 
// check for starting position, number of n === number of s and number e === number of w
function isValidWalk(walk) {
    const n = walk.filter((x) => (x === 'n')).length
    const s = walk.filter((x) => (x === 's')).length
    const e = walk.filter((x) => (x === 'e')).length
    const w = walk.filter((x) => (x === 'w')).length
    
    if (walk.length === 10 && n === s && e === w) {
      return true
    } else {
      return false
    }
  }