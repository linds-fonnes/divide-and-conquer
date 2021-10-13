function findFloor(arr, num) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    const midIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[midIdx] === num || (arr[midIdx] < num && arr[midIdx + 1] > num))
      return arr[midIdx];
    if (leftIdx === rightIdx && arr[midIdx] <= num) return arr[midIdx];

    if (arr[midIdx] < num) {
      leftIdx = midIdx + 1;
    } else {
      rightIdx = midIdx - 1;
    }
  }
  return -1;
}

module.exports = findFloor;
