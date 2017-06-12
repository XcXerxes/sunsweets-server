const multer = require('multer')
const path = require('path')

/**
 * 图片存储的路径
 * @methods StorageDir
 */
class StorageDir {
  constructor(options) {
    this.options = options
    this.dirPath = options.dirPath
  }
  diskStorage() {
    const self = this
    return multer.diskStorage({
      destination: function (req, file, callback) {
        console.log(self.dirPath+':'+self.options)
        callback(null, self.dirPath);
      },
      filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
      }
    })
  }
}


const mutiliUpload = multer({
  storage: new StorageDir({
    dirPath: path.join(__dirname,'../../','static/images')
  }).diskStorage()
}).array('bankend',3)


module.exports = mutiliUpload 