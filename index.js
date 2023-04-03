//two sum

//first attempt

let nums = [2, 7, 11, 15];
let target = 9;

function twoSums (nums, target) {
  let answerArr = [];
  for(z=0; z < nums.length; z++) {
    for(i=0; i < nums.length; i++) {
      if (nums[z] + nums[i] === target && z !== i) {
        answerArr.push(z);
        answerArr.push(i);
        return answerArr;
      }
    }
  }
}