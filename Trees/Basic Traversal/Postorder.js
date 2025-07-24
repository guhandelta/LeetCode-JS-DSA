


function PostorderTrversal(root, result=[]){
    if(!root) return;

    if(root.left) PreorderTrversal(root.left, result);
    if(root.right) PreorderTrversal(root.right, result);
    
    result.push(root);

    return result;
}