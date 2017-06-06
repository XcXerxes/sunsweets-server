const express = require('express')
const router = express.Router()

const bankendUser = require('../api/bankend-user')
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







/**
 * 前台 frontend
 * 
 */


module.exports = router