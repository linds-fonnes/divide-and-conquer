function findRotatedIndex(arr, num) {
  let leftHalf;
  let rightHalf;

  splitArray(arr);

  function splitArray(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
      const midIdx = Math.floor((leftIdx + rightIdx) / 2);
      if (arr[midIdx] > arr[midIdx + 1]) {
        leftHalf = [0, midIdx];
        rightHalf = [midIdx + 1, arr.length - 1];
      }

      if (arr[midIdx] < arr[midIdx + 1] && arr[midIdx] > arr[midIdx - 1]) {
        leftIdx = midIdx + 1;
      } else {
        rightIdx = midIdx - 1;
      }
    }
  }

  const leftNum = binarySearch(arr, leftHalf[0], leftHalf[1], num);
  const rightNum = binarySearch(arr, rightHalf[0], rightHalf[1], num);

  function binarySearch(arr, start, end, target) {
    let leftIdx = start;
    let rightIdx = end;
    while (leftIdx <= rightIdx) {
      const midIdx = Math.floor((leftIdx + rightIdx) / 2);
      const midVal = arr[midIdx];
      if (midVal < target) {
        leftIdx = midIdx + 1;
      } else if (midVal > target) {
        rightIdx = midIdx - 1;
      } else {
        return midIdx;
      }
    }
    return -1;
  }

  return Math.max(leftNum, rightNum);
}

module.exports = findRotatedIndex;
