const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
     destination: function(req, file, callback) {
         callback(null, path.join(__dirname,"./static/images"));
     },
     filename: function(req, file, callback) {
         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
     }
 });

  exports.multerUpload = (callback) =>{
     return multer({
         storage
     })[callback]
 } 