/**
 * 通用create
 * @methods  create
 */
const moment = require('moment')
/*exports.create = (req, res, models) =>{

}*/



/**
 * 通用查询单个
 * @method getItem
 */

exports.item = (req, res, models) => {
  const id = req.query.id || req.params.id || req.body.id 
  if (!id) {
    res.json({
      code: -200,
      message: '参数错误'
    })
  }
  models.findById(id).then(result => {
    res.json({
      code: 200,
      data: result || {}
    })
  }).catch(err => {
    res.json({
      code: -200,
      message: err.toString()
    })
  })
}

/**
 * 通用获取列表 
 * @method getList
 * @params  req
 * @params  res
 * @params  models 数据库表映射的对象
 * @params  sort   排序
 */

exports.list = (req, res, models) => {
  let {limit,currentPage,sort} = req.query
  const sortName = (sort && sort.split('-')[0]) ||'createdAt'
  const sortType = (sort && sort.split('-')[1]) ||'asc'
  limit = parseInt(limit,10) || 5
  currentPage = parseInt(currentPage,10) || 1
  
  const offset = (currentPage - 1) * limit
  models.findAndCountAll({
    offset,
    limit,
    order:`${sortName} ${sortType}`
  }).then(result => {
    const {count,rows} = result
    const totalPage = Math.ceil(count / limit)
    console.log(result)
    res.json({
      code:200,
      data:rows,
      total: count,
      totalPage
    })
  }).catch(err =>{
    res.json({
      code: -200,
      message:err.toString()
    })
  }) 
}

/**
 * 通用删除所有
 * 
 * @methods deleteAll
 */

exports.deleteAll = (req, res, models) =>{
  models.destroy().then(() =>{
    res.json({
      code:200,
      message:'删除成功',
      data:'success'
    })
  }).catch(err => {
    res.json({
      code: -200,
      message: err.toString()
    })
  })
}

/**
 * 通用删除单个
 * @methods deleteById
 */

exports.deleteById = (req, res, models) =>{
  const id = req.query.id || req.params.id || req.body.id 
  if(!id){
    res.json({
      code: -200,
      message: '参数错误',
      data:'failed'
    })
  }
  models.destroy({
    where: {
      id
    }
  }).then(()=>{
    res.json({
      code: 200,
      message: '删除成功',
      data:'success'
    })
  })
}

/**
 * 通用 更新
 * @methods update
 */
exports.updateData = (req,res,models) =>{
  const {id,createdAt} = req.body
  if(!id){
    res.json({
      code:-200,
      message:'参数错误'
    })
  }
  models.update(Object.assign({},req.body,{
    createdAt: moment(createdAt).format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
  }), {
    where:{
      id
    }
  }).then(result =>{
    res.json({
      code: 200,
      message: '修改成功'
    })
  }).catch(err => {
    res.json({
      code: -200,
      message:err.toString()
    })
  })
}

/**
 * 通用
 * recover // 恢复
 */

