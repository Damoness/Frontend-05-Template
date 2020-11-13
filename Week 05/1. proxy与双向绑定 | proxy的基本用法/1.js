let object = {
  a: 1,
  b: 2,
};

let po = new Proxy(object, {
  set(o, prop, v) {
    console.log(o, prop, v);
  },
});

object.a = 3;
po.a = 3;
