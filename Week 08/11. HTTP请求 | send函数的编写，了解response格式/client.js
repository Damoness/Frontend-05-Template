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
      .join("\r\n")}\r\n\r\n${this.bodyText}`;
  }

  send(connection) {
    return new Promise((resolve, reject) => {
      let parser = new ResponseParser();

      if (connection) {
        connection.write(this.toString());
      } else {
        connection = net.createConnection(
          {
            host: this.host,
            port: this.port,
          },
          () => {
            connection.write(this.toString());
          }
        );
      }

      connection.on("data", (data) => {
        console.log(data.toString());
        parser.receive(data.toString());
        if (parser.isFinished) {
          resolve(parser.response);
          connection.end();
        }
      });

      connection.on("error", () => {
        console.log("error", "出错");
      });
    });
  }
}

class ResponseParser {
  constructor() {}
  receive(string) {
    for (let i = 0; i < string.length; i++) {
      this.receiveChar(string.charAt(i));
    }
  }
  receiveChar(char) {}
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

request.send().then((v) => {
  console.log(v);
});

console.log(request.toString());
