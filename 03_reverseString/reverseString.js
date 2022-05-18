const reverseString = function(newStr) {
    let revStr = newStr.split("").reverse().join("");
    return revStr;
};
    console.log(reverseString('fuck'));
// Do not edit below this line
module.exports = reverseString;
