// search element in array
(function(myArray, searchKey) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] == searchKey) {
      return console.log('The index of the element is ' + i);
    }
  }
  return console.log('Element not found');
})([100, 20, 2, 3, 5, 10, 4, 201], 5);
// array sort
(function(myArray) {
  for (var i = 0; i < myArray.length-1; i++) {
    for (var j = myArray.length-1; j > i; j--) {
      if (myArray[j-1] > myArray[j]) {
        var temp = myArray[j-1];
        myArray[j-1] = myArray[j];
        myArray[j] = temp;
      }
    }
  }
  console.log(myArray);
})([5, 10, 8, 1, 2, 3, 0]);
// search string in array
(function(myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] == 'string') {
      return console.log(myArray[i]);
    }
  }
  return console.log('String not found');
})([1, 2, 3, 'str', 5, 6]);
