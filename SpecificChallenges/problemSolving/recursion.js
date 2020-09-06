function productofArray(arr){
    if(!arr.length){
        return 1;
    }else{
        let num = arr.pop();
        return num * productofArray(arr);
    }
}
/*
console.log(productofArray([1,2,3])) //6
console.log(productofArray([1,2,3,10])) //60
*/

function reverse(str){
    let arr = str.split('');
    let newArr = [];
    function helper(arr){
        newArr.push(arr.pop());
        if(arr.length){
           helper(arr);
        }
    }
    helper(arr);
    let newString = newArr.join('');
    return newString;
    
  }
  
// console.log(reverse('awesome')) // 'emosewa'
// console.log(reverse('rithmschool')) // 'loohcsmhtir'


/* Write a recursive function called isPalindrome which returns true if athe string passed through is a palindrome
   Otherwise it returns false
*/

function isPalindrome(str){
    let arr = str.split('');
    function recFunc(arr){
        if(arr.length <= 1){
            //I couldn't get it to return true here, not sure why
            return;
        }else if(arr[0]  === arr[arr.length - 1]){
            arr.pop();
            arr.shift();
            recFunc(arr);
        }else{
            return;
        }
    }
    recFunc(arr);
    if(arr.length <= 1){
        return true;
    }else return false;
}

// console.log(isPalindrome('awesome')) //false
// console.log(isPalindrome('foobar')) //false
// console.log(isPalindrome('tacocat')) //true
// console.log(isPalindrome('taccat')) //true

function capitalizeFirst (arr) {
    let num = 0;
    function iteration(num){
        arr[num] = arr[num].split('')
        arr[num][0] = arr[num][0].toUpperCase()
        arr[num] = arr[num].join('');
        if(num < (arr.length - 1)) iteration(num+1);
        else return;
        
    }
    iteration(num)
    return arr;
}

// console.log(capitalizeFirst(['car', 'taco', 'banana']))

//stuck a little, still figuring ot what's not working.
//definitely needs more work, but I should try something else
function nestedEvenSum(obj) {
    let valArr = Object.values(obj);
    console.log(valArr)
    let num = 0;
    let total = 0;
    function goInObject(valArr){
        while(num <= valArr.length){
            let newObj = valArr[num];
            if(typeof(newObj) === 'object'){
            return total += goInObject(newObj);
            }else if(valArr[num] % 2 === 0){
                total += valArr[num];
                console.log(total)
            }
            num++;
        }
    }
    return goInObject(valArr);
}

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
//   console.log(nestedEvenSum(obj1)); // 6
//   console.log(nestedEvenSum(obj2)); // 10

//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened

function flatten(arr){
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flatten(arr[i]));
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]