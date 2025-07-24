/**
 * Finds two numbers in an array that add up to a specific target using a two-pass hash map approach.
 *
 * Space Complexity: O(n) - The space used by the hash map grows linearly with the number of elements in the input array.
 * Time Complexity: O(n) - The algorithm performs two linear passes over the array, making it efficient for large inputs.
 *
 */
function twoSumHashMapTwoPass(nums, target) {
    // Initialize a Map to store numbers and their corresponding indices.
    const numToIndex = new Map();

    // First pass: Populate the hash map with each number from the array and its index.
    // This allows for quick lookups of numbers and their positions later.
    for (let i = 0; i < nums.length; i++) {
        // Store the number as the key and its index as the value.
        // If duplicate numbers exist, the map will store the index of the last occurrence.
        numToIndex.set(nums[i], i);
    }

    // Second pass: Iterate through the array again to find the complement for each number.
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement needed to reach the target.
        const complement = target - nums[i];

        // Check if the complement exists in the hash map AND
        // ensure that the complement is not the number at the current index (i).
        // This prevents using the same element twice.
        if (numToIndex.has(complement) && numToIndex.get(complement) !== i) {
            // If both conditions are met, a solution is found.
            // Return the index of the current number and the index of its complement.
            return [i, numToIndex.get(complement)];
        }
    }

    // If the loops complete without finding a pair, return an empty array.
    return [];
}