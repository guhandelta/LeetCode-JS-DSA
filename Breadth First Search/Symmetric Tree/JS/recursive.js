/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // If the tree is empty (root is null), it's symmetric.
    if (!root) return true;

    // Call the helper function to check symmetry recursively, starting with the left and right subtrees.
    return helper(root.left, root.right);
};

    /**
    * Helper function to recursively check if two subtrees are mirror images of each other.
    *
    * @param {TreeNode | null} p - The root of the first subtree.
    * @param {TreeNode | null} q - The root of the second subtree.
    * @return {boolean} - True if the subtrees are mirror images, false otherwise.
    */
    var helper = function (p, q) {
    // Base cases:

    // 1. If one subtree is null and the other is not, they are not symmetric.
    if ((!p && q) || (p && !q)) return false;

    // 2. If both subtrees exist, but their root values are different, they are not symmetric.
    if (p && q && p.val !== q.val) return false;

    // Recursive step:

    // 3. If both subtrees exist and their root values are the same:
    if (p && q) {
        // Recursively check if the left subtree of 'p' is a mirror image of the right subtree of 'q',
        // AND if the right subtree of 'p' is a mirror image of the left subtree of 'q'.
        return helper(p.left, q.right) && helper(p.right, q.left);
    }

    // 4. If both subtrees are null (base case for recursion), they are symmetric.
    return true;
};