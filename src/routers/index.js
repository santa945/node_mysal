const express = require('express')
const Router = express.Router()

const userRouter = require('./user')
const memberRouter = require('./member')
const goodsRouter = require('./goods')
const listRouter = require('./list')

Router.use(express.json(), express.urlencoded({ extended: false }))

Router.use('/user', userRouter)
Router.use('/member', memberRouter)
Router.use('/goods', goodsRouter)
Router.use('/list', listRouter)

module.exports = Router