function sortedFrequency(arr, num) {
  const firstNum = findFirst(arr, num);
  const lastNum = findLast(arr, num);
  console.log(firstNum);
  console.log(lastNum);

  function findFirst(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
      const midIdx = Math.floor((leftIdx + rightIdx) / 2);
      if (arr[midIdx] === num && arr[midIdx - 1] !== num) {
        return midIdx;
      }
      if (arr[midIdx] < num) {
        leftIdx = midIdx + 1;
      } else {
        rightIdx = midIdx - 1;
      }
    }
  }

  function findLast(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
      const midIdx = Math.floor((leftIdx + rightIdx) / 2);
      if (arr[midIdx] === num && arr[midIdx + 1] !== num) {
        return midIdx;
      }
      if (arr[midIdx] <= num) {
        leftIdx = midIdx + 1;
      } else {
        rightIdx = midIdx - 1;
      }
    }
  }

  return lastNum - firstNum + 1 || -1;
}

module.exports = sortedFrequency;
