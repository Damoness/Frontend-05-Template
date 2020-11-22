学习笔记

# 第七周

## 1. JS表达式 | 运算符和表达式

JavaScript
* Atom
* Expression
* Statement
* Structure
* Program/Module


Grammar
* Tree vs Priority
  * + -
  * * /
  * ()

Expressions
1. Member 优先级最高
   * a.b
   * a[b]
   * foo\`string\`
   * super.b
   * super[b]
   * new.target
   * new Foo()
2. New 
   * new Foo
3. Call
   * foo()
   * super()
   * foo()['b']
   * foo().b
   * foo()\`abc\`
4. Update
   * a ++
   * a --
   * -- a
   * ++ a
5. Unary
   * delete a.b
   * void foo()
   * typeof a
   * +a
   * -a
   * ~a
   * !a
   * await a
6. Exponental 右结合
   * \** 
7. Multiplicative
   * */%
8. Additive
   * +-
9.  Shift
   * << >> >>>
10. Relationship
   * < > <= >= instanceof in
11. Equality
    * ==
    * !=
    * ===
    * !==
12. Bitwise
    * & ^ |
    
使用产生式来描述运算符的优先级的

## 2. JS表达式 | 类型转换


## 3. JS语句 | 运行时相关概念

Completion Record


## 4. JS语句 | 简单语句和复合语句

简单语句
* ExpressionStatement
* EmptyStatement
* DebuggerStatement
* ThrowStatement
* ContinueState
* BreakStatement
* ReturnStatement
  
复合语句
* BlockStatement
* IfStatement
* SwitchStatement
* IterationStatement
* WithStatement
* LabelledStatement
* TryStatement

## 5. JS语句 | 声明

申明
* FunctionDeclaration
* GenerationDeclaration
* AsyncFunctionDeclaration
* AsyncGeneratorDeclaration
* VariableStatement
* ClassDeclaration
* LexicalDeclaration

## 6. JS结构化 | 宏任务和微任务

JS执行粒度（运行时）
* 宏任务
* 微任务（Promise）
* 函数调用（Execution Context）
* 语句/申明（Completion Record）
* 表达式（Reference）
* 直接量/变量/this...

## 7. JS结构化 | JS函数调用