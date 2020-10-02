const express = require('express')
const Router = express.Router()

const db = require('../db')

const {formatData} = require('../utils')

/**
 * 获取信息列表
 * /list
 */

 Router.route('/').get(async (req,res)=>{
     let sql = 'select * from goods'

     try{
        let data = await db.query(sql)
        console.log('data=',data);
        res.send(formatData({
            data
        }))
     }catch(err){
        res.send(err)
     }
 })



 module.exports = Router