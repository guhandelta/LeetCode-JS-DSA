

// Sample an array of arrays
const arr = [
    [1, 2, 3, 4, 3, 4], 
    [3, 4, 2, 4, 5, 2, 5, 4, 6], 
    [7, 2, 4, 3, 8, 4, 9] 
];

// Use reduce to iterate over each array in 'arr' and remove duplicates
const removeDuplicates = arr.reduce(({ seen, results }, curr) => {
    // Filter out duplicates from the current array
    const cleanedArray = curr.filter(val => {
        // If the value hasn't been seen before,.. 
        if (!seen.has(val)) {
            seen.add(val);
            
            //.. add it to the 'seen' set and keep it
            return true;
        }
        // Otherwise, discard the duplicate
        return false;
    });

    // Add the cleaned array to the 'results' array
    results.push(cleanedArray);

    // Return the updated 'seen' set and 'results' array for the next iteration
    return { seen, results };

// Initial state for the reduce function: an empty Set to track seen values and an empty array for results
}, { seen: new Set(), results: [] });

// Print the cleaned arrays
console.log("Cleaned array:\t", removeDuplicates.results);

// ------------- ------------- ------------- ------------- ------------- ------------- ------------- -------------
/*
Time Complexity:

- Outer loop: The reduce() function iterates over each array in the input array, making it O(N), where N is the number of arrays.
- Inner loop: The filter() function iterates over each element in the current array, making it O(M), where M is the average number of elements in each array.
Therefore, the overall time complexity is O(N * M).

Space Complexity:

- seen Set: In the worst case, the seen Set can store all unique elements from all arrays. This can be O(K), where K is the total number of unique elements.
- results array: This array stores the cleaned arrays. In the worst case, it can store N arrays, each with M elements. This is O(N * M).
Therefore, the overall space complexity is O(K + N * M).
*/
// ------------- ------------- ------------- ------------- ------------- ------------- ------------- -------------



/* Interesting Facts About Using reduce() for this DSA Problem

> Functional Paradigm: reduce() is a powerful functional programming tool. It allows us to process a list of elements and reduce them to a single value. In this case, we're reducing an array of arrays to a new array with duplicates removed.
> State Management: The reduce() function allows us to maintain state (the seen Set) across iterations, making it efficient for keeping track of unique elements.

> Concise and Expressive: By using reduce(), we can write concise and expressive code, avoiding explicit loops and temporary variables.


> Best and Worst Situations for Using reduce() for this Problem

    - Best Situations:

        = When you need to accumulate a result: This is the core purpose of reduce(). In this case, we're accumulating an array of cleaned arrays.
        = When you need to maintain state across iterations: The ability to pass an accumulator object allows us to efficiently track seen elements.
        = When you want a functional approach: reduce() is a functional programming tool that can lead to more concise and elegant code.
    - Worst Situations:

        = Simple filtering: If you only need to filter out duplicates from a single array, a simple filter() with a Set might be more straightforward.
        = Performance-critical scenarios: While reduce() is efficient, for extremely large datasets, more optimized approaches might be necessary. However, in most practical scenarios, the performance difference is negligible.
        = In conclusion, reduce() is a versatile tool that can be effectively used to solve this specific problem. By understanding its strengths and limitations, you can make informed decisions about when to apply it in your code.

*/