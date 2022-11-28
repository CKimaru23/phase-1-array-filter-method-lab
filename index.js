const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(origin, find) {
    return origin.filter( possibleMatch =>
      possibleMatch.toLowerCase() === find.toLowerCase()
    )
  }
  findMatching(drivers, 'Bobby');
  
  function fuzzyMatch(origin, tstString) {
    return origin.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(tstString.toLowerCase()) === 0
    )
  }

function matchName(array,name) {
    console.log(name)
    console.log(array)
let results = array.filter(object => object.name === name);
console.log(results)
return results
}
