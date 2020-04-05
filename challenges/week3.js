function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let newnums = []
  for (let i = 0; i < nums.length; i++) {
    let newnums = nums(i) * nums(i)
    newnums.push(i)
  }
  return newnums
}

	
function camelCaseWords(words) { 
  if (words === undefined) throw new Error("words is required");
  let result = []
  const firstword = words(1).chargAt(0).toLowerCase()
  for (let i = 1; i < words.length; i++) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
    result.push
  }
  return firstWord + result.join("")
}




function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let result = 0;
  people.forEach(people[i].subjects.length);
  return result;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let sum = 0;
  for (let i = 0; i < people.length; i++) {
    const total = people[i].subjects.length
    result = sum + total;
  } return result
}
  



}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
