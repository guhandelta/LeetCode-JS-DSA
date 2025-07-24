

function productOfArraItemsExceptSelf(arr, choice){
    if(!arr.length || !choice) return 0

    let res = 1;

    for(let i=0;i<arr.length;i++){
        if(i===choice) continue;
        res *= arr[i];
    }

    return res
}