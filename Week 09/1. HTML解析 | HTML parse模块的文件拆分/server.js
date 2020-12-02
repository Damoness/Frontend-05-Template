//准备一个服务端网页
"use strict";
const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    let body = [];
    request
      .on("error", (err) => {
        console.log(err);
      })
      .on("data", (chunk) => {
        console.log("data", chunk.toString());
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log("body", body);
        response.writeHead(200, { "Content-Type": "text/html" });

        fs.readFile("./1.html", "utf8", function (err, data) {
          response.end(data);
        });
      });
  })
  .listen(8088);

console.log("server started");
