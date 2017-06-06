const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require('path')

// 路由集合
const routes = require('./src/routes')
const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'static')))

app.use('/',routes)


const port = process.env.POST || 4000
app.listen(port,err=>{
    if(err){
        console.log(err)
    }
    console.log(`server at http://localhost:${port} listening... \n`)
})