

function minDepthDFS(root){

    if(!root) return;

    let stack=[[root, 1]]; // Root adn Depth
    let min = Infinity;

    while(stack.length){
        let [node, depth] = stack.pop();

        if(!node.left && !node.right){
            min = Math.min(min, depth )
        }

        if(node.left) stack.push([node.left, depth+1]);
        if(node.right) stack.push([node.right, depth+1]);
    }
}