const EOF = Symbol("EOF"); //EOF: End Of File

function data(c) {
  process.stdout.write(c);
  return data;
}

module.exports.parseHTML = function parseHTML(html) {
  //console.log("parseHTML:", html);
  let state = data;
  for (let c of html) {
    state = state(c);
  }
  state = state(EOF);
};
