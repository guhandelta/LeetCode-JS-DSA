


function InOrderTrversal(root, result=[]){
    if(!root) return;
    
    if(root.left) PreorderTrversal(root.left, result);
        result.push(root);
    if(root.right) PreorderTrversal(root.right, result);

    return result;
}