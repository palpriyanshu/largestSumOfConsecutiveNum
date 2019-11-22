const getLargestSum = require("./src/seriesOperation.js").getLargestSum;

const main  = function(){
  const numbers = [2,3,4,100,56,0];
  const largestSum = getLargestSum(numbers);
  console.log(largestSum);
};

main();