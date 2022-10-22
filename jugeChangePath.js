
const execSync = require('child_process').execSync; //同步子进程
let status = execSync('git status').toString().trim();
console.log('status', status)