let realname = 'jack'
let person = {
        realname
    }
    // 引入fs,模块
const fs = require('fs')
fs.writeFile('./a.txt', 'hello node', err => {
    if (err) {
        throw err
    } else {
        console.log('操作完成')
    }
})