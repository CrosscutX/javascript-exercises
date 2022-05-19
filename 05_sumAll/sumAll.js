const sumAll = function(int1, int2) {
    let newSum = 0;
    
    if(int1 < 0 || int2 < 0 || typeof int1 === 'string' || typeof int2 === 'string' || isNaN(int1)
            == true || isNaN(int2) == true){
        return 'ERROR';
    }

    if(int1 > int2){
        for(int2; int2 <= int1; int2++){
            newSum += int2;
        }
    }else if(int1 < int2){
        for(int1; int1 <= int2; int1++){
            newSum += int1;
        }
    }
    return newSum;
};

console.log(sumAll(5,"6"));

// Do not edit below this line
module.exports = sumAll;
