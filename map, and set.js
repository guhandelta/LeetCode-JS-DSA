// Sample an array of arrays representing your nested data
const nestedArr = [
    [1, 2, 3, 4, 3, 4],  // Array 1
    [3, 4, 2, 4, 5, 2, 5, 4, 6],  // Array 2
    [7, 2, 4, 3, 8, 4, 9]   // Array 3
];

// Create a Set to efficiently track seen values
const seen = new Set();

// Apply the `map` method to the nested array
const filteredArray = nestedArr.map(innerArray => {
    // Use `filter` to create a new array containing only unique elements from the inner array
    return innerArray.filter(val => {
        // Check if the value has not been seen before using the `Set`
        if (!seen.has(val)) {
            // If unique, add the value to the `seen` Set to mark it as seen
            seen.add(val);
            // Include this unique value in the filtered array
            return true;
        }
        // If not unique (already seen), exclude it from the filtered array
        return false;
    });
});

// Print the resulting array containing unique elements from each inner array
console.log('Results:\t', filteredArray);


/*

    Space and Time Complexity of the Code

    The provided code exhibits the following space and time complexity:

    Time Complexity:

    - O(n * m), where:
        -> `n` is the total number of elements in all the nested sub-arrays combined.
        -> `m` is the average length (number of elements) of each sub-array in the nested array.

    Here's a breakdown of the time complexity:

    -> The outermost `map` iterates over each sub-array in `nestedArr` (on average `n` times).
    -> Within the `map` callback, the `filter` method iterates through each element of the current sub-array (on average `m` times).
    -> The `has` check on the `seen` Set takes constant time (O(1)) for each element.

    Since both loops (`map` and `filter`) are nested, the total time complexity becomes O(n * m).

    Space Complexity:

    -> O(n), where:
        -> `n` is the total number of elements in all the nested sub-arrays combined.

    Here's why:

    -> The `seen` Set stores unique elements encountered during the filtering process.
    -> In the worst case, all elements in the nested arrays are unique, leading to a `seen` Set with a maximum size of `n`.

    Explanation:

    The time complexity of nested loops is determined by multiplying the individual time complexities. The `map` iterates over the outer array (`n` times), and within each iteration, the `filter` iterates over the sub-array (`m` times on average). The `has` check on the `seen` Set has constant time complexity.

    The space complexity is primarily driven by the `seen` Set. In the worst case where all elements are unique, the `seen` Set grows proportionally to the total number of elements (`n`). However, if there are many duplicates, the `seen` Set will be smaller, but it's still bounded by the total number of elements (`n`).

    Additional Notes:

    -> The actual time complexity might be slightly better than O(n * m) if there are significant duplicate elements within each sub-array. The `filter` method will stop iterating once it encounters a duplicate, reducing the overall number of iterations.
    -> The space complexity could be slightly higher than O(n) if additional data structures are used within the `filter` callback for specific filtering logic.

*/