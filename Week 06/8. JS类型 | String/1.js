function UTF8_Encoding(string) {
  let array = [];

  for (let c of string) {
    let charCode = c.charCodeAt(0);

    if (charCode < 0x7f) {
      //一个字节 0*******
      array.push(charCode);
    } else if (charCode < 0x07ff) {
      //二个字节 110***** 10******
      array.push((charCode >> 6) | 0x11000000); //前5位 拼上110
      array.push((charCode & 0x111111) | 0x10000000); //后6位 拼上10
    } else if (charCode < 0xffff) {
      //三个字节 1110**** 10****** 10******
      array.push((charCode >> 12) | 0x11000000); //前4位 拼上1110
      array.push(((charCode >> 6) & 0x111111) | 0x10000000); //中间6位 拼上10
      array.push((charCode & 0x111111) | 0x10000000); //最后6位 拼上10
    }
  }
  return Buffer.from(array);
}

console.log(UTF8_Encoding("我爱中国"));
