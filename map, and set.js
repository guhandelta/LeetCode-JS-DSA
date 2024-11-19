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