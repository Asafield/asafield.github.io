---
title: excel编程实例
date: 2023-12-19 15:02:44
permalink: /pages/e0adb4/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-07-12 20:28  
Status: #idea  
Tags: [[office]]

---

# excel编程实例
```vb
Sub CopyCellsToOtherSheet()
    Dim sourceRange As Range
    Dim targetRange As Range
    Dim sourceCell As Range
    Dim targetCell As Range
    Dim sourceColName As String
    Dim targetColName As String
    
    '设置源表格的区域
    Set sourceRange = Worksheets("Sheet1").Range("T5:T61")
    
    '设置目标表格的区域
    Set targetRange = Worksheets("Sheet1").Range("D5:D53")
    
    '遍历源区域中的每个单元格
    For Each sourceCell In sourceRange
        sourceColName = Split(sourceCell.Address, "$")(1)
        
        '查找目标表格中相同列名下第一个空白单元格
        Set targetCell = targetRange.Find(What:="", _
                                          After:=targetRange.Cells(1, 1), _
                                          LookIn:=xlValues, _
                                          LookAt:=xlWhole, _
                                          SearchOrder:=xlByColumns, _
                                          SearchDirection:=xlNext)
                                          
        '如果找到空白单元格，则将源单元格内容复制到该单元格中
        If Not targetCell Is Nothing Then
            targetColName = Split(targetCell.Address, "$")(1)
            If sourceColName = targetColName Then
                targetCell.Value = sourceCell.Value
            End If
        Else
            '如果目标表格中没有空白单元格，退出遍历
            Exit For
        End If
    Next sourceCell
End Sub

```
# references