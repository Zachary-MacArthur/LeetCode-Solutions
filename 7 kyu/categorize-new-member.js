//parameters: an array of arrays containing two indexes
//return: a new matching array containing strings stating whether the member is open or senior category
//example: input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]] -> output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
//pseudocode: iterate through the array and check if each pair of data fits the criteria for senior. if so push senior to a new array otherwise push open

function openOrSenior(data){
    let newArr = []
    data.forEach((e,i) => {
      if (data[i][0] > 54 && data[i][1] > 7) {
        newArr.push("Senior")
      } else {
        newArr.push("Open")
      }
    })
      return newArr
    }