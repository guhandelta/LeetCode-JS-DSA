/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // Base case: An empty tree is symmetric.
    if (!root) return true;

    // Initialize two stacks (using arrays) to store nodes for comparison.
    // 'p' will hold nodes from the left subtree, and 'q' will hold nodes from the right subtree.
    var p = [root.left];  // Start with the left child of the root.
    var q = [root.right]; // Start with the right child of the root.

    var ll = null; // Temporary variable to store the left subtree node.
    var rr = null; // Temporary variable to store the right subtree node.

    // Iterate while both stacks are not empty (meaning there are still nodes to compare).
    while (p.length > 0 && q.length > 0) {
        ll = p.pop(); // Get the next node from the left subtree stack (LIFO).
        rr = q.pop(); // Get the next node from the right subtree stack (LIFO).

        // If both nodes are null, it means we've reached the end of a branch in both subtrees.
        // This is a valid case, so we continue to the next iteration.
        if (!ll && !rr) continue;

        // If one node is null and the other is not, the tree is not symmetric.
        if (!ll || !rr) return false;

        // If the values of the two nodes are different, the tree is not symmetric.
        if (ll.val !== rr.val) return false;

        // Key part: Add the children of the current nodes to the stacks in a mirrored order.
        // The left child of the left subtree is compared with the right child of the right subtree, and vice-versa.
        p.push(ll.left);  // Add the left child of the left subtree to the 'p' stack.
        p.push(ll.right); // Add the right child of the left subtree to the 'p' stack.
        q.push(rr.right); // Add the right child of the right subtree to the 'q' stack.
        q.push(rr.left);  // Add the left child of the right subtree to the 'q' stack.
    }

    // If the loop completes without finding any asymmetries, the tree is symmetric.
    return true;
};