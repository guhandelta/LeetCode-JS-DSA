


/**
 * Space Complexity: O(n) - The space used by the algorithm grows linearly with the input size (n)
 * due to the `map` storing elements from `nums`.
 * Time Complexity: O(n) - The time taken by the algorithm grows linearly with the input size (n)
 * because in the worst case, we iterate through the `nums` array once.
 */
function twoSum(nums, target) {
  const map = {}; // Initialize a hash map (or object in JS) to store numbers and their indices.
  let result = []; // Initialize an array to store the indices of the two numbers that sum up to the target.

    // Iterate through the 'nums' array using 'some' for early termination.
    // 'some' is used here to "short-circuit" the iteration once the pair is found.
    nums.some((num, i) => {
        const complement = target - num; // Calculate the 'complement' needed to reach the target.

        // Check if the 'complement' already exists in the map.
        // 'map[complement] !== undefined' checks if we've seen a number that, when added to the current 'num', equals the 'target'.
        if (map[complement] !== undefined) {
            result = [map[complement], i]; // If found, store the index of the complement and the current number's index.
            return true; // Short-circuit: Return true to stop the 'some' iteration immediately.
        }

        map[num] = i; // If the complement is not found, store the current number and its index in the map for future lookups.
        return false; // Continue iteration: Return false to allow 'some' to proceed to the next element.
    });

  return result; // Return the found pair of indices.
}

/*
What is short-circuiting here?
Short-circuiting in this context refers to the early termination of the `nums.some()` iteration.
The `some()` method stops iterating as soon as its callback function returns `true`.

Why is it short-circuiting?
It's short-circuiting because once the two numbers that sum up to the target are found, there's no need to continue
iterating through the rest of the array. Finding one valid pair is sufficient for this problem.

Pros of this approach (using hash map and short-circuiting):
1. Efficiency: Achieves O(n) time complexity by reducing lookups to nearly constant time (average O(1)) using the hash map.
2. Readability: The logic is relatively straightforward to understand.
3. Early Exit: Short-circuiting with `some()` prevents unnecessary iterations once the solution is found, saving computational resources.

Cons of this approach:
1. Space Usage: Requires O(n) additional space for the hash map, which can be a concern for very large input arrays.
2. Not suitable for multiple pairs: If the problem required finding ALL pairs that sum to the target, this short-circuiting
    approach would need modification (e.g., using `forEach` and collecting all pairs).
*/