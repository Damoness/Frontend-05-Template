const net = require("net");

class Request {
  constructor(options) {
    this.method = options.method || "GET"; //方法
    this.host = options.host; //主机
    this.port = options.port || 80; //端口
    this.path = options.path || "/"; //路径
    this.headers = options.headers || {}; //头
    this.body = options.body || {}; //体

    if (!this.headers["Content-Type"]) {
      this.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }

    if (this.headers["Content-Type"] === "application/json") {
      this.bodyText = JSON.stringify(this.body);
    } else if (
      this.headers["Content-Type"] === "application/x-www-form-urlencoded"
    ) {
      this.bodyText = Object.keys(this.body)
        .map((key) => `${key}=${encodeURIComponent(this.body[key])}`)
        .join("&");
    }

    this.headers["Content-Length"] = this.bodyText.length;
  }

  toString() {
    return `GET ${this.path} HTTP/1.1\r\n${Object.keys(this.headers)
      .map((key) => `${key}:${this.headers[key]}`)
      .join("\r\n")}\r\r${this.bodyText}`;
  }

  send() {
    return new Promise((resolve, reject) => {});
  }
}

let request = new Request({
  method: "GET",
  host: "127.0.0.1",
  port: 8088,
  path: "/",
  headers: {
    ["name"]: "Damon",
  },
  body: {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  },
});

request.send();

GET / HTTP / 1.1;
k: v;

key = value;

console.log(request.toString());
