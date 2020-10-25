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

function tokenize(source) {
  let result = null;
  while (true) {
    result = regexp.exec(source);

    if (!result) break;

    for (let i = 1; i <= dictionary.length; i++) {
      if (result[i]) {
        console.log(dictionary[i - 1], result[0]);
      }
    }
  }
}

tokenize("1024 + 10 * 25");
