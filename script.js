function threeSum(arr, target) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Initialize variables for the closest sum and its difference from the target
  let closestSum = Infinity;
  let minDiff = Infinity;

  // Iterate through each element as the first element of the triplet
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // Pointer to the second element
    let right = arr.length - 1; // Pointer to the third element

    // Find the sum of the triplet and calculate the difference from the target
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      const diff = Math.abs(sum - target);

      // Update the closest sum and its difference if the current sum is closer to the target
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }

      // Adjust the pointers based on the current sum
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // If the sum is equal to the target, return the sum immediately
        return sum;
      }
    }
  }

  // Return the closest sum
  return closestSum;
}

module.exports = threeSum;
