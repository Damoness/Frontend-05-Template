let regexp = /([0-9\.]+)|([ \t]+)|([\r\n]+)|(\*)|(\/)|(\+)|(\-)/g;

const dictionary = [
  "Number",
  "whitespace",
  "LineTerminator",
  "*",
  "/",
  "+",
  "-",
];

function* tokenize(source) {
  let result = null;
  let lastIndex;
  while (true) {
    lastIndex = regexp.lastIndex;
    result = regexp.exec(source);

    if (!result) break;
    if (regexp.lastIndex - lastIndex > result[0].length) break;

    let token = {
      type: null,
      value: null,
    };

    for (let i = 1; i <= dictionary.length; i++) {
      if (result[i]) {
        token.type = dictionary[i - 1];
      }
    }
    token.value = result[0];
    yield token;
  }
  yield {
    type: "EOF",
  };
}

for (let token of tokenize("1024 + 10 * 25")) {
  console.log(token);
}
