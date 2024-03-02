"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVLTree = void 0;
const AVLNode_1 = require("./AVLNode");
class AVLTree {
    root;
    nodeCount = 0;
    constructor() {
        this.root = null;
    }
    getHeight(node) {
        return node ? node.height : 0;
    }
    getTreeHeight(node) {
        return node.root ? node.root.height : 0;
    }
    updateHeight(node) {
        node.height =
            1 + Math.max(this.getHeight(node.left), this.getHeight(node.left));
    }
    getBalanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }
    insert(key) {
        this.root = this.insertData(this.root, key);
    }
    search(node, searchKey) {
        let valueFound = false;
        const searchIn = (node, searchKey) => {
            if (node) {
                if (node.key === searchKey) {
                    valueFound = true;
                }
                else if (node.key < searchKey && node.left) {
                    searchIn(node.left, searchKey);
                }
                else if (node.right) {
                    searchIn(node.right, searchKey);
                }
            }
            return node;
        };
        searchIn(node, searchKey);
        return valueFound;
    }
    remove(key) {
        this.root = this.removeData(this.root, key);
    }
    removeData(node, key) {
        if (!node) {
            return new AVLNode_1.AVLNode(key);
        }
        else if (key < node.key) {
            node.left = this.removeData(node.left, key);
            node;
        }
        else if (key > node.key) {
            node.right = this.removeData(node.right, key);
            node;
        }
        else {
            return node;
        }
        // balancing part
        this.updateHeight(node);
        let balance = this.getBalanceFactor(node);
        if (balance > 1) {
            let select = node.left;
            if (key < select.key) {
                return this.rightRotate(node);
            }
            else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        else if (balance < -1) {
            let select = node.left;
            if (key > select.key) {
                return this.leftRotate(node);
            }
            else {
                node.right = this.rightRotate(node.left);
                return this.leftRotate(node);
            }
        }
        return node;
    }
    insertData(node, key) {
        if (!node) {
            this.nodeCount++;
            return new AVLNode_1.AVLNode(key);
        }
        else if (key < node.key) {
            node.left = this.insertData(node.left, key);
            node;
        }
        else if (key > node.key) {
            node.right = this.insertData(node.right, key);
            node;
        }
        else {
            return node;
        }
        this.updateHeight(node);
        let balance = this.getBalanceFactor(node);
        if (balance > 1) {
            let select = node.left;
            if (key < select.key) {
                return this.rightRotate(node);
            }
            else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        else if (balance < -1) {
            let select = node.left;
            if (key > select.key) {
                return this.leftRotate(node);
            }
            else {
                node.right = this.rightRotate(node.left);
                return this.leftRotate(node);
            }
        }
        return node;
    }
    rightRotate(node) {
        let x = node.left;
        let T2 = x.right;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    leftRotate(node) {
        let x = node.right;
        let T2 = x.left;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }
    }
    getNodeCount() {
        return this.nodeCount;
    }
}
exports.AVLTree = AVLTree;
