学习笔记

# 第八周
## 1. 浏览器总论 | 浏览器工作原理总论
  
  URL => HTML => DOM => DOM with CSS => DOM with position => Bitmap

## 2. 状态机 | 有限状态机

有限状态机
1. 每一个状态都是一个机器
   * 每一个机器里，我们都可以做计算、存储、输出。。。
   * 所有的这些机器接受的输入是一致的
   * 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数（无副作用）
2. 每一个机器知道下一个状态
   * 每个机器都有确定的下一个状态（Moore）
   * 每个机器根据输入决定下一个状态（Mealy）

## 3. 状态机 | 不使用状态机处理字符串（一）
## 4. 状态机 | 不使用状态机处理字符串（二）

## 5. 状态机 | 不使用状态机处理字符串（三）
## 6. 状态机 | 使用状态机处理字符串（一）

## 7. 状态机 | 使用状态机处理字符串（二）

## 8. HTTP请求 | HTTP的协议解析
1. HTTP : require('http')
   * Request
   * Response
2. TCP : require('net')
   
## 9. HTTP请求 | 服务端环境准备
HTTP：Hyper Text Transfer Protocol 文本型协议
* request line
* headers
* body

## 10. HTTP请求 | 实现一个HTTP的请求
* Content-Type 是一个必要的字段，要有默认值
* body是kv格式
* 不同的Content-Type影响body的格式


## 11. HTTP请求 | send函数的编写，了解response格式
response
* status line
* headers
* body

1. Carriage Return (CR) 0x0D  \r  Commodore and Early Macintosh operating systems (OS-9 and earlier).
2. Line Feed (LF) 0x0A \n   UNIX based systems (Linux, Mac OSX, etc)
3. The End of Line (EOL) 0x0D 0x0A  \r\n  most other non-Unix operating systems including Microsoft Windows, Symbian OS and others.
## 12. HTTP请求 | 发送请求

* 设计已有的connection或者建立自己的connection
* 收到数据传给parser
* 根据parser的状态resolve promise
## 13. HTTP请求 | response解析
* Response必须分段构造，所以我们要用一个ResponseParse来‘装配’
* ResponseParser分段处理ResponseText,我们用状态机来分析文本的结构
## 14. HTTP请求 | response body的解析

* Response的body可能根据Content-Type有不同的结构，因此我们会采用子Parser的结构来解决问题


Transfer-Encoding
* Trunked 一个长度后面跟着一个trunk的内容

[Transfer-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding)

[An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)