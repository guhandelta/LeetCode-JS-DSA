



function findMedianByBinarySearch(nums1, nums2){

    if(nums1.length > nums2.length){
        [nums1, nums2] = [nums2, nums1];
    }

    const l1=nums1.length, l2=nums2.length;
    const totalLength = l1 + l2;
    const halfLength = totalLength/2;

    let left = 0, right = l1;

    while(left<=right){
        const partitionX = Math.floor((left+right)/2);
        const partitionY = totalLength-halfLength;

        
    }

}


Explain the step by step execution of the code with nums1 = [12,23,34,45,56,67,78] and nums2 = [79,89,910,1011] as the two sorted arrays


/**
 * Find the median of two sorted arrays using binary search approach
 * This achieves O(log(min(m,n))) time complexity with O(1) space
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 * @return {number} - The median value
 */
function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is the smaller array for optimization
    // This way our binary search will be performed on the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]; // Swap the arrays
    }
    
    const m = nums1.length;
    const n = nums2.length;
    const totalLength = m + n;
    const halfLength = Math.floor((totalLength + 1) / 2);
    
    // Binary search on the smaller array (nums1)
    // We're looking for a partition point in nums1
    let left = 0;
    let right = m;
    
    while (left <= right) {
        // Calculate partition positions in both arrays
        // partitionX: Number of elements we take from nums1 on left side
        const partitionX = Math.floor((left + right) / 2);
        // partitionY: Remaining elements needed from nums2 to maintain balance
        const partitionY = halfLength - partitionX;
        
        // Find the four boundary elements around the partition
        // minX: Last element from nums1 on the left side || The largest element in the left partition of nums1. If partitionX is 0 (meaning no elements are taken from the left of nums1), use Number.NEGATIVE_INFINITY.
        const minX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        // maxX: First element from nums1 on the right side || The smallest element in the right partition of nums1. If partitionX is m (meaning all elements are taken from the left of nums1), use Number.POSITIVE_INFINITY.
        const maxX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];
        // minY: Last element from nums2 on the left side || The largest element in the left partition of nums2. If partitionY is 0, use Number.NEGATIVE_INFINITY.
        const minY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        // maxY: First element from nums2 on the right side || The smallest element in the right partition of nums2. If partitionY is n, use Number.POSITIVE_INFINITY.
        const maxY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];
        
        // Check if we found the correct partition
        if (maxX <= minY && maxY <= minX) {
            // We found the correct partition!
            // For odd total length: median is the max of left elements
            if (totalLength % 2 === 1) {
                return Math.max(maxX, maxY);
            } 
            // For even total length: median is average of max of left elements and min of right elements
            else {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            }
        } 
        // If maxX is too large, move partition to the left in nums1
        else if (maxX > minY) {
            right = partitionX - 1;
        } 
        // If maxY is too large, move partition to the right in nums1
        else {
            left = partitionX + 1;
        }
    }
    
    // If we reach here, the input arrays are not sorted
    throw new Error("Input arrays are not sorted");
}