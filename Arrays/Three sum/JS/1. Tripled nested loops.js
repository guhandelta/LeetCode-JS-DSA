
/*
    Brute Force
    Time - O(n3)
    Space - O(1)
*/


function threeSumBruteForce(nums, target = 0) {       // API: array + desired sum (default 0)
  const n = nums.length;                              // 1️⃣ Cache length for clarity.
  const res = [];                                     // 2️⃣ Collect *unique* triplets here.

  for (let i = 0; i < n - 2; i++) {                   // 3️⃣ Pick 1st number.
        for (let j = i + 1; j < n - 1; j++) {             // 4️⃣ Pick 2nd number (strictly after i).
            for (let k = j + 1; k < n; k++) {               // 5️⃣ Pick 3rd number (after j).
                const sum = nums[i] + nums[j] + nums[k];      // 6️⃣ Compute current triple’s sum.
                if (sum === target) {                         // 7️⃣ Exact match? -- store it.
                    
                    // 8️⃣ Sort to normalize order, preventing duplicates.
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);

                    // 9️⃣ Dedup check (linear, but n is tiny here).
                    if (!res.some(t => t[0] === triplet[0] && t[1] === triplet[1] &&t[2] === triplet[2])) {
                        res.push(triplet);                        // 🔟 Add only if brand-new.
                    }
                }
            }
        }
    }
  return res;                                         // 🔚 Either [] or list of unique triplets.
}

// function threeSumClosestBrute(nums, target) {
//   const n = nums.length;                       // 1️⃣  Cache length so we don’t recompute.
//   let best = Infinity;                         // 2️⃣  Track best delta (abs difference).
//   let bestSum = 0;                             // 3️⃣  Store the corresponding sum.

//   for (let i = 0; i < n - 2; i++) {            // 4️⃣  Pick first number.
//     for (let j = i + 1; j < n - 1; j++) {      // 5️⃣  Pick second number.
//       for (let k = j + 1; k < n; k++) {        // 6️⃣  Pick third number.
//         const sum = nums[i] + nums[j] + nums[k];   // 7️⃣  Compute triple’s sum.
//         const delta = Math.abs(sum - target);      // 8️⃣  How far from target?
//         if (delta < best) {                        // 9️⃣  Closer than anything seen?
//           best = delta;                            // 🔟  Record new best delta…
//           bestSum = sum;                           //     …and the associated sum.
//           if (best === 0) return bestSum;          // 1️⃣1️⃣  Perfect hit ➜ early exit.
//         }
//       }
//     }
//   }
//   return bestSum;                                 // 🔚  Closest sum encountered.
// }


function threeSum(arr, k){
    if(arr.length === 0 || k===null) return;

    const len = arr.length;
    
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            for(let l=j+1;l<len;l++){
                if(arr[i]+arr[j]+arr[l] === k){
                    return [ arr[i], arr[j], arr[l] ]
                }
            }
        }
    }
    
    return 'The sum is attainable'
}

function threeSum(arr, k){
    if(arr.length === 0) return [];
    
    const len = arr.length;
    
    const given = arr.sort((a,b) => a-b);
    
    const res = new Set();
    
    for(let i=0;i<len;i++){
        if(i>0 & given[i] === given[i-1]) continue;
        for(let j=i+1;j<len;j++){
            const compliment = k - given[i] - given[j];

            const triplet = [compliment, given[i], given[j]].sort((a,b) => a-b);



        
        }
    }
    return 'The sum is attainable'
}




function findMissingValue(arr){

    if(arr.length === 0) return 'Invalid array'

    const len = arr.length;

    for(let i=0;i<n;i++){
        while(
            i>0 &&
            i<n &&
            arr[arr[i]-1] !== arr[i]
        ){
            const validIndex = arr[i]-1;
            
            [arr[i], arr[validIndex]] = [arr[validIndex], arr[i]]
        }
    }
    for(let i=0;i<n;i++){
        if(nums[i] !== i+1){
            return i+1 //Smallest missing positive
        }
    }

    return n + 1 // If teh order is correct, the missing number is n+1
}