const testArray = ['Alex', "Wheeler", "Matt", 1,2];

const removeFromArray = function(arr, ...arg) {
    const array = arr;
    let newArray = [];

    arr.forEach(item =>{
        if(!arg.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
}

console.log(removeFromArray(testArray, 2, 1));
// Do not edit below this line
module.exports = removeFromArray;
