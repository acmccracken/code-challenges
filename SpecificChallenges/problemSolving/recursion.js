function productofArray(arr){
    if(!arr.length){
        return 1;
    }else{
        let num = arr.pop();
        return num * productofArray(arr);
    }
}

console.log(productofArray([1,2,3])) //6
console.log(productofArray([1,2,3,10])) //60