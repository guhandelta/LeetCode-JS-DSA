

Space Complexity: O(1)
The extra space used by this algorithm is constant, regardless of the input array size. The acc array stores at most two elements, and a few variables (curr, i, complement, j) are used.

Time Complexity: O(n^2)
The reduce method iterates through the nums array, which is n iterations. Inside each iteration, nums.indexOf() is called. In the worst case, indexOf has to search through nearly the entire remaining array, which can be up to n elements. Therefore, n iterations each doing n work leads to a time complexity of O(n * n) = O(n^2).


function twoSumIndexOf(nums, target) {
  // Use the `reduce` method to iterate over the `nums` array.
  // `acc` (accumulator) will store the result (the pair of indices).
  // It's initialized as an empty array `[]`.
  // `curr` (current value) is the number being processed in the current iteration.
  // `i` (index) is the index of the `curr` element.
  return nums.reduce((acc, curr, i) => {
    // If we've already found a pair in a previous iteration (`acc` is not empty),
    // we can stop searching and return the found pair immediately.
    // This optimization is crucial for performance and correctly handles the "exactly one solution" constraint.
    if (acc.length === 2) {
      return acc;
    }

    // Calculate the `complement` needed to reach the `target` when added to `curr`.
    // For example, if `target` is 9 and `curr` is 2, the `complement` is 7.
    const complement = target - curr;

    // Search for the `complement` in the rest of the `nums` array.
    // `nums.indexOf(value, startIndex)`:
    // - `value`: The `complement` we are looking for.
    // - `startIndex`: `i + 1` ensures that we only search *after* the current index `i`.
    //   This prevents using the same element twice and optimizes the search by avoiding
    //   already processed elements.
    const j = nums.indexOf(complement, i + 1);

    // Check if the `complement` was found (`indexOf` returns -1 if not found).
    // If `j` is not -1, it means we found the complement.
    // In this case, `[i, j]` is our solution pair of indices.
    // If `j` is -1, it means no complement was found for the current `curr` element,
    // so we return the `acc` as is (which will be an empty array unless a pair was found earlier).
    return j !== -1 ? [i, j] : acc;
  }, []); // Initialize `acc` (the accumulator) as an empty array.
}