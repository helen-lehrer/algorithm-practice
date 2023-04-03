//two sum

//first attempt

let nums = [2, 7, 11, 15];
let target = 9;

function twoSums (nums, target) {
  let answerArr = [];
  nums.foreach(number => {
    for(i=0; i < nums.length; i++) {
      if (number + nums[i] === target && number.indexOf() !== i) {
        answerArr.push(number);
        answerArr.push(nums[i]);
      }
    }
  })
  return answerArr;
}