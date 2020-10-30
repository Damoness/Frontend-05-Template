let $ = Symbol("$");

class Trie {
  constructor() {
    this.root = Object.create(null);
  }

  insert(word) {
    let node = this.root;

    for (let c of word) {
      //遍历
      if (!node[c]) {
        node[c] = Object.create(null);
      }
      node = node[c];
    }

    //判断是否有结束符
    if (!($ in node)) {
      node[$] = 0;
    }

    node[$]++;
  }

  least() {
    let min = Number.MAX_VALUE;
    let minWord = null;

    let visit = (node, word) => {
      if (node[$] && node[$] < min) {
        min = node[$];
        minWord = word;
      }
      for (let p in node) {
        visit(node[p], word + p);
      }
    };

    visit(this.root, "");
    console.log(min, minWord);
  }

  most() {
    let max = 0;
    let maxWord = null;

    let visit = (node, word) => {
      if (node[$] && node[$] > max) {
        //结束条件
        max = node[$];
        maxWord = word;
      }

      for (let p in node) {
        visit(node[p], word + p);
      }
    };
    visit(this.root, "");
    console.log(max, maxWord);

    return maxWord;
  }
}

function randomWord(length) {
  var s = "";
  for (let i = 0; i < length; i++) {
    s += String.fromCharCode(Math.random() * 26 + "a".charCodeAt(0));
  }

  return s;
}

let trie = new Trie();

for (let i = 0; i < 100000; i++) {
  let str = randomWord(4);
  trie.insert(str);
}

console.log(trie);

trie.least();
trie.most();
