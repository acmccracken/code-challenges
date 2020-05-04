
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

