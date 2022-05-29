const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
      
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  

  const findTheOldest = function(array) {
    
    return array.reduce((oldest, current)=>{
        if(oldest.yearOfDeath == undefined){
            oldest.yearOfDeath = new Date().getFullYear();
        }else if(current.yearOfDeath == undefined){
            current.yearOfDeath = new Date().getFullYear();
        }
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        const currentAge = current.yearOfDeath - current.yearOfBirth;
        
        console.log(oldestAge);
        
        if(oldestAge > currentAge){
            return oldest;
        }else if(currentAge > oldestAge){
            return current;
        }
    })
};

console.log(findTheOldest(people).name)

// Do not edit below this line
module.exports = findTheOldest;
