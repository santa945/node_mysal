const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())//cors解决跨域问题
const routers = require('./routers')

app.use(express.static('./'))

app.use(routers)

app.listen(3434,()=>{
    console.log('server is running on port 3434')
})