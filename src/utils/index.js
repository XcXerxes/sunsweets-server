const fs = require('fs')
const path = require('path')

// 验证文件是否存在
const fileExistsSync = (path) => {
    try {
        fs.accessSync(path, fs.F_OK)
    } catch (e) {
        console.log(e)
        return false
    }
    return true
}


// 创建 secret.json

exports.createSecret = () => {
    var filePath = path.join(__dirname,'../../', 'src/config/superSecret.json')
    if (!fileExistsSync(filePath)) {
        const secret = {
            superSecret: Math.random() * 1000000
        }
        fs.writeFileSync(filePath, JSON.stringify(secret), 'utf8')
    }
} 
