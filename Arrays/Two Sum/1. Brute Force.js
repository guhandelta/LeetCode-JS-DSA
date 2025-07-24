

🔸 Time Complexity: O(n^2)
🔸 Space Complexity: O(1)

function twoSumBruteForce(nums, target) {
    // Outer loop: iterate through each element as the first number
    for (let i = 0; i < nums.length; i++) {
        // Inner loop: iterate through remaining elements as the second number
        // Start from i+1 to avoid using the same element twice and avoid duplicates
        for (let j = i + 1; j < nums.length; j++) {
            // Check if current pair sums to target
            if (nums[i] + nums[j] === target) {
                // Return indices when solution is found
                return [i, j];
            }
        }
    }
    // Return empty array if no solution found (shouldn't happen per problem constraints)
    return [];
}