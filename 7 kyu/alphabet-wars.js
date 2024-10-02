//params: string
//return: either left side wins or right side wins
//ex alphabetWar("z");        //=> Right side wins!
//psuedocode create to variables, left side count and rightside count
// check the param string for any of the 'power' letters if a right side occurs increment and vice versa
// check which variable is highger and return with if else
function alphabetWar(fight)
{
let rightCount = 0
let leftCount = 0
for(let i = 0; i < fight.length; i++){
  if (fight[i] === 'w'){
    leftCount += 4
  } else if (fight[i] === 'p') {
      leftCount += 3
    } else if (fight[i] === 'b') {
      leftCount += 2
    } else if (fight[i] === 's') {
      leftCount += 1
    } else if  (fight[i] === 'm') {
      rightCount += 4
    } else if (fight[i] === 'q') {
      rightCount += 3
    } else if (fight[i] === 'd') {
      rightCount += 2
    } else if (fight[i] === 'z') {
      rightCount += 1
    }
  }
  if ( leftCount > rightCount){
    return 'Left side wins!'
  } else if (rightCount > leftCount){
    return 'Right side wins!'
  } else return 'Let\'s fight again!'

}