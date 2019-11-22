const maxOfTwo = function(num1,num2){
  if(num1 > num2) {
    return num1;
  }
  return num2;
};

const getMaxNum = function(numbers){
  const maxNum = numbers.reduce(maxOfTwo);
  return maxNum;
};

exports.getMaxNum = getMaxNum;