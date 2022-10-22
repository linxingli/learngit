
const execSync = require('child_process').execSync; //同步子进程
let statusStr = execSync('git status').toString().trim();

// 获取增删改的文件路径数组
let arr = statusStr.match(/(new file|deleted|modified): (.*)/g)
let changePathArr = arr.map(v => v.split(':')).map(v => v[1].trim())

console.log('changePathArr', changePathArr)