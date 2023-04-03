//two sum

let nums = [2, 7, 11, 15];
let target = 9;

//first attempt. big O n^2

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

//second attempt

function twoSums (nums, target) {
  let prevValues = {};
  for (let i=0; i < nums.length; i++) {
    let neededValue = target - nums[i];
    let index2 = prevValues[neededValue];
    if (index2 != null) {
      return [i, index2]
    } else {
      prevValues[nums[i]] = i;
    }
  }
}
