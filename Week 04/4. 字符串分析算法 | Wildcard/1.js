function find(source, pattern) {
  let starCount = 0;

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "*") starCount += 1;
  }

  if (starCount === 0) {
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] !== "?" && pattern[i] !== source[i]) return false;
    }
    return;
  }

  let i = 0;
  let lastIndex = 0;

  for (i = 0; pattern[i] !== "*"; i++) {
    if (pattern[i] !== "?" && pattern[i] !== source[i]) return false;
  }

  lastIndex = i;

  for (let p = 0; p < starCount - 1; p++) {
    i += 1;
    let subPattern = "";
    while (pattern[i] !== "*") {
      subPattern += pattern[i];
      i += 1;
    }

    let reg = new RegExp(subPattern.replace(/?/g, "[\\s\\S]"), "g");
    reg.lastIndex = lastIndex;

    if (!reg.exec(source)) return false;

    lastIndex = reg.lastIndex;
  }

  for (
    let j = 0;
    j <= source.length - lastIndex && pattern[pattern.length - j] !== "*";
    j++
  ) {
    if (
      pattern[pattern.length - j] !== source[source.length - j] &&
      pattern[pattern.length !== "?"]
    )
      return false;
  }
  return true;
}
