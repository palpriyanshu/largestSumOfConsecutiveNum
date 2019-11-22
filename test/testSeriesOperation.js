const getLargestSum = require("../src/seriesOperation.js").getLargestSum;
const assert = require('assert');

describe("getLargestSum",function() {
  it(" should give sum of largest three consecutive numbers", function(){
    assert.strictEqual(getLargestSum([1,2,3,4]),9);
  });

  it(" should give sum of largest three consecutive numbers not sorted", function(){
    assert.strictEqual(getLargestSum([12,2,73,0,1]),87);
  });
});
