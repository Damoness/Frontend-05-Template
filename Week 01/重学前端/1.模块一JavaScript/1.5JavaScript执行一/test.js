setTimeout(() => {
  console.log("setTimeout");
}, 0);

fetch("https://api.github.com/users/damoness")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

// let s = new Date().getSeconds();

// Promise.resolve(1)
//   .then(() => {
//     while (true) {
//       if (new Date().getSeconds() - s >= 2) {
//         break;
//       }
//     }
//     console.log("Promise1");

//     return Promise.resolve(1);
//   })
//   .then(() => {
//     while (true) {
//       if (new Date().getSeconds() - s >= 2) {
//         break;
//       }
//     }
//     console.log("Promise2");
//     return Promise.resolve(2);
//   })
//   .then(console.log("Promise3"));

// const log = console.log;

// let callback = () => log("Regular timeout callback has run");

// let urgentCallback = () => {
//   log("*** Oh noes! An urgent callback has run!");
//   queueMicrotask(() => {
//     console.log("222");
//   });
// };

// log("Main program started");
// setTimeout(callback, 0);
// queueMicrotask(urgentCallback);
// log("Main program exiting");
// queueMicrotask(urgentCallback);
// queueMicrotask(urgentCallback);
