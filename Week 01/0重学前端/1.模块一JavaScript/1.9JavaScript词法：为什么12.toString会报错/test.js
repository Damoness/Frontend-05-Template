//零宽空格

// let b = "\u200B";

// let c = "\u200C";

// let d = "\u200D";

let b = "b";

let c = "c";

let d = "d";

//加密
function encryption(str) {
  let arr = Array.from(str);

  const binarify = arr.map((c) => c.codePointAt(0).toString(2));

  //console.log(binarify);

  const encoded = binarify
    .map((x) => {
      console.log(x);

      let s = Array.from(x)
        .map((b) => (b === "1" ? d : c))
        .join("");

      return s;
    })
    .join(b);

  //console.log(encoded);

  return encoded;
}
//解密
function decryption(str) {
  let arr = str.split(b);

  console.log(arr);

  const binarify = arr.map((c) =>
    Array.from(c)
      .map((z) => (z === d ? "1" : "0"))
      .join("")
  );
  console.log(binarify);
  //

  const decoded = binarify
    .map((c) => String.fromCodePoint(parseInt(c, 2)))
    .join("");

  return decoded;
}

let str = encryption("1234");

console.log("encryption -", str);
console.log("decryption -", decryption(str));
