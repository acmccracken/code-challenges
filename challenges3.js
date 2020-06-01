var invertTree = function(root) {
    if(root){
       let holder = root.right;
        root.right = root.left;
        root.left = holder;
        invertTree(root.right)
        invertTree(root.left)
    }
     return root
 };