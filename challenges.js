/*Lyft
Write an algorithm which accepts an array of 
integers. Each integer represents the height
 of a bar in a bar graph. Your algorithm should
  calculate how much "water" could be stored in
   the bar graph. (Quick reference I googled, 
    seems like this problem */

// Create function that accepts an array of values
// Create a variable total
// Write a for loop iterating through the array
// Create a temp variable to hold highest value
// Check if arr[i] is greater than high and replace
// Check if arr[i] is less then high and add difference to total
// Iterate through remaining values of arr to check if higher than high


function findWater(arr){
    let total = 0;
    let highest = 0;
    let nextHighest = 0;
    for(i = 0; i < arr.length; i ++){
        if(arr[i] >= highest){
            highest = arr[i];
            for(j = i + 1; j < arr.length; j++){
                if(arr[j] > nextHighest){
                    nextHighest = arr[j];
                }
            }
            if(highest > nextHighest){
                highest = nextHighest;
            }
        }
        if(arr[i] < highest){
            total += (highest - arr[i])
        }
        nextHighest = 0;
    }
    console.log(total);
}

/*findWater([0, 10, 12, 6, 8, 4, 0, 0, 3, 0, 4])
findWater([1, 1, 2, 1, 2, 3, 0, 1, 0, 3])
findWater([3, 0, 3])
findWater([1, 4, 8, 3, 4, 6, 2])
findWater([1, 4, 8, 3, 4, 6, 2]) */

/*        Problem 2       */

/*Contiguous Sequence: You are given an array of integers (both positive and negative). Find the
contiguous sequence with the largest sum. Return the sum. */



function biggestString(arr){
    let maxSum = 0;
    let tempSum = 0;
    let currentMax = 0;
    for(j = 0; j < arr.length; j ++){
        for(i = 0; i < arr.length; i++){
            tempSum += arr[i];
            if(tempSum > currentMax){
                currentMax = tempSum;
            }
        }
        if(currentMax > maxSum){
            maxSum = currentMax;
        }
        currentMax = 0;
        tempsum = 0;
    }
    console.log(maxSum);
}

function getMaxSum(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        let start = 0;
        for (let j = i; j < arr.length; j++){
            start += arr[j];
            max = Math.max(max, start);
        }
    }
    console.log(max);
    return max;
}
arr = [-2, -1, 1, 10, -6, 14, 7, -6] // 26
getMaxSum(arr);
biggestString(arr);