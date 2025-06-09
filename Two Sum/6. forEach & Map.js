
/*
* Space Complexity: O(n) - Because the numMap stores up to n elements in the worst case (where n is the number of elements in nums).
* Time Complexity: O(n) - Because the code iterates through the nums array once, and Map operations (has, get, set) take average constant time O(1).
*/ 

function twoSumForEachMap(nums, target) {
  // Initialize a new Map to store numbers we've seen so far and their indices.
  // The Map will store key-value pairs where the key is the number itself,
  // and the value is its index in the 'nums' array.
  const numMap = new Map();

  // Initialize an empty array to store the result (the two indices).
  // This will be populated once the two numbers are found.
  let result = [];

  // Iterate over each number in the 'nums' array along with its index.
  // Using forEach is concise for iterating, but a traditional for loop
  // (for let i = 0; i < nums.length; i++) would also work.
  nums.forEach((num, i) => {
    // Calculate the 'complement' needed to reach the target.
    // If 'num' + 'complement' equals 'target', then 'complement' is the other number we're looking for.
    const complement = target - num;

    // Check if the 'complement' already exists as a key in our 'numMap'.
    // If it does, it means we have found the two numbers that sum up to the target.
    if (numMap.has(complement)) {
      // If the complement is found, set the 'result' array.
      // The first element is the index of the complement (retrieved from the map).
      // The second element is the current number's index 'i'.
      result = [numMap.get(complement), i];

      // Since the problem states there's exactly one solution,
      // we could theoretically stop here by using a traditional for loop with a 'break'
      // or returning directly if this function wasn't designed to always iterate through the whole array.
      // For forEach, we just set the result and let the loop finish,
      // assuming subsequent iterations won't overwrite a correct result.
    }

    // After checking for the complement, add the current number and its index to the 'numMap'.
    // This prepares the map for future iterations, so that current 'num' can potentially be
    // the 'complement' for a later number in the array.
    numMap.set(num, i);
  });

  // After iterating through all numbers (or finding the solution), return the 'result' array.
  return result;
}