

function zigZagLevelOrder(root){
    if(!root) return [];
    
    const result = [];
    const queue = [root];
    let leftToRight = true;

    while(queue.length){
        const levelSize = queue.length;
        const level = Array(levelSize)
        
        for(let i=0; i<levelSize; i++){
            const node = queue.shift();

            const idx = leftToRight ? i : levelSize-1-i;
            level[idx] = node.value;

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);

        }
        result.push(level)
        leftToRight = !leftToRight;
    }
    
    return result;
}

/* 

    /**
     * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
     * (i.e., from left to right, then right to left for the next level and so on).
     *
     * @param {TreeNode} root The root node of the binary tree.
     * @returns {number[][]} An array of arrays, where each inner array represents a level
     * in zigzag order.
     */
    function zigZagLevelOrder(root) {
        // 1. Handle Empty Tree:
        // If the tree is empty as there's nothing to traverse, return an empty array.
        if (!root) {
            return [];
        }

        // 2. Initialize Data Structures:
        const result = []; // Final output: an array of arrays, where each inner array is a level's nodes.

        const queue = [root]; // Using a queue BFS to traverse level by level. Start by adding the root node to the queue.

        let leftToRight = true; // A flag to keep track of the current traversal direction. Start with true because the root level (Level 0) is left-to-right.

        // 3. Main Traversal Loop: Continue as long as there are nodes in our queue to process.
        while (queue.length > 0) { // Condition ensures we process all levels
            const levelSize = queue.length; // Get the number of nodes at the current level.
                                            // This is important because we want to process
                                            // exactly these nodes before moving to the next level.

            // Array of size `levelSize`, to store the node values for the current level, for efficient direct assignment
            const level = Array(levelSize);

            // 4. Process Current Level: Iterate `levelSize` times to process all nodes on the current level.
            for (let i = 0; i < levelSize; i++) {
                // Remove the first node from the front of the queue.
                // This is the "shift" operation in a queue.
                const node = queue.shift(); // CORRECTED: Added parentheses for function call

                // Determine the index to place the current node's value in the `level` array.
                let idx;
                if (leftToRight) {
                    // If we're traversing left-to-right, the index is simply 'i'.
                    // Example: i=0 -> level[0], i=1 -> level[1]
                    idx = i;
                } else {
                    // If we're traversing right-to-left, the index is calculated
                    // to place elements from the end of the `level` array.
                    // Example: levelSize=3.
                    // i=0 -> level[3-1-0] = level[2]
                    // i=1 -> level[3-1-1] = level[1]
                    // i=2 -> level[3-1-2] = level[0]
                    idx = levelSize - 1 - i;
                }

                // Place the current node's value into the `level` array at the calculated index.
                level[idx] = node.value; // Assuming 'node.value' holds the actual data

                // 5. Add Children to Queue for Next Level:
                // If the current node has a left child, add it to the back of the queue.
                if (node.left) {
                    queue.push(node.left);
                }
                // If the current node has a right child, add it to the back of the queue.
                if (node.right) {
                    queue.push(node.right);
                }
            }

            // 6. Store Current Level and Toggle Direction:
            // After processing all nodes for the current level, add the completed `level` array
            // to our `result` (the final output).
            result.push(level);

            // Toggle the direction for the next level.
            // If it was left-to-right, it becomes right-to-left, and vice-versa.
            leftToRight = !leftToRight;
        }

        // 7. Return Final Result:
        // Once the queue is empty (meaning all levels have been processed),
        // return the `result` array containing all levels in zigzag order.
        return result;
    }

*/ 