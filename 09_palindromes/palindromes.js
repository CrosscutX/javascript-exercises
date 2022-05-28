const palindromes = function (str) {
    //Checks the last element of string for puncuation and returns 
    //a version of the string without puncutation if so
    if(str.slice(-1) == '.' || str.slice(-1) == '!' || str.slice(-1) == '?'){
        str = str.slice(0, str.length -1);
    }
    //Create a reversed version of the string
    //replace all spaces and commas with nothing
    let oldString = str.replaceAll(' ', '').replaceAll(',', '').toLowerCase();
    let reverseString = str.replaceAll(' ', '').replaceAll(',', '').split('').reverse().join("").toLowerCase();

    console.log(oldString);
    console.log(reverseString);
    
    if(oldString === reverseString){
        return true;
    }else{
        return false;
    }
};
palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
