/**
 * Find the median of two sorted arrays using the merge approach => Simple
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 * @return {number} - The median value
 * Complexity Analysis
 *  Time Complexity: O(m+n) - Each element is processed from both arrays exactly once
 *  Space Complexity: O(m+n) - A new merged array is created with all elements
 */

function findMedianSortedArrays(nums1, nums2) {
    let i=0, j=0, mda, l1 = nums1.length, l2=nums2.length;
    const merged = [];

    // Check if the input arrays are valid or non-empty
    if(l1 == 0 && l2 == 0){
        console.log('Both the input arrays are empty');
        return 0;
    };

    // Find and return the median of the second array if the first array is empty
    if(l1 == 0){
        const mid = Math.floor(l2/2) 
        console.log(`The median of both the sorted arrays is: ${nums2[Math.floor(l2/2-1)]}`);
        return l2 % 2 !==0 ? nums2[mid] : (nums2[mid - 1] + nums2[mid])/2
    }
    
    // Find and return the median of the first array if the second array is empty
    if(l2 == 0){
        const mid = Math.floor(l1/2) 
        console.log(`The median of both the sorted arrays is: ${md}`);
        return l1 % 2 !==0 ? nums1[mid] : (nums1[mid - 1] + nums1[mid])/2 
    }
    
    // Push the values into the merged array, by comparing the values of both the arrays in every iteration
    while(i<l1 && j<l2){
        if(nums1[i]<=nums2[j]){
            merged.push(nums1[i])
            i++;
        } else {
            merged.push(nums2[j])
            j++;
        }
    }
    
    // Push any remaining values from the first array into the merger array
    while(i<l1){
        merged.push(nums1[i]);
        i++;
    }
    
    // Push any remaining values from the second array into the merger array
    while(j<l2){
        merged.push(nums2[j]);
        j++;
    }
    
    // Find the Median of the merged array
    if(merged.length%2!==0){
        console.log(`The median of both the sorted arrays is: ${merged[Math.floor(merged.length/2)]}`);
    } else {
        console.log(`The median of both the sorted arrays is: ${(merged[merged.length/2-1] + merged[merged.length/2])/2}`);
    }
    
    mda = (merged[merged.length/2-1] + merged[merged.length/2])/2;
    console.log(`The median of both the sorted arrays is: ${mda}`);
    return mda

}


const nos1 = [23,34,45,56,67,78], nos2 = [34,45,56,67,78,89];
console.log(`The Median of the sorted arrays is ${findMedianSortedArrays(nos1, nos2)}`);