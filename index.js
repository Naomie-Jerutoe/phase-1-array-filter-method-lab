// Code your solution here

function findMatching(arrayOfDrivers, string){
  const findMatchingDriver = arrayOfDrivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  return findMatchingDriver;
}

function fuzzyMatch(arrayOfDrivers, string){
  const firstLetterMatch = arrayOfDrivers.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()));
  return firstLetterMatch;
}

function matchName(arrayOfDriversObject, string){
  const matchingName = arrayOfDriversObject.filter(driver => driver.name === string);
  return matchingName;
}
