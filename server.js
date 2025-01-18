const fs = require("fs");
const os = require("os");

const user = os.userInfo();
console.log(user);
console.log(user.username);
fs.appendFile("greeting.text", "Aoa Sadam \n", () => console.log("file is created"));
