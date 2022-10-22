
const execSync = require('child_process').execSync; //同步子进程

// 从git status的结果中获取增删改的文件路径数组
let statusStr = execSync('git status').toString().trim();
let arr = statusStr.match(/(new file|deleted|modified): (.*)/g)
let changePathArr = arr.map(v => v.split(':')).map(v => v[1].trim())

console.log('changePathArr', changePathArr)

// 仅能修改 src/custom-form/(kts|fms|tms) 等文件夹
let valid = changePathArr.every(item => new RegExp(/src\/custom-form\/(fms|kts)/).test(item))

console.log('--valid--', valid)

// if (!valid) {
//   process.exit(1)
// }


