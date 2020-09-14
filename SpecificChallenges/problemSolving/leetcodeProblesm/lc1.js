var reverse = function(x) {
    let newX = ''
    let neg = false;
    if(x < 0){
        neg = true;
        x *= -1;
    }
    x = x.toString();
    for(let i = x.length - 1; i >= 0; i--){
        newX = newX.concat(x[i]);
    }
    newX = newX.split('').map(Number);
    newX = newX.join('');
    if(neg) newX *= -1;
    return newX;
};

//console.log(reverse(123))

var myAtoi = function(str){
    return Math.max(Math.min(parseInt(str, 10) || 0, 2147483647), -2147483648)    
    }

//
// var myAtoi = function(str){
//     let num = parseInt(str, 10);
//     if(num) return Math.max(Math.min(num, 2147483647), -2147483648) 
//     else return 0;
// }


// my first attempt

// var myAtoi = function(str) {
//     let numArr = [];
//     let strArr = str.split('');
//     let neg = false;
//     for(let i = 0; i < strArr.length; i++){
//         if(strArr[i] === '-') neg = true;
//         if((strArr[i] % 1 === 0)  && strArr[i] !== ' '){
//             numArr.push(strArr[i]);
//             console.log(strArr[i])
//         }
//     }
//     numArr = numArr.map(Number).join('');
//     if(neg === true) numArr *= -1;
//     return(numArr);
// };

//console.log(myAtoi('ddd333ddf356word dss ddd'))

var isPalindrome = function(x) {
    let bool = false;
    x = x.toString().split('');
    console.log(x)
    function checkPalindrome(x){
        if(x[0] === x[x.length-1]){
            x.pop();
            x.shift();
            if(x.length <= 1) bool = true;
            else checkPalindrome(x);
        }else bool = false;
        
    }
    checkPalindrome(x);
    return bool
};


//console.log(isPalindrome(1211))


//multiple pointers
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let max = 0;
    while(left < right){
        max = Math.max((right - left) * Math.min(height[left], height[right]), max);
        if (height[left] <= height[right]) left++;
        else right --;
    }
    return max
};

//console.log(maxArea([1,8,6,2,5,4,8,3,7]))

