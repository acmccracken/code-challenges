var climbStairs = function(n) {
    let countingFunc = function(remainder, count){
        if(remainder < 0){
            return 0;
        }
        if(remainder === 0){
            return 1;
        }
        if(count[remainder]){
            return count[remainder]
        }
        count[remainder] = countingFunc(remainder - 1, count) + countingFunc(remainder - 2, count);
        
        return count[remainder];
    }
    return countingFunc(n, {});
  };