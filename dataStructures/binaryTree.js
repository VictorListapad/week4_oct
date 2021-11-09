// creating a binary tree 
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(4);
let n2 = new TreeNode(2);
let n5 = new TreeNode(5);
let n3 = new TreeNode(3);
let n1 = new TreeNode(1);

root.left = n2;
root.right = n5;
n2.left = n1;
n2.right = n3;

// go all to the right
// while(root != null) {
//   // console.log(root.val);
//   root = root.right; // 
// }

// go all left
while(root != null) {
  console.log(root.val);
  root = root.left; // 
}
