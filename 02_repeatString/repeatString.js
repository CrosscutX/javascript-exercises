const repeatString = function(str, num) {
    let repStr = '';
   if(num < 0){
       return 'ERROR';
   } 
    for(let i = 1; i <= num; i++){
        repStr += str;
    }
    return repStr;
};

repeatString('hey',5);

// Do not edit below this line
module.exports = repeatString;
