function findRotationCount(sortedArr, low = 0, high = sortedArr.length - 1) {
  if (high < low) return 0;
  if (high === low) return low;
  let middle = Math.floor((low + high) / 2);

  if (middle < high && sortedArr[middle + 1] < sortedArr[middle])
    return middle + 1;

  if (middle > low && sortedArr[middle] < sortedArr[middle - 1]) {
    return middle;
  }

  if (sortedArr[high] > sortedArr[middle]) {
    return findRotationCount(sortedArr, low, middle - 1);
  }

  return findRotationCount(sortedArr, middle + 1, high);
}

module.exports = findRotationCount;
