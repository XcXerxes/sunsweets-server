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
    return multer.diskStorage({
      destination: function (req, file, callback) {
        callback(null, this.dirPath);
      },
      filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
      }
    })
  }
}

module.exports = StorageDir 