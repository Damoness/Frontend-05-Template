var o = {
  toString() {
    return "2";
  },
  valueOf() {
    return 1;
  },
  [Symbol.toPrimitive]() {
    return 3;
  },
};

//console.log("x" + o);

function StringToNumber(str) {
  //0b11
  //11
  //0o11
  //0x11
  let number = 0;
  let exponent = 0;

  if (str.startsWith("0b")) {
    exponent = 2;
    str = str.slice(2);
  } else if (str.startsWith("0o")) {
    exponent = 8;
    str = str.slice(2);
  } else if (str.startsWith("0x")) {
    exponent = 16;
    str = str.slice(2);
  } else {
    exponent = 10;
  }

  //console.log(number, exponent, str);
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    number += (c - "0") * exponent ** (str.length - i - 1);
  }
  return number;
}

function NumberToString(num, base = 16) {
  if (base !== 16 && base !== 10 && base !== 8 && base !== 2) {
    throw new Error("错误的base");
  }

  let prefix = {
    2: "0b",
    8: "0o",
    10: "",
    16: "0x",
  }[base];

  let number = Number(num).toString(base);
  return prefix + number;
}

console.log(StringToNumber("0b11")); //3
console.log(StringToNumber("0o11")); //9
console.log(StringToNumber("11")); //11
console.log(StringToNumber("0x11")); // 17

console.log(NumberToString(0b11, 2)); //0b11
console.log(NumberToString(0o11, 8)); //0o11
console.log(NumberToString(11, 10)); //11
console.log(NumberToString(0x11, 16)); //0x11
