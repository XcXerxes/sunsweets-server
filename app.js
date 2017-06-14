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

app.use('/api',routes)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.use(function(err, req, res) {
    res.status(err.status || 500)
    res.send(err.message)
})

const port = process.env.POST || 4000
app.listen(port,err=>{
    if(err){
        console.log(err)
    }
    console.log(`server at http://localhost:${port} listening... \n`)
})