//在一个字符串中找到ab

function match(str) {
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c == "a") {
      if (i + 1 < str.length && str[i + 1] == "b") {
        return true;
      }
    }
  }
  return false;
}

console.log(match("abc")); //true
console.log(match("acb")); //false

function match2(str) {
  let foundA = false;
  for (let c of str) {
    if (c == "a") {
      foundA = true;
    } else if (foundA && c == "b") {
      return true;
    } else {
      foundA = false;
    }
  }
  return false;
}

console.log(match2("abc")); //true
console.log(match2("acb")); //false
