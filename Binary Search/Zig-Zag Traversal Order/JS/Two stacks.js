
function zigZagTraversalTwoStacks(root){
    if(!root) return [];

    const result=[], currentLevel=[root], nextLevel=[];
    let leftToRight = true;

    if(leftToRight){
        if(node.left) currentLevel.push(node.left);
        if(node.right) currentLevel.push(node.right);
    } else {
        if(node.right) currentLevel.push(node.right);
        if(node.left) currentLevel.push(node.left);
    }

    while(currentLevel.length>0){
        
    }
}









function zigZagLevelOrderTwoStacks(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const currentLevelStack = [root];
    const nextLevelStack = [];



    while (currentLevelStack.length > 0) {

        currentLevelValues.push(node.value);

        if (leftToRight) {
            if (node.left) nextLevelStack.push(node.left);
            if (node.right) nextLevelStack.push(node.right);
        } else {
            if (node.right) nextLevelStack.push(node.right);
            if (node.left) nextLevelStack.push(node.left);
        }

        if (currentLevelStack.length === 0) {
            result.push(currentLevelValues);
            currentLevelValues = [];

            while (nextLevelStack.length > 0) {
                currentLevelStack.push(nextLevelStack.pop());
            }

            leftToRight = !leftToRight;
        }
    }

    return result;
}

// --- Complexity Analysis for Two Stacks Solution ---

// Time Complexity: O(N)
// - Each node is pushed and popped from stacks exactly once.
// - The overall work for each node is constant.

// Space Complexity: O(W) or O(N) in worst case (for complete tree)
// - Similar to the queue-based approach, in the worst case (a complete binary tree),
//   one of the stacks could hold up to N/2 nodes, leading to O(N) space.
// - The `result` array also takes O(N) space.