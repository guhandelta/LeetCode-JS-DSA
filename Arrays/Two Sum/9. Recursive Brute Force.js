

function twoSumRecursive(nums, target) {
    /**
     * Helper function to recursively find two sum
     * @param {number} startIndex - Starting index for search
     * @param {number} firstIndex - Index of first selected number (-1 if none)
     * @return {number[]} - Indices of solution or empty array
     */
    function findTwoSum(startIndex, firstIndex) {
        // Base case: reached end of array
        if (startIndex >= nums.length) {
            return [];
        }
        
        if (firstIndex === -1) {
            // No first number selected yet, try current number as first
            const result = findTwoSum(startIndex + 1, startIndex);
            if (result.length > 0) {
                return result;
            }
            // Try skipping current number
            return findTwoSum(startIndex + 1, -1);
        } else {
            // First number already selected, check if current number completes the sum
            if (nums[firstIndex] + nums[startIndex] === target) {
                return [firstIndex, startIndex];
            }
            // Continue searching
            return findTwoSum(startIndex + 1, firstIndex);
        }
    }
    
    // Start recursive search
    return findTwoSum(0, -1);
}
