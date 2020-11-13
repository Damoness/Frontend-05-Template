//JavaScript 标准里面所有具有特殊行为的对象
{
  //1. 数组
  {
    let array = [1];
    console.log(array);
    console.log(array.length);
  }
  //2. 字符串
  {
    let string = new String("abc");
    console.log(string.length); //3
    string.length = 4;
    console.log(string.length); //3
  }
  //3. arguments
  {
    function add(a, b) {
      console.log(arguments);
      return a + b;
    }
    let r = add(1, 2);
  }
}
