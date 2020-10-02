// prettier-ignore
let pattern1 = [
    0,0,0,0,0,0,
    0,0,1,0,0,0,
    0,0,1,0,0,0,
    0,0,1,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
]

let color1 = 1;

let b = bestChoice(pattern1, color1);

if (b.result == 1) {
  console.log(numToIcon[color1], " bestChoice ", JSON.stringify(b));
} else {
  console.log("error");
}

color1 = 2;
// prettier-ignore
pattern1 = [
    0,0,0,0,0,0,
    0,0,1,0,0,0,
    0,0,1,0,0,0,
    0,0,1,0,0,0,
    0,0,1,0,0,0,
    0,0,0,0,0,0,
]

b = bestChoice(pattern1, color1);

if (b.result == -1) {
  console.log(numToIcon[color1], " bestChoice ", JSON.stringify(b));
} else {
  console.log("error");
}

//show(pattern1);
