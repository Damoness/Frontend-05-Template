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
* 主要标签有：开始标签，结束标签和自封闭标签
* 暂时忽略属性

## 4. HTML解析 | 创建元素