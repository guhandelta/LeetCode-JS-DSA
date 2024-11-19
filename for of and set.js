const removeDuplicates = (nestedArr) => {

// Initialize an empty Set to store seen values
const seen = new Set();

// Initialize an empty array to store the cleaned sub-arrays
const results = [];

    // Iterate through each sub-array (`arr`) in the nested array (`nestedArr`)
    nestedArr.forEach((arr) => {
        const uniqueArr = []; // Create an empty array for the cleaned sub-array

        // Iterate through each element (`val`) in the current sub-array (`arr`)
        for (const val of arr) {
            // Check if the element (`val`) has not been seen before
            if (!seen.has(val)) {
                // If not seen, add it to the seen set and the cleaned sub-array
                seen.add(val);
                uniqueArr.push(val);
            }
        }

        // After processing the sub-array, add the cleaned sub-array to the results
        results.push(uniqueArr);
    });

    // Return the final array containing cleaned sub-arrays
    return results;
};

// Sample array of arrays
const nestedArr = [
    [1, 2, 3, 4, 3, 4],
    [3, 4, 2, 4, 5, 2, 5, 4, 6],
    [7, 2, 4, 3, 8, 4, 9],
];

// Remove duplicates and store the cleaned array
const cleanedArray = removeDuplicates(nestedArr);

// Print the cleaned array
console.log("Cleaned array:\t", cleanedArray);


/*

    Space Complexity:

    O(N): The space complexity is linear with respect to the total number of elements (N) in the nested array.
    The seen Set stores at most N unique elements.
    The results array stores at most N unique elements.
    The uniqueArr array, in the worst case, can store all elements of a sub-array, but it's reused for each sub-array.
    Time Complexity:

    O(N): The time complexity is also linear with respect to the total number of elements (N).
    The outer loop iterates over each sub-array, which takes O(M) time for a sub-array of size M.
    The inner loop iterates over each element in the sub-array, which takes O(M) time.
    The Set.has() operation has an average time complexity of O(1).
    Therefore, the total time complexity is O(M1 + M2 + ... + Mn) = O(N), where N is the total number of elements in the nested array.

*/