学习笔记

# 第九周

## 1. HTML解析 | HTML parse模块的文件拆分
* 为了方便管理，我们把parser单独拆到文件中
* parser接受HTML文本作为参数，返回一颗DOM树
## 2. HTML解析 | 用FSM实现HTML的分析
* 用FSM(有限状态机)来实现HTML的分析
* 在HTML标准中，已经规定了HTML的状态
* Toy-Browser只挑选其中一部分状态，完成一个最简版本

[parsing.html](https://html.spec.whatwg.org/multipage/parsing.html#data-state)
## 3. HTML解析 | 解析标签
* 主要标签有
    1. 开始标签 <a>
    2. 结束标签 </a>
    3. 自封闭标签 <br/>
* 暂时忽略属性

## 4. HTML解析 | 创建元素

## 5. HTML解析 | 处理属性
* 属性值分为单引号，双引号，无引号三种写法，因此需要较多状态处理
* 处理属性的方式跟标签类似
* 属性结束时，我们把属性加到标签Token上

## 6. HTML解析 | 用token构建DOM树

* 从标签构建DOM树的基本技巧是使用栈
* 遇到开始标签时创建元素并入栈，遇到结束标签时出栈
* 自封闭节点可视为入栈后立即出栈
* 任何元素的父元素是它入栈前的栈顶

## 7. HTML解析 | 将文本节点加到DOM树

* 文本节点与自封闭标签处理类似
* 多个文本节点需要合并
  
## 8. CSS计算 | 收集CSS规则

* 遇到style标签时，我们把css规则保持起来
‍* 调用css parser 来分析css规则
* 这里我们必须要仔细研究此库分析css规则的格式
## 9. CSS计算 | 添加调用

## 10. CSS计算 | 获取父元素序列
## 11. CSS计算 | 选择器与元素的匹配

## 12. CSS计算 | 计算选择器与元素匹配
## 13. CSS计算 | 生成computed属性

## 14. CSS计算 | specificity的计算逻辑