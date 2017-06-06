const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.json(__dirname,'static')))

app.get('/user',(req,res) => {
    console.log(req)
})

const port = process.env.POST || 4000
app.listen(port,err=>{
    if(err){
        console.log(err)
    }
    console.log(`server at http://localhost:${port} listening... \n`)
})