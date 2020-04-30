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
/*arr = [-2, -1, 1, 10, -6, 14, 7, -6] // 26
getMaxSum(arr);
biggestString(arr); */

/*-----------------------------------------------------------------
Challenge: 19-flatten

Difficulty:  Intermediate

Prompt:

- Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
- A flattened array is an array that contains no nested arrays.
- Arrays maybe nested at any level.
- If any of the arrays have duplicate values those duplicate values should be present in the returned array.
- The values in the new array should maintain their ordering as shown in the examples below.

Hint:

- This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.

Examples:

flatten( [1, [2, 3]] );
//=> [1, 2, 3]  (a new array) 

flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
-----------------------------------------------------------------*/
// Your solution forhg 19-flatten here:

/*function flatten(arr) {
    newArr = [];
    arr.forEach((element, inedex) => {
        if(typeof(element) === "object"){
            arr.splice(element[0])
        }
        else{
            newArr.pop()
        }
    })
    console.log(newArr);
} */

function flatten(arr) {
    newArray = []
    // Base case: No arrays in our array
    arr.forEach((element) => {
      console.log(`is ${element} an array? ${!Array.isArray(element)}`)
      if (!Array.isArray(element)) {
        newArray.push(element)
      } else {
        // Action: Flatten the array
        element.forEach((item) => {
          newArray.push(item)
        })
        return flatten(newArray)
      }
    })
    return newArray
  }
  /*let iterationOne = flatten( [1, [2, 3]] )
  let iterationTwo = flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] )
  console.log(iterationOne)
  console.log("^^ solution to [1, [2, 3]]")
  console.log(iterationTwo)
  console.log("^^ solution to 1, [2, [3, [4]]], 1, 'a', ['b', 'c']]")
*/

  function isSudokuValid(board){
    let temp = 0;
    for(x = 0; x < 9; x ++){
        for(y = 0; y < 9; y++){
            if(0 <= board[x][y] < 9){
                temp = x+1;
                while(temp < 9){
                    if((board[x][y] == board[temp][y]) && !isNaN(board[x][y])){
                        console.log(board[x][y])   
                        return false;
                    }
                     temp ++;
                }
                temp = y+1;
                while(temp < 9){
                    if((board[x][y] == board[x][temp]) && !isNaN(board[x][y])){
                        console.log(board[x][y])
                        return false;
                    }
                    temp ++;
                }
            }
        }
    }
    for(i = 1; i < 8; i+= 3){
        for(j = 1; j < 8; j+= 3){
             let tempSet = new Set();
            for(x = i-1; x < i+2; x++){
                for(y = j-1; y< j+2; y++){
                    if(tempSet.has(board[x][y])){
                        console.log(board[x][y])
                        return false;
                    }else{
                        tempSet.add(board[x][y])
                        if(board[x][y] ==="."){
                            tempSet.delete(".")
                        }
                    }
                }
            }
            
        }
            
    }
    return true;
}

let testA = isSudokuValid([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ])
let testB = isSudokuValid(
    [
        ["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
      ]
)
console.log(testA, testB);

