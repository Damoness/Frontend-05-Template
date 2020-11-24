import foo2 from "./foo2.js";

let x = 1;
function foo() {
  console.log("foo", x);
  foo2();
  console.log("foo", x);
}

export { foo };
