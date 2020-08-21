function validAnagram(string1, string2){
    if(string1.length!= string2.length){
        return false;
    }
    const lookup = {};
    
    for(let i = 0; i < string1.length; i ++){
        let letter = string1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < string2.length; i ++){
        let letter = string2[i]
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
}