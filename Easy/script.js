// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

var arr1 = [1 , 4 , 7];
var arr2 = [10, 5];
var arr3 = [1.5, 3, 2.5, 1];

var sum = (array) => {
    var total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total;
}

var returnAverage = (array) => {
    var arrSum = sum(array);
    return arrSum / array.length;
}

console.log(returnAverage(arr1));
console.log(returnAverage(arr2));
console.log(returnAverage(arr3));
