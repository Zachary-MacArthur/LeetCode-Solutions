// params: array
// return number
// pseudocode: make sure all indexes are Number() 
// use reduce method to find average and return
function getAverage(marks){
    return Math.floor(marks.reduce((acc, c) => acc + c / marks.length, 0))
    }