//在一个字符串中，找到字符“abcdef”

function match(str) {
  let key = "abcdef";
  let map = new Map();
  [...key].forEach((k) => map.set(k, false));

  let i = 0;

  for (let c of str) {
    if (i + 1 === key.length && c == key[i]) {
      return true;
    } else if (c == key[i]) {
      map.set(c, true);
      i++;
    } else {
      i = 0;
      map.forEach((v, k) => map.set(k, false));
    }
  }

  return false;
}

console.log(match("2abcdef1"));

function match2(str) {
  let foundA = false;
  let foundB = false;
  let foundC = false;
  let foundD = false;
  let foundE = false;

  for (let c of str) {
    if (c === "a") {
      foundA = true;
    } else if (foundA && c === "b") {
      foundB = true;
    } else if (foundB && c === "c") {
      foundC = true;
    } else if (foundC && c === "d") {
      foundD = true;
    } else if (foundD && c === "e") {
      foundE = true;
    } else if (foundE && c === "f") {
      return true;
    } else {
      foundA = false;
      foundB = false;
      foundC = false;
      foundD = false;
      foundE = false;
    }
  }
  return false;
}

console.log(match2("22abcde22abcdef1")); //true
