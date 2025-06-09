

🔸 Time Complexity: O(n log n) due to sorting
🔸 Space Complexity: O(n) (for keeping track of original indices)


function twoSumTwoPointerSorted(nums, target) {
// 1. Create an array of pairs, where each pair contains the number and its original index.
    //    This is crucial because sorting the array will lose the original positions,
    //    but the problem requires returning the original indices.
    //    Example: nums = [3, 1, 4, 2] => numsWithIndex = [[3, 0], [1, 1], [4, 2], [2, 3]]
    const numsWithIndex = nums.map((val, i) => [val, i]);

    // 2. Sort the `numsWithIndex` array based on the numerical values.
    //    The two-pointer approach requires the array to be sorted to work efficiently.
    //    The sorting function compares the first element of each inner array (the number).
    //    Example (after sorting): [[1, 1], [2, 3], [3, 0], [4, 2]]
    numsWithIndex.sort((a, b) => a[0] - b[0]);

    // 3. Initialize two pointers: 'left' at the beginning and 'right' at the end of the sorted array.
    let left = 0;
    let right = numsWithIndex.length - 1;

    // 4. Loop as long as the 'left' pointer is less than the 'right' pointer.
    //    If 'left' crosses 'right', it means all possible unique pairs have been checked.
    while (left < right) {
    // 5. Calculate the sum of the numbers at the current 'left' and 'right' pointer positions.
    //    We access the numerical value (index 0) from the inner arrays.
    const sum = numsWithIndex[left][0] + numsWithIndex[right][0];

    // 6. Check if the current sum equals the target.
    if (sum === target) {
        // If it does, we've found our pair!
        // Return the original indices (index 1) of these two numbers.
        return [numsWithIndex[left][1], numsWithIndex[right][1]];
    } else if (sum < target) {
        // 7. If the sum is less than the target, it means we need a larger sum.
        //    To get a larger sum, move the 'left' pointer one step to the right.
        //    This considers a larger number from the lower end of the array.
        left++;
    } else {
        // 8. If the sum is greater than the target, it means we need a smaller sum.
        //    To get a smaller sum, move the 'right' pointer one step to the left.
        //    This considers a smaller number from the higher end of the array.
        right--;
    }
    }

    // 9. If the loop completes and no pair is found that sums to the target,
    //    the function will implicitly return undefined. (Or you could explicitly `return undefined;`)
}