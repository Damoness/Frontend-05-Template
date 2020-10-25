学习笔记

# 第三周


## 1.使用LL算法构建AST|四则运算

AST:抽象语法树

语法分析：构建抽象语法树的过程
 1. LL算法：从左到右扫描，从左到右规约
 2. LR算法：从右到左扫描，

四则运算
 * TokenNumber
    * 1 2 3 4 5 6 7 8 9 0 的组合
 * Operator：+、-、*、/之一
 * Whitespace: \<SP>
 * LineTerminator:\<LF> \<CR>
  
语法定义
 * Expression = AdditiveExpression EOF
  
 * AdditiveExpression = MultiplicativeExpression | AdditiveExpression + MultiplicativeExpression |  AdditiveExpression - MultiplicativeExpression
  
 * MultiplicativeExpression = Number | MultiplicativeExpression * Number | MultiplicativeExpression / Number


## 2.使用LL算法构建AST|正则表达式
1. RegExp 的 exec 方法
2. ()
## 3.使用LL算法构建AST|词法分析

## 4.使用LL算法构建AST | LL语法分析（一）

1. MultiplicativeExpression 找到三种终结的标志
    * Number
    * MultiplicativeExpression * Number
    * MultiplicativeExpression / Number
2. 递归

## 5.使用LL算法构建AST | LL语法分析（二）

1. AdditiveExpression 
    * MultiplicativeExpression
    * AdditiveExpression + 
    * AdditiveExpression - 
2. Expression
    * AdditiveExpression EOF
3. 最终形成一个单根

