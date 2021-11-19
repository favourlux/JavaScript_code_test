// This Solution cover for both non negative and negative subarray

function largestOfFour(arr) {
  let newArr = [];
  // iterate through main arrays
  for (let i = 0; i < arr.length; i++) {
    let largestArr = arr[i][0];   # store the first element
    // iterate through sub arrays
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestArr) {
        // overwrite old stored largest if the subarray is larger 
        largestArr = arr[i][j];
      }
    }
    newArr[i] = largestArr;
  }
  return newArr; 
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [-32, -5, -3, -17], [1000, 1001, 857, 1]]);