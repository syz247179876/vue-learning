let realname = 'jack'


let username = 'syz';
let password = '123456';

let content = {
    username,
    password
}
let person = {
        realname
    }
    // 引入fs,模块
const fs = require('fs')
fs.writeFile('./syz.json', JSON.stringify(content), err => {
    if (err) {
        throw err
    } else {
        console.log('操作完成')
    }
})


fs.readFile('a.json', 'UTF-8', (err, data) => {
    if (err) {
        throw err
    } else {
        // str转为json对象
        let res = JSON.parse(data)
        if (username == res.username && password == res.password) {
            console.log('登录成功!')
        } else
            console.log('登录失败')
    }
})