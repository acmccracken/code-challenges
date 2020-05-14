
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"

    // Example of 3
    // Outcome array to pass through H H H H T T T T on the first itteration
    // HHHHTTTT
    // HHTTHHTT
    // HTHTHTHT

function coinFlips(n){
    let outcomes = Array(Math.pow(2, n)).fill("");
    let half = Math.pow(2, n) / 2;
    let flipper = 1;
    let counter = 0;
    function flip(half){
        for(let i = 0; i < Math.pow(2, n); i ++){
            if(flipper === 1){
                outcomes[i] += "H"
            }else{
                outcomes[i] += "T"
            }
            counter ++;
            if(counter === half){
                flipper *= -1;
                counter = 0;
            }
        }
        if(outcomes[0].length >= n){
            return outcomes;
        }
        return flip(half/2);
    } 
    return flip(half);
}

runA = coinFlips(2)
runB = coinFlips(3)
runC = coinFlips(4)
console.log(runA)
console.log(runB)
console.log(runC)

  
  

 /*   let newN = n;
  function flip(){
    if(outcomes[n].length === newN){
      return outcomes;
    }
    let length = (2^n) / 2;
    let flipper = 1;
    for(let i = 0; i < (2^n); i ++){
      if(flipper = 1){
       
      }
      if(length > 0){
        
      }
      outcomes.push("");
    }
  }
  */

romanKey = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}  
  

function romToInt(str){
    let total = 0;
    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i);
        let char2 = str.charAt(i+1);
        let num = romanKey[char];
        let num2 = romanKey[char2];
            if(num < num2){
                total -= num;
            }else{
                total += num;
            }
    }
    return total;
} 

/*console.log(romToInt("III"), "should be 3")
console.log(romToInt("IV"), "should be 4")
console.log(romToInt("IX"), "should be 9")
console.log(romToInt("LVIII"), "should be 58")
console.log(romToInt("MCMXCIV"), "should be 1994") */

/*function insertionSort (array) {
    // Loop through each element
    for(let i = 0; i < array.length - 1; i ++){
      let holder = array[i+1];
      let tempI = i;
      let exit = false;
      if(holder < array[tempI]){
        while((holder < array[tempI]) && exit === false){
            if(tempI > 0){
                tempI --;
            }else{
                exit = true;
            }
        }
          array[i+1] = array[tempI];
          array[tempI] = holder;
      }
    }
    //
    return array;
}
*/
let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};
console.log(insertionSort([21, 43, 7, 31, 13, 16, 33, 9]));


    function singleNonDuplicate(nums) {
    for(let i = 0; i < nums.length; i += 2){
        if(nums[i] != nums[i+1]){
            return nums[i]
        }
    }
};

var kConcatenationMaxSum = function(arr, k) {
    let maxArr = [];
    let maxSum = 0;
    for(let i = 0; i < k; i++){
        maxArr = maxArr.concat(arr);
    }
    for(let i = 0; i < maxArr.length; i++){
        let currentSum = 0;
        for(let j = i; j < maxArr.length; j++){
            currentSum += maxArr[j];
            maxSum = Math.max(maxSum, currentSum);
        }   
    }
    return maxSum;
};


function twoSums(nums, target){
    let finder = 0;
    let answer = [];
    for(let i = 0; i < nums.length; i++){
        finder = target - nums[i];
        secondIndex = nums.indexOf(target);
        if(secondIndex != -1){
            answer.push(i);
            answer.push(secondIndex)
        }
    }
    console.log(answer)
};

twoSums([2, 7, 11, 15], 9);

/*
function matchingStrings(strings, queries) {
    let matching = [];
    let val;
    let countString = strings.reduce(function(acc, str) {
      acc[str] = acc[str] ? acc[str] + 1 : 1
      return acc
    }, {})
    for (let i = 0; i < queries.length; i++){
      if(countString[queries[i]]){
        val = countString[queries[i]]
        matching.push(val)
      } else {
        matching.push(0)
      }
    }
       return matching
  }
  */
  console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']))
  console.log("^^^ should be [ 2, 1, 0]")

  function matchingStrings(strings, queries) {
    return queries.map((query) => 
    strings.filter(s => s === query).length);
}

function coinChange(coins, amount) {
    coins.sort((a,b) => a-b)
    console.log(coins)
    let result = 0;
    for (let i = coins.length-1; i >= 0; i--) {
        while (coins[i] <= amount) {
            amount -= coins[i];
            result += 1;
            console.log(`amount: ${amount}`)
        }
    }
    if (amount !== 0) {
        return -1;
    } else {
        return result;
    }
}

console.log(coinChange([1, 2, 5], 11))




var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i ++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return (`[${i},${j}]`);
            }
        }
    }
 };
 console.log(twoSum([2, 7, 11, 15], 9))