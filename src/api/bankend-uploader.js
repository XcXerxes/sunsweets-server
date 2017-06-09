const multer = require('multer')
const path = require('path')

const Storage = multer.diskStorage({
     destination: function(req, file, callback) {
         callback(null, path.join(__dirname,"./static/images"));
     },
     filename: function(req, file, callback) {
         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
     }
 });

 const multerUpload = (callback) =>{
     return multer({
         storage:Storage
     })[callback]
 }