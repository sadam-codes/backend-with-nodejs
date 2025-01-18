const fs = require("fs");
const os = require("os");
const _ = require("lodash");

const user = os.userInfo();
console.log(user);
console.log(user.username);
fs.appendFile("greeting.text", "Aoa Sadam \n", () =>
  console.log("file is created")
);

const data = ["sadam", "sadam", 1, 1];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isArray(data));
