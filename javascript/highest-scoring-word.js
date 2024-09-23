function high(x){


    let splitArray = x.split(' ');
    let splitChar = splitArray.map(el => el.split(''));
    let charValue = splitChar.map(el => {
        let counter = 0;
        el.map(element => counter += element.toUpperCase().charCodeAt() - 64);
        return counter;
    });
    let largest = 0;
    let largestIndex;
    for (let i = 0; i < charValue.length; i++) {
        if (charValue[i] > largest) {
            largest = charValue[i];
            largestIndex = i;
        }
    }
    return splitArray[largestIndex];
}
  