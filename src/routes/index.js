const express = require('express')
const router = express.Router()


// api
const bankendUser = require('../api/bankend-user')
const bankendCarousel = require('../api/bankend-carousel')
const isAuthorize = require('./is-authorize')
// 后台系统登录
router.post('/bankend', (req, res)=>{
    bankendUser
})

/**
 * API 
 * =================后台系统  bankend ========================================
 * 
 */

// ---------- 管理 --------------
// 后台登录
router.post('/bankend/login', bankendUser.login)

// ---------------- 轮播图 ------------------------------

// 后台轮播图列表
router.get('/bankend/carousel/list', isAuthorize, bankendCarousel.getList)

// 后台轮播图添加
router.post('/bankend/carousel/add', isAuthorize, bankendCarousel.create)

// 后台轮播图查看单个
router.post('/bankend/carousel/view', isAuthorize, bankendCarousel.getItem)

// 后台轮播图删除单个
router.post('/bankend/carousel/delete', isAuthorize, bankendCarousel.deleteById)

// 后台轮播图修改单个
router.post('/bankend/carousel/modify', isAuthorize, bankendCarousel.modify)

// ----------------- 分类 ----------------






/**
 * 前台 frontend
 * 
 */


module.exports = router