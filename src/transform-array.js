const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let a = '--discard-next';
  let b = '--discard-prev';
  let c = '--double-next';
  let d = '--double-prev';
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === a || arr[i] === c && i === (arr.length - 1) || arr[i] === d && i === 0) continue;
      arr[i - 1] === a ? i++ :
      arr[i] === b ? newArr.pop() :
      arr[i] === c ? newArr.push(arr[i + 1]) :
      arr[i] === d ? newArr.push(arr[i - 1]) : 
      newArr.push(arr[i]);
    }
  return newArr
}

module.exports = {
  transform
};
