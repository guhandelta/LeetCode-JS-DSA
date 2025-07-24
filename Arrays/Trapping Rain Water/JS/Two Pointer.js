


function trappingRainWater(height){

    let left = 0;
    let right = height.length-1;
    let leftMax = 0;
    let rightMax = 0;
    let gatheredWater = 0;

    while(left<right){
        if(height[left] < height[right]){
            if(height[left]>leftMax){
                leftMax = height[left]
            } else {
                gatheredWater += leftMax - height[left];
            }
            left++
        } else {
            if(height[right]>rightMax){
                rightMax = height[right]
            } else {
                gatheredWater += rightMax - height[right];
            }
            right--
        }
    }

    return gatheredWater;
}