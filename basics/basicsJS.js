console.log("server file is running");

const sadam = (a, b) => a + b;
console.log(sadam(2, 4));

// callback function

const add = (a, b, callback) => {
  console.log(`result is :`, a + b);
  callback();
};
add(1, 1, () => console.log("data addded successfully"));
