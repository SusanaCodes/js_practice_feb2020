const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  for (i = 0; i < nums.length - 1; i++) {
    if (nums[i] === n)
      return nums[i + 1];
  }
  return null;
};




const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let count0s = 0; let count1s = 0;
  str.split('').forEach((number) => {
    if (Number(number) === 0) {
      count0s++
    } else if (Number(number) === 1) {
      count1s++
    }
  })
  return { 1: count1s, 0: count0s }
};



const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return Number(n.toString().split("").reverse().join(""))
};




const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.flat().reduce((a, b) => a + b, 0);
};


const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length >= 2) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
  }
  return arr
};


const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
    return Object.values(haystack).toString.toLowerCase().includes(searchTerm.toLowerCase())
};




const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
