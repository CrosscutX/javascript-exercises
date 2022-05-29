const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
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
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    if(oldestAge > currentAge){
        return oldest;
    }else if(currentAge > oldestAge){
        return current;
    }
   })
};

console.log(findTheOldest(people).name)

function getAge(birth, death){
    if (!death){
        death = new Date().getFullYear();
    }
        return death - birth;
    };




// Do not edit below this line
module.exports = findTheOldest;
