let div = document.getElementById("circle-div-id");

function sleep(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

async function changeColor(duration, color) {
  div.style.background = color;
  await sleep(duration);
}

while (true) {
  await changeColor(3000, "green");
  await changeColor(1000, "yellow");
  await changeColor(2000, "red");
}
