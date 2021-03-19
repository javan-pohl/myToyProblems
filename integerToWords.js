// Source: https://leetcode.com/problems/integer-to-english-words/

// Convert a non-negative integer num to its English words representation.

// Example 1:

// Input: num = 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// Example 4:

// Input: num = 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

const numberToWords = function (num) {
  // console.log("num: ", num);
  if (num === 0) {
    return "zero";
  }

  let n = num.toString();
  let numChunks = Math.ceil(n.length / 3);
  let chunks = new Array(numChunks);
  let places = thousands.slice(thousands.length - numChunks);
  let result = "";

  for (let i = numChunks - 1, o = n.length - 3; i >= 0; i -= 1, o -= 3) {
    let chunk = i === 0 && o < 0 ? n.substr(0, o + 3) : n.substr(o, 3);
    chunks[i] = chunk;
  }

  result = chunks.map((chunk, i) => {
    let int = parseInt(chunk);
    if (int != 0) return handleChunk(int) + places[i];
  });

  return result
    .join("")
    .split(" ")
    .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
    .join(" ");
};

const handleChunk = function (int) {
  let chunk = int.toString();
  let result = " ";
  if (chunk.length === 3) {
    result += numWords[chunk[0]] + " hundred ";
    chunk = chunk.substr(1, 2);
  }
  if (chunk.length >= 2) {
    let int = parseInt(chunk);
    if (int == 0) return result;
    if (int < 20) return (result += numWords[int] + " ");
    if (int >= 20) {
      result += numWords["" + chunk[0] + 0] + " ";
      chunk = chunk.substr(1);
    }
  }
  return parseInt(chunk) == 0 ? result : result + numWords[chunk] + " ";
};

const numWords = {
  0: "",
  00: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteeen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "fourty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

const thousands = [
  "decillion",
  "nonillion",
  "septillion",
  "sextillion",
  "quintillion",
  "quadrillion",
  "trillion",
  "billion",
  "million",
  "thousand",
  "",
];

var test = numberToWords(1234567891);
console.log("test: ", test);
