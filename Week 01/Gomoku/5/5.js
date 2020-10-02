const numToIcon = {
  0: "",
  1: "⚪️",
  2: "⚫️",
};

const WIDTH = 6;

function show(pattern) {
  const element = document.getElementById("board");
  element.innerHTML = "";
  //console.time("render");
  pattern.forEach((item, index) => {
    if (index !== 0 && index % WIDTH === 0) {
      element.appendChild(document.createElement("br"));
    }
    let div = document.createElement("div");
    div.addEventListener("click", () => move(index));
    div.className = "cell";
    div.innerText = numToIcon[item];
    element.appendChild(div);
  });
  //console.timeEnd("render");
}

/**
    point : 预测点
    result: 1 赢， 0 平， -1输
**/
function bestChoice(pattern, color, deep = 0) {
  let p;
  if ((p = willWin(pattern, color))) {
    return {
      point: p,
      result: 1,
    };
  }

  deep++;

  if (deep === 3) {
    console.log("deep!");
    return {
      point: null,
      result: 0,
    };
  }

  let result = -2;
  let point = null;

  for (let i = 0; i < WIDTH; i++) {
    for (let j = 0; j < WIDTH; j++) {
      let index = i * WIDTH + j;
      if (pattern[index] !== 0) {
        continue;
      }

      const tmp = clone(pattern);
      tmp[index] = color;

      const opposite = bestChoice(tmp, 3 - color, deep);

      if (-opposite.result > result) {
        point = { x: j, y: i };
        result = -opposite.result;
      }

      if (result === 1) {
        return {
          point: point,
          result: result,
        };
      }
    }
  }

  return {
    point: point,
    result: point ? result : 0,
  };
}

function clone(pattern) {
  return JSON.parse(JSON.stringify(pattern));
}

function willWin(pattern, color) {
  for (let i = 0; i < pattern.length; i++) {
    let y = Math.floor(i / WIDTH);
    let x = i % WIDTH;
    if (pattern[i] === 0) {
      let tmp = clone(pattern);
      tmp[i] = color;
      if (check(i, tmp, color)) {
        //console.log(numToIcon[color], { x, y }, " will win");
        return {
          x,
          y,
        };
      }
    }
  }

  return null;
}

//当前落子点是否有连续5个子
function check(index, pattern, color) {
  let y = Math.floor(index / WIDTH);
  let x = index % WIDTH;
  //console.log(x, y);

  {
    //横
    let num = 0;
    for (let j = x - 4, i = y; j <= x + 4; j++) {
      if (j < 0 || j >= WIDTH || pattern[i * WIDTH + j] !== color) {
        num = 0;
        continue;
      }
      num++;
      if (num === 5) {
        console.log("-");
        return true;
      }
    }
  }

  {
    //纵
    let num = 0;
    for (let i = y - 4, j = x; i <= y + 4; i++) {
      if (i < 0 || i >= WIDTH || pattern[i * WIDTH + j] !== color) {
        num = 0;
        continue;
      }

      num++;
      if (num === 5) {
        console.log("|");
        return true;
      }
    }
  }

  {
    // \
    let num = 0;
    for (let i = y - 4, j = x - 4; i <= y + 4; i++, j++) {
      if (i < 0 || i >= WIDTH || pattern[i * WIDTH + j] !== color) {
        num = 0;
        continue;
      }
      num++;
      if (num === 5) {
        console.log("\\");
        return true;
      }
    }
  }

  {
    // /
    let num = 0;
    for (let i = y + 4, j = x - 4; i >= y - 4; i--, j++) {
      if (i < 0 || i >= WIDTH || pattern[i * WIDTH + j] !== color) {
        num = 0;
        continue;
      }
      num++;
      if (num === 5) {
        console.log("/");
        return true;
      }
    }
  }
  return false;
}

function move(i) {
  if (pattern[i] !== 0) {
    console.error("此位置已经落子");
    return;
  }

  pattern[i] = color;
  show(pattern);

  if (check(i, pattern, color)) {
    console.log(numToIcon[color], " win");
  }
  //交换
  color = 3 - color;

  let p;
  if ((p = willWin(pattern, color))) {
    console.log(numToIcon[color], p, " will win");
  } else {
    console.log(
      numToIcon[color],
      " bestChoice ",
      JSON.stringify(bestChoice(pattern, color))
    );
  }
}
