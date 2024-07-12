---
title: git教程
date: 2024-07-10 22:59:10
permalink: /pages/74b9b8/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2024-07-10 19:37  
Status: #idea  
Tags: 

---

>a fantasy website: learngitbranching.js.org, before the tutorial, in 菜鸟教程 , the concept of workspace/stage/repository is clear


### git commit
ez: stage->repository
### git branch
ez
- `git branch <branch name> <position>`
- change history : `git branch -f main HEAD~3`
- [x] git checkout moves the positon of HEAD, git branch moves the position of current branch, so what happens when the HEAD is dettached from branch? ans: HEAD doesn't change, the positon of main changed.
### git merge
- merge the file, need fix the conflicts if there is one file differs in two branch.
- when merge another branch in, that brach still exists, when you checkout to that branch and merge this branch in, two branch'history synchronized.(when one branch merge a branch which  inherits from it will make the history synchronized )
### git rebase
- `git rebase <base position> <source branch position>`
- construct a more linear history 
- simiarly, when you rebase another branch which inherits from this branch, it will not change the history, just move the position of the branch

#### HEAD
current branch
dettached HEAD : make HEAD point to a specific committed record, rather than a branch.
```
#before
HEAD->main-> C1
#after git checkout C1
HEAD->C1
main->C1
```

`git checkout` 's target is the where HEAD is going to point to.
- `^` , move one step back,`^^`means two steps
- `~<num>` move \<num\> steps back

### cancel changes
- git reset: delete changes and changed branch 
	did not apply to remote repository's branch
- git revert: delete changes and add a new branch,and git reset 's  target is HEAD^1, git revert 's target is HEAD

### collate submission records
- git cherry-pick: multi targets, simiar to rebase, but not move, pick!
- interactive rebase: git rebase -i HEAD~4
- git commit --amend, cover last commit when commit
### git tag
- highlight and anchor a submission record
- use `git describe` to describe the closest tag

# git教程

# references
- pro git 
- cswiki