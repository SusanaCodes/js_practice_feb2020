/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an Array is required");
  let total = 0;
  arr.forEach(n=> {
    if (n%5===0 || n%3===0){
      total +=n;
    }
  });
  return total;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
  ************TO USE /^    /.test(str); whenever you want to know whether a pattern is found in a string. Returns a boolean**********
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  return /^[a,c,g,t,A,C,G,T]/.test(str);
};



/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  const ComplementaryDNA = {T: 'A', A: 'T', C: 'G', G: 'C'};
  return str.split('').map(x => ComplementaryDNA[x]).join('');
};


/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
// const isItPrime = n => {
//   if (n === undefined) throw new Error("n is required");
//   if (n <= 1) return false; // negatives
//   if (n% 2 == 0 && n > 2) return false; // even numbers
//   let s = Math.sqrt(n); // store the square to loop faster
//   for(let i = 3; i <= s; i++) { // start from 3, stop at the square, increment
//       if(n % i === 0) return false; // modulo shows a divisor was found
//   }
//   return true;
// };

const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  for (i = 3; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  } return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */



const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  const innerArr = [];
  for(let i = 0; i < n ; i++) {
    innerArr.push(fill);
  }
  const finalArr = [];
  for(let i = 0; i < n; i++) {
    finalArr.push(innerArr);
  }
  return finalArr;
};
  

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let count = 0;
  for (let i = 0; i < staff.length; i++) {
    if (staff[i].rota.includes(day)) {
      count ++
    }
  }
  if (count >= 3) {
    return true
  } else {
    return false
  }
};


module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
