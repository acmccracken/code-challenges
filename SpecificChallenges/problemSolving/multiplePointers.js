function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left ++;
        }
    }
}

function uniqueValues(arr) {
    if(arr.length < 0){
        return 0;
    }else if(arr.length === 1){
        return 1;
    }
    let i = 0;
    let j = 1;
    totalVals = 1;
    while(j < arr.length){
        if(arr[j] > arr[i]){
            i = j;
            totalVals++;
        }
        j++;
    }
    return totalVals;
}
/*
console.log(uniqueValues([1,1,1,1,2])) //2
console.log(uniqueValues([1,2,3,4,4,4,4,7,7,12,12,13])) //7
console.log(uniqueValues([])) //0
console.log(uniqueValues([-2,-1,-1,0,1])) //4
*/

function maxSubarraySum(arr, num){
    let maxSum = 0;
    if(arr.length < num) {
        return null;
    }
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum + arr[i] - arr[i-num]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}
/*
console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 11
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([], 4)) // null
*/


/* FINISH LATER
sameFrequency(n1,n2){
    let digits = {}
    for(let i = 0; i < n1.length; i++){
        num = n1[i];
        if (num in digits){
            digits.num ++;
        }else{
            digits.num = 1;
        }
    }
    for(let i = 0; i < n2.length; i++){
        num = n2[i];
        if(!num in digits){
            return false;
        }else if()
    }
}
console.log(sameFrequency(182,281)) //true
console.log(sameFrequency(34,14)) //false
console.log(sameFrequency(3589578, 5879385)) //true
console.log(sameFrequency(22,222)) //false

*/