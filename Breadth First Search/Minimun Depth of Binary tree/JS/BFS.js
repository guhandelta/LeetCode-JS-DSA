






function minDepthBFS(root){

    if(!root) return;

    let queue=[[root, 1]]; // Root adn Depth

    while(queue.length){
        let [node, depth] = queue.shift();

        if(!node.left && !node.right) return depth;

        if(node.left) queue.push([node.left, depth+1]);
        if(node.right) queue.push([node.right, depth+1]);
    }
}