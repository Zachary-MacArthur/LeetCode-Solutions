//Write a function which calculates the average of the numbers in a given array.
//Note: Empty arrays should return 0.

function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }