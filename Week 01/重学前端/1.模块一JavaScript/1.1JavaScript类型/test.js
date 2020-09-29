let objects = [
  //值属性
  //   Infinity,
  //   NaN,
  //   undefined,
  //   globalThis,

  //函数属性
  eval,
  isFinite,
  isNaN,
  parseFloat,
  parseInt,
  decodeURI,
  decodeURIComponent,
  encodeURI,
  encodeURIComponent,

  //基本对象
  Object,
  Function,
  Boolean,
  Symbol,

  //错误对象
  Error,
  ReferenceError,
  SyntaxError,
  EvalError,
  TypeError,
  RangeError,
  URIError,

  //数字和日期对象
  Number,
  BigInt,
  Math,
  Date,

  //字符串
  String,
  RegExp,
  //可索引的集合对象
  Array,
  Int8Array,
  Int16Array,
  Int32Array,
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  BigInt64Array,
  BigUint64Array,

  //使用健的集合对象
  Map,
  Set,
  WeakMap,
  WeakSet,

  //结构化数据
  ArrayBuffer,
  SharedArrayBuffer,
  Atomics,
  DataView,
  JSON,

  //控制抽象对象
  Promise,

  //反射
  Reflect,
  Proxy,
];
let set = new Set();
objects.forEach((o) => set.add(o));

for (var i = 0; i < objects.length; i++) {
  var o = objects[i];
  console.log(o);
  for (const p of Object.getOwnPropertyNames(o)) {
    var d = Object.getOwnPropertyDescriptor(o, p);
    if (
      (d.value !== null && typeof d.value === "object") ||
      typeof d.value === "function"
    ) {
      if (!set.has(d.value)) {
        set.add(d.value);
        objects.push(d.value);
      }
    }
    if (d.get)
      if (!set.has(d.get)) {
        set.add(d.get), objects.push(d.get);
      }
    if (d.set)
      if (!set.has(d.set)) {
        set.add(d.set), objects.push(d.set);
      }
  }
}

console.log(set, set.size);
