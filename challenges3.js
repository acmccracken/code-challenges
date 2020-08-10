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

var rob = function(nums) {
    // initiate first two values of dp array
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0]
    
    let dp = [nums[0], Math.max(nums[0], nums[1])];
    console.log(dp);
    
    for (let i = 2; i < nums.length; i++) {
        // compare current max with the previous max
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
    return dp[nums.length - 1];
}


//doesn't work, saving for reference
var longestValidParentheses = function(s) {
    let longestValid = 0;
    let distanceFromOpen = 0;
    let balance = 0;
    let currentValid = 0;
    let pairsArray = [];
    let openParenthesis = [0];
    let closedParenthesis =[0]
    let trend = 0;
    for(let i = 0; i < s.length; i++){
        distanceFromOpen++;
        if(s.charAt(i) == '('){
            if(trend >= 0){
                trend ++;
                openParenthesis[0] ++;
            }else{
                openParenthesis.unshift(1);
                trend = 1;
            }
        }else if(openParenthesis[0] > 0){
            if(trend > 0){
                if(openParenthesis[0] === 1){
                    openParenthis
                }
            }
        }else{
            trend = 0;
        }
    
        console.log(distanceFromOpen)
    }if(currentValid - (distanceFromOpen * 2) > longestValid){
        longestValid = currentValid - (distanceFromOpen * 2);
    }
    return longestValid;
    
    
};

//save for later
var maxSubArray = function(nums) {
    
    let highestTotal = 0;
    let runningTotal = [];
    let toRemove = {};
    let count = 0;
    let balance = 1;
    for(let i = 0; i < nums.length; i ++){ 
        if(balance > 0){
            runningTotal[0] += nums[i];
            if(nums[i]< 0){
                balance = -1;
            }
        }else{
            if(nums[i] > 0){
                runningTotal.unshift(nums[i]);
                balance = 1;
            }else{
                runningTotal[0]+= nums[i];
            }
        }
        if(runningTotal[0])
    };
        
    
    
};