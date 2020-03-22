function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word[0].toUpperCase() + word.substr(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0] + " " + lastName[0];
}

// only thing I could find to add the results as number and not as a string was putting the + symbol 
function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let vat = originalPrice * (vatRate / 100);
  let totalPrice = +originalPrice + +vat;
  return Math.round(totalPrice * 100) / 100
}



function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let discount = originalPrice * (reduction / 100);
  let getSalePrice = +originalPrice - +discount;
  return Math.round(getSalePrice *100) /100;
}



function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let middle = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str[middle - 1] + str[middle];
  } else {
    return str[middle];
  }
}



function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}


function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let wordsreversed = []
  for(let i=0;i<words.length;i++){
    let result = words[i].split("").reverse().join("")
    wordsreversed.push(result);
  }
  return wordsreversed
}


function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  for(let i=0; i<users.length; i++){
    if(users[i].type === "Linux"){
      count++;
    }
  }
  return count;
}


function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total = 0;
  for(let i=0; i<scores.length; i++){
    total += scores[i]
  }
  return Number((total / scores.length).toFixed(2))
}


function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if(n%3===0 && n%5===0){
    return "fizzbuzz"
  }
  else if(n%5===0){
    return "buzz"
  }
  else if(n%3===0){
    return "fizz"
  }
  else 
    return n;
  }





module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
