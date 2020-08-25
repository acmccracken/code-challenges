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
  
console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

