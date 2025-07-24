


function PreorderTrversal(root, result=[]){
    if(!root) return;

    result.push(root);

    if(root.left) PreorderTrversal(root.left, result);
    if(root.right) PreorderTrversal(root.right, result);

    return result;
}