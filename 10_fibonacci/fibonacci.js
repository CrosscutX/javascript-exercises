const fibonacci = function(location) {
    let fib = [1,1];
    for(let i = 2; i <= 25; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    if(location < 0){
        return 'OOPS'
    }else{
        return fib[location - 1];
    }
   
};
console.log(fibonacci('6'));
// Do not edit below this line
module.exports = fibonacci;
