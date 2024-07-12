---
title: leetcode刷题记录
date: 2024-04-19 16:56:46
permalink: /pages/bce6ca/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
## 二叉树

```cpp
struct TreeNode {
	int val;
	TreeNode * left;
	TreeNode * right;
	TreeNode(int x): val(x),left(nullptr),right(nullptr);
}
```

### 构建

### 遍历
递归的三种方法，简单，就是三种不同的顺序进行递归
迭代的三种方法：
#### preordertraversal
- use stack to store right node of the tree
```cpp
class Solution {
public:
    stack<TreeNode*> astack;
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> result;
        if (root == nullptr) {
            return vector<int>{};
        }
        while (1) {
            if (root->right) {
                astack.push(root->right);
            }
            if (root->left == nullptr && astack.empty()) {
                result.push_back(root->val);
                return result;
            }
            result.push_back(root->val);
  
            if (root->left) {
                root = root->left;
            } else {
                root = astack.top();
                astack.pop();
            }
        }
        return result;
    }
};
```