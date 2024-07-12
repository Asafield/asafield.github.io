---
title: c++中值的声明与定义问题
date: 2024-04-19 16:56:46
permalink: /pages/cf8960/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2024-04-18 17:19  
Status: #idea  
Tags: [[cpp]]

---

# c++中值的声明与定义问题
在学习二叉树结构时，遇到这样一个问题，使用vscode进行调试的时候对root->left进行报错，这是因为递归前的root是未定义的，不能使用root->left进行判断
```cpp
#include <iostream>
#include <queue>
#include <vector>
using namespace std;
struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr){};
    TreeNode(vector<int> v)
    {
        val = v[0];
        TreeNode *temp = this;
        queue<TreeNode *> aqueue;
        aqueue.push(temp);
        for (int i = 1; !aqueue.empty(); i += 2)
        {
            if (i<v.size()&&v[i])
            {
                aqueue.front()->left = new TreeNode(v[i]);
                aqueue.push(aqueue.front()->left);
            }else{
				//if delete the code , error occurs in later when use root->left
                aqueue.front()->left = nullptr;
            }
            if (i + 1<v.size()&&v[i + 1])
            {
                aqueue.front()->right = new TreeNode(v[i + 1]);
                aqueue.push(aqueue.front()->right);
            }else{
                aqueue.front()->right = nullptr;
            }
            aqueue.pop();
        }
    }
};
class Solution
{
public:
    vector<int> result;
    vector<int> preorderTraversal(TreeNode *root)
    {
        traversal(root);
        for(auto i: result){
            cout<< i <<" ";
        }
        cout<<endl;
        return result;
    }
    void traversal(TreeNode *root)
    {
        if (root == nullptr)
        {
            return;
        }
  
        if (root->left==nullptr && root->right == nullptr)
        {
            result.push_back(root->val);
            return;
        }
        result.push_back(root->val);
        if (root->left)
            traversal(root->left);
        if (root->right)
            traversal(root->right);
        return;
    }
};
int main()
{
    Solution s;
    TreeNode *root = new TreeNode(vector<int>{1, NULL, 2, 3});
    s.preorderTraversal(root);
}
```

当然，简单的代码是可以被检测出来的：
```cpp
#include <iostream>

#include <vector>

using namespace std;

struct test

{

    test * a;

    int val;

};

  

int main(){

    test * one = new test();
//这里在vscode中会有提示
    cout<< a->val<<endl;

    return 0;

}
```

# references