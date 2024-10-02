//params: 3 nums
//return: number
//ex: past(0,1,1) => 61000
//pseudocode: calculate all values in millisedonds then add all the values, seconds x 1000 + minutes X 60000 + hours x 3.6e6
function past(h, m, s){
    let hours = h * 3600000
    let min = m * 60000
    let secs = s * 1000
    return hours + min + secs
    }