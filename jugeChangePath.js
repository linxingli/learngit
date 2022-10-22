
const execSync = require('child_process').execSync; //同步子进程

// 从git status的结果中获取增删改的文件路径数组
let statusStr = execSync('git status').toString().trim()
let arr = statusStr.match(/(new file|deleted|modified): (.*)/g)
let changePathArr = arr.map(v => v.split(':')).map(v => v[1].trim())

console.log('changePathArr', changePathArr)

// 仅能修改 src/custom-form/(kts|fms|tms) 等文件夹
let valid = changePathArr.filter(item => {
  return !new RegExp(/(src\/custom-form\/(fms|kts)|jugeChangePath.js)/).test(item)
})

// 白名单设置
let userName = execSync('git config user.name ').toString().trim()
let whitelist = ['linxingli']
console.log('userName', userName)

if (valid && !whitelist.includes(userName)) {
  console.log('您无权修改这些文件', valid)
  process.exit(1)
}


