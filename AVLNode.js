"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVLNode = void 0;
class AVLNode {
    key;
    left;
    right;
    height;
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}
exports.AVLNode = AVLNode;
