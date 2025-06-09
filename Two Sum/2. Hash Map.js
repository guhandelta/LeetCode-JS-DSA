

🔸 Time Complexity: O(n)
🔸 Space Complexity: O(n)

function twoSumHashMap(nums, target) {
    // Create a Map to store number -> index mappings
    // Map is preferred over object for better performance with numeric keys
    const numToIndex = new Map();
    
    // Single pass through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate what number we need to find to reach the target
        const complement = target - nums[i];
        
        // Check if the complement exists in our map
        if (numToIndex.has(complement)) {
            // If found, return the stored index and current index
            // The complement's index comes first since it was seen earlier
            return [numToIndex.get(complement), i];
        }
        
        // Store current number and its index for future lookups
        // This allows us to find it when we encounter its complement later
        numToIndex.set(nums[i], i);
    }
    
    // Return empty array if no solution found
    return [];
}