//在一个字符串中找到a
function match(str) {
  for (let c of str) {
    if (c == "a") {
      return true;
    }
  }
  return false;
}

console.log(match("121")); //false
console.log(match("1a1")); //true
