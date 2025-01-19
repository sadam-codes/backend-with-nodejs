const fs = require("fs");
const os = require("os");
const _ = require("lodash");

const user = os.userInfo();
console.log(user);
console.log(user.username);
fs.appendFile("greeting.text", "Aoa Sadam \n", () =>
  console.log("file is created")
);

const data = ["sadam", "Ali", "sadam", 1, 1, "Ali"];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isArray(data));

// convert JSONString into jsonObject

const jsonString = `{ "name": "sadam", "age": 21 }`;
const JsonObject = JSON.parse(jsonString);
console.log(JsonObject);
console.log(JsonObject.name);

// convert JSONObject into jsonStrig

const jsonObject = { name: "sadam", age: 21 };
const JsonSting = JSON.stringify(jsonObject);
console.log(JsonSting);
