
/*
    -> Get the total length of the merged array and calculate the possible position of the median value
    -> Iterate through both the arrays and assign the current value in 1st array if the 1st array has not been exhausted and (if the 2nd array has been exhausted or the current value in the 1st is <= current value in the 2nd)
    -> else assign the current value in the 2nd array as the current value
    -> increment i or j as per the value assigned as the current value and increment the value of count to kep track of the numbers counted, before the count reaches the calculated position of the possible median value
    -> reassign the current value to previoud in every iteration
    -> if the totel length is 
        - -> odd:  return current value as the median
        - -> even: return the average of the previous and current value as the median
*/

const { useEffect } = require( "react" );

function findMedianSortedArrays(nums1, nums2) {

    const l1=nums1.length, l2=nums2.length, totalLength = l1+l2;

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
    

    const medianPos = Math.floor(totalLength/2);

    let i,j,count=0, previous=0, current=0;

    while(count<=medianPos){

        previous=current;

        // while i < length of nums1 and the values of nums 2 are exhausted or value in nums1 <= value in nums2
        if(i<l1 && (j>=l2 || nums1[i]<=nums2[j])){
            // Take the value from nums1
            current = nums1[i];
            // increment the i to the next element in nums1
            i++;
        } else {
            // Take the value from nums2
            current = nums2[j];
            // increment the j to the next element in nums2
            j++;
        }

        // Increment the number of elements counted
        count++;
    }

    if((totalLength/2)%2!==0){
        return current
    } else {
        return (previous+current)/2
    }

}

const nos1 = [23,34,45,56,67,78], nos2 = [34,45,56,67,78,89];
console.log(`The Median of the sorted arrays is ${findMedianSortedArrays(nos1, nos2)}`);




