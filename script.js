// search element in array
(function(myArray, searchKey) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] == searchKey) {
      return console.log('The index of the element is ' + i);
    }
  }
  return console.log('Element not found');
})([100, 20, 2, 3, 5, 10, 4, 201], 5);
// search string in array
(function(myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] == 'string') {
      return console.log(myArray[i]);
    }
  }
  return console.log('String not found');
})([1, 2, 3, 'str', 5, 6]);
// bubble sort
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
// selection sort
(function (myArray) {
  for (var i = 0; i < myArray.length - 1; i++){
    var minIndex = i;
    for (var j = i + 1; j < myArray.length; j++) {
      if (myArray[j] < myArray[minIndex]){
        minIndex = j;
      }
    }
    if (minIndex !== i){
      var temp = myArray[i];
      myArray[i] = myArray[minIndex];
      myArray[minIndex] = temp;
    }
  }
  console.log(myArray);
})([0, 2, 4, 100, 22, 23, 0, -2, 40]);
// merge sort
function mergeSort(myArray) {
  if (myArray.length == 1) {
    return myArray;
  }
  var midEl = myArray.length / 2;
  return mer(mergeSort(myArray.slice(0, midEl)), mergeSort(myArray.slice(midEl, myArray.length)))
}
//merging
function mer(firstArray, secondArray) {
  var i = 0,
    j = 0;
  var mergedArray = new Array(firstArray.length + secondArray.length);
  for (var k = 0; k < mergedArray.length; k++) {
    if (i > firstArray.length - 1) {
      mergedArray[k] = secondArray[j];
      j++;
    } else if (j > secondArray.length - 1) {
      mergedArray[k] = firstArray[i];
      i++;
    } else if (firstArray[i] < secondArray[j]) {
      mergedArray[k] = firstArray[i];
      i++;
    } else {
      mergedArray[k] = secondArray[j];
      j++;
    }
  }
  return mergedArray;
}
console.log(mergeSort([2, 10, 3, 14, 32, 22, 0, -22, 43, 5, 4]));
