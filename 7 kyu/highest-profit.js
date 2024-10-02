function minMax(arr){
    let min = Math.min(... arr)
    let max = Math.max(... arr)
    let newArr = []
    newArr.push(min)
    newArr.push(max)
    return newArr
  }