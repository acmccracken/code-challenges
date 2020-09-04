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

