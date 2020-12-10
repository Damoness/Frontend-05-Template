const EOF = Symbol("EOF"); //EOF: End Of File

let currentToken = null;
let currentAttribute = null;

function emit(token) {
  console.log(token);
}

/**
 * 1. <a>
 * 2. </a>
 * 3. <br/>
 * @param {*} c
 */
function data(c) {
  if (c === "<") {
    return tagOpen;
  } else if (c === EOF) {
    return;
  } else {
    return data;
  }
}

//标签开始
function tagOpen(c) {
  if (c == "/") {
    return endTagOpen;
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: "startTag",
      tagName: "",
    };
    return tagName(c);
  } else {
    return;
  }
}

//结束标签
function endTagOpen(c) {
  if (c.match(/^[a-zA-z]$/)) {
    currentToken = {
      type: "endTag",
      tagName: "",
    };
    return tagName(c);
  } else if (c == ">") {
  } else if (c == EOF) {
  } else {
  }
}

//标签名称
function tagName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  } else if (c == "/") {
    return selfClosingStartTag;
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentToken.tagName += c;
    return tagName;
  } else if (c == ">") {
    //完成了
    emit(currentToken);
    return data;
  } else {
    return tagName;
  }
}

//自封闭标签
function selfClosingStartTag(c) {
  if (c == ">") {
    currentToken.isSelfClosing = true;
    emit(currentToken);
    return data;
  } else if (c == EOF) {
  } else {
  }
}

//before属性名
function beforeAttributeName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  } else if (c === ">" || c === EOF) {
    emit(currentToken);
    return data;
  } else if (c == "=") {
    //return beforeAttributeName;
  } else if (c == "/") {
    //解决 <img />的情况
    return selfClosingStartTag;
  } else {
    currentAttribute = {
      name: "",
      value: "",
    };
    return attributeName(c);
  }
}

//属性名
function attributeName(c) {
  if (c.match(/^[\t\n\f ]$/) || c === "/" || c === ">" || c === EOF) {
    return afterAttributeName;
  } else if (c === "=") {
    return beforeAttributeValue;
  } else if (c === '"' || c === "'" || c === "<") {
  } else if (c === "\u0000") {
  } else {
    currentAttribute.name += c;
    return attributeName;
  }
}

//属性值
function beforeAttributeValue(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeValue;
  } else if (c === "'") {
    //单引号
    return singleQuotedAttributeValue;
  } else if (c === '"') {
    //双引号
    return doubleQuotedAttributeValue;
  } else {
    return unquotedAttributeValue(c);
  }
}

function singleQuotedAttributeValue(c) {
  if (c === "'") {
    currentToken[currentAttribute.name] = currentAttribute.value;
    return afterQuotedAttributeValue;
  } else if (c === "\u0000") {
  } else if (c === EOF) {
  } else {
    currentAttribute.value += c;
    return singleQuotedAttributeValue;
  }
}

function doubleQuotedAttributeValue(c) {
  if (c === '"') {
    currentToken[currentAttribute.name] = currentAttribute.value;
    return afterQuotedAttributeValue;
  } else if (c === "\u0000") {
  } else if (c === EOF) {
  } else {
    currentAttribute.value += c;
    return doubleQuotedAttributeValue;
  }
}

function unquotedAttributeValue(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    currentToken[currentAttribute.name] = currentAttribute.value;
    return beforeAttributeName;
  } else if (c === "/") {
    currentToken[currentAttribute.name] = currentAttribute.value;
    return selfClosingStartTag;
  } else if (c === ">") {
    currentToken[currentAttribute.name] = currentAttribute.value;
    emit(currentToken);
    return data;
  } else {
    currentAttribute.value += c;
    return unquotedAttributeValue;
  }
}

function afterQuotedAttributeValue(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  } else if (c === "/") {
    return selfClosingStartTag;
  } else if (c === ">") {
    currentToken[currentAttribute.name] = currentAttribute.value;
    emit(currentToken);
    return data;
  } else {
    return beforeAttributeName(c);
  }
}

function afterAttributeName(c) {}

module.exports.parseHTML = function parseHTML(html) {
  //console.log("parseHTML:", html);
  let state = data;
  for (let c of html) {
    state = state(c);
  }
  state = state(EOF);
  console.log("eeee");
};
