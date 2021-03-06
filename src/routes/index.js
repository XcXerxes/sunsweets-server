const express = require('express')
const router = express.Router()


// api bankend
const bankendUser = require('../api/bankend-user')
const bankendCarousel = require('../api/bankend-carousel')
const bankendSweetCate = require('../api/bankend-sweetCate')
const bankendSweetInfo = require('../api/bankend-sweetInfo')
const bankendShop = require('../api/bankend-shop')
const isAuthorize = require('./is-authorize')
const bankendUploader = require('../api/bankend-uploader')

// 上传图片
const mutiliUpload = require('../utils/uploader')

//frontend
const frontendCarousel = require('../api//frontend-carousel')
const frontendUserMessage = require('../api/frontend-message')
const frontendSweetInfo = require('../api/frontend-sweetInfo')
const frontendSweetCate = require('../api/frontend-sweetCate')


/**
 * API 
 * =================后台系统  bankend ========================================
 * 
 */

// ---------- 管理 --------------
// 后台登录
router.post('/bankend/login', bankendUser.login)

// ------------   上传图片 ----------------------------

router.post('/bankend/upload', isAuthorize, mutiliUpload, bankendUploader)

// ---------------- 轮播图 ------------------------------

// 后台轮播图列表
router.get('/bankend/carousel/list', isAuthorize, bankendCarousel.getList)

// 后台轮播图添加
router.post('/bankend/carousel/add', isAuthorize, bankendCarousel.create)

// 后台轮播图查看单个
router.get('/bankend/carousel/view/:id', isAuthorize, bankendCarousel.getItem)

// 后台轮播图删除单个
router.delete('/bankend/carousel/delete', isAuthorize, bankendCarousel.deleteById)

// 后台轮播图修改单个
router.post('/bankend/carousel/update', isAuthorize, bankendCarousel.modify)

// ----------------- 甜品分类 ----------------

// 分类列表
router.get('/bankend/sweetCate/list', isAuthorize, bankendSweetCate.getList)

//分类添加
router.post('/bankend/sweetCate/add', isAuthorize, bankendSweetCate.create)

//分类查看单个
router.get('/bankend/sweetCate/view', isAuthorize, bankendSweetCate.getItem)

//分类修改单个
router.post('/bankend/sweetCate/update', isAuthorize, bankendSweetCate.modify)

//分类删除单个
router.delete('/bankend/sweetCate/delete', isAuthorize, bankendSweetCate.deleteById)

// 获取所有分类列表
router.get('/bankend/sweetCate/all', isAuthorize, bankendSweetCate.getAll)



// ---------------------------- 甜品信息 ------------------------

// 甜品信息列表
router.get('/bankend/sweetInfo/list', isAuthorize, bankendSweetInfo.getList)

// 甜品信息查看
router.get('/bankend/sweetInfo/:id', isAuthorize, bankendSweetInfo.getItem)

// 甜品信息添加
router.post('/bankend/sweetInfo/add', isAuthorize, bankendSweetInfo.create)

// 甜品信息更新
router.post('/bankend/sweetInfo/update', isAuthorize, bankendSweetInfo.modify)

// 甜品信息删除
router.delete('/bankend/sweetInfo/delete', isAuthorize, bankendSweetInfo.deleteById)

// ------------------------------  推荐餐厅信息  ----------------------------

// 餐厅信息列表
router.get('/bankend/shop/list', isAuthorize, bankendShop.getList)

// 餐厅信息查看
router.get('/bankend/shop/:id', isAuthorize, bankendShop.getItem)

// 餐厅信息添加
router.post('/bankend/shop', isAuthorize, bankendShop.insert)

// 餐厅信息更新
router.post('/bankend/shop/update', isAuthorize, bankendShop.modify)

// 餐厅信息删除
router.delete('/bankend/shop/:id', isAuthorize, bankendShop.deleteById)


/**
 * 前台 frontend
 * 
 */

// =========================  轮播图  ===========================

// 获取轮播图列表
router.get('/frontend/carousel/list', frontendCarousel.list)

// ========================发送留言信息 =========================

// 创建留言
router.post('/frontend/message', frontendUserMessage.create)

// =========================  甜品信息 ================

// 获取甜品信息列表
router.get('/frontend/sweetShow/list', frontendSweetInfo.list)
// 获取当前甜品信息
router.get('/frontend/sweetShow/:id', frontendSweetInfo.item)

// ======================== 分类信息 ========================
router.get('/frontend/sweetCate/all', frontendSweetCate.getAll)

module.exports = router