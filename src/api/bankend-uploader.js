/**
 * 通用上传
 * 
 * @methods  uploadImg
 */

module.exports = (req, res) =>{
  if(req.files[0].size>512000){
    res.json(assertError('大小超过限制'))
  }
  res.json({
    files:req.files[0]
  })
}