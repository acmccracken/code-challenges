var invertTree = function(root) {
    if(root){
       let holder = root.right;
        root.right = root.left;
        root.left = holder;
        invertTree(root.right)
        invertTree(root.left)
    }
     return root
 };


 var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]))
    let total = 0;
    let countA = costs.length / 2;
    let countB = countA;
    
    for(let i = 0; i < costs.length; i ++){
        if(((costs[i][0] < costs[i][1]) && countA) || !countB){
            total += costs[i][0];
            countA --;
        }else{
            total += costs[i][1];
            countB --;
        }
    }
    console.log(total)
    return total;
};

function bucketSort(arr){
    let bucketA = [];
    let bucketB = [];
    let bucketC = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < 0){
        bucketA.push(arr[i])
        }else if(arr[i] <= 8){
        bucketB.push(arr[i])
      }
      if(arr[i] > 8){
        bucketC.push(arr[i])
      }
    }
    bucketA.sort((a,b) => a-b)
    bucketB.sort((a,b) => a-b)
    bucketC.sort((a,b) => a-b)
    arr = []
    arr.push[bucketA]
  }

bucketSort([12,6,3,7,13,8])

var reverseString = function(s) {
    while(s !== s.reverse()){
        for (let i = s.length; i > 0; i--){
            s.unshift(s[i]);
            s.pop()
        }
    }
};


var isPowerOfTwo = function(n) {
    if(n === 0){
        return false;
    }
    while(n % 2 === 0){
        n = (n / 2);
    }
    if(n === 1){
        return true;
    }else{
        return false;
    }
};

var searchBST = function(root, val) {
    while(root){
        if(root.val === val){
            return root;
        }else if(root.val < val){
            root = root.right;
        }else{
            root = root.left;
        }
    }return null;
};

var isPowerOfFour = function(num) {
    if(num === 1 || num === 4){
        return true;
    }
    if(num <= 0){
        return false;
    }
    while(num > 0){
        if(num % 4 === 0){
            num /= 4;
            if (num === 4){
                return true;
            }
        }else{
            return false;
        }
    }
};