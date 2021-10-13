function countZeroes(arr) {
  if (arr[0] === 0) return arr.length;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    const midIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[midIdx] === 0 && arr[midIdx - 1] === 1) {
      return arr.length - midIdx;
    }
    if (arr[midIdx] === 1) {
      leftIdx = midIdx + 1;
    } else {
      rightIdx = midIdx - 1;
    }
  }
  return 0;
}
module.exports = countZeroes;
