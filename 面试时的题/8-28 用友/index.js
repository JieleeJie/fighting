console.log(0);
setTimeout(() => {
  console.log(1);
}, 0);
new Promise((resolve, reject) => {
  console.log(2);
  resolve();
}).then((res) => {
  console.log(3);
});
console.log(4);

// 0 2 4 3 1

// promise是微任务  settimeOUt是宏任务
// promise执行器中的函数 同步执行
