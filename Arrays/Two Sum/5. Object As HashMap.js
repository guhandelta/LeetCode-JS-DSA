

Space Complexity: O(n) - The numMap can store up to 'n' elements in the worst case (where 'n' is the number of elements in nums).
Time Complexity: O(n) - The algorithm iterates through the nums array once, and hash map operations (insertion and lookup) take O(1) average time.


function twoSumObJectAsHashMap(nums, target) {
  // Create a hash map (or object in JavaScript) to store numbers and their indices.
  // The key will be the number itself, and the value will be its index in the `nums` array.
    const numMap = {};

    // Iterate through the `nums` array using a for loop to access both the number and its index.
    for (let i = 0; i < nums.length; i++) {
        // Get the current number from the array.
        const currentNum = nums[i];

        // Calculate the 'complement' needed to reach the target.
        // If currentNum + complement = target, then complement = target - currentNum.
        const complement = target - currentNum;

        // Check if the 'complement' already exists as a key in our `numMap`.
        // If it does, it means we have found the two numbers that sum up to the target.
        // We use `!== undefined` to handle cases where an index could be 0, which is falsy.
        if (numMap[complement] !== undefined) {
            // If the complement is found, return an array containing:
            // 1. The index of the complement (retrieved from `numMap`).
            // 2. The index of the current number (`i`).
            return [numMap[complement], i];
        }

        // If the complement is not found, add the current number and its index to the `numMap`.
        // This prepares for future iterations where the current number might be the complement
        // for a number encountered later in the array.
        numMap[currentNum] = i;
    }

  // If the loop completes and no solution is found (though the problem states there's always one),
  // this part of the code would be reached. For this specific problem, it's technically unreachable.
  // return []; // Or throw an error, depending on problem constraints for no solution.
}