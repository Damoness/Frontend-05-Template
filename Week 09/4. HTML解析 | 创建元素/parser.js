const EOF = Symbol("EOF"); //EOF: End Of File

let currentToken = null;

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

//
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

function beforeAttributeName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  } else if (c == ">") {
    emit(currentToken);
    return data;
  } else if (c == "=") {
    return beforeAttributeName;
  } else if (c == "/") {
    //解决 <img />的情况
    return selfClosingStartTag;
  } else {
    return beforeAttributeName;
  }
}

//自封闭标签
function selfClosingStartTag(c) {
  if (c == ">") {
    currentToken.isSelfClosing = true;
    emit(currentToken);
    return data;
  } else if (c == "EOF") {
  } else {
  }
}

module.exports.parseHTML = function parseHTML(html) {
  //console.log("parseHTML:", html);
  let state = data;
  for (let c of html) {
    state = state(c);
  }
  state = state(EOF);
  console.log("eeee");
};
