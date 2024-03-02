import { AVLNode } from "./AVLNode";
import { AVLTree } from "./AVLTree";

let avlt = new AVLTree();
avlt.insert(50)
avlt.insert(25)
avlt.insert(80)
avlt.insert(10)
avlt.insert(5)


console.log("printing the tree")
avlt.inOrderTraversal(avlt.root);

let height = avlt.getTreeHeight(avlt)
console.log(`Tree height is ${height}`)

let nodeCount = avlt.getNodeCount();
console.log(`Node count of the AVL Tree is :  ${nodeCount}`);

let foundValue = avlt.search(avlt.root, 50)
console.log(`Node searching for value 50 of the AVL Tree... Found status :  ${foundValue}`);


