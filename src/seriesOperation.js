const getMaxNum = require('./utility.js').getMaxNum;

const getLargestSum = function(numberList){
  let sum = 0;
  let consecutiveSums = [];

  for(let idx = 0;idx < numberList.length - 2; idx++){
    sum = numberList[idx] + numberList[idx + 1] + numberList[idx + 2];
    consecutiveSums.push(sum); 
  }
  
  return getMaxNum(consecutiveSums);
}; 

exports.getLargestSum = getLargestSum;
