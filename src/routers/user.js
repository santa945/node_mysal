const express = require('express');
const Router = express.Router()

const db = require('../db')

const {formatData} = require('../utils')

/**
 * 注册用户
 * /user
 * insert into users(`username`,`phone`) values('xxx','A')
 */

 Router.post('/',async (req,res)=>{
     let keys = ''
     let values = ''
     for(let key in req.body){
         keys += key + ','
         values += '"' + req.body[key] + '",'
     }

     //删除多余逗号
     keys = keys.slice(0,-1)
     values = values.slice(0,-1)
     let sql = `insert into users(${keys}) values(${values})`;
     console.log('sql=',sql);
     try{
        let data = await db.query(sql)
        data = formatData({
            data,
            msg:"数据插入成功"
        })
        res.send(data)
     }catch(err){
         let data = formatData({
             status:400,
             msg:err
         })
         res.send(data)
     }
 })

  /**
  * 获取用户信息
  * /user/123 
  */

 Router.route('/:id')
 
 .get(async (req,res)=>{
    let {id} = req.params
    let sql = `select * from users where id="${id}"`
    try{
        let data = await db.query(sql);
        res.send(formatData({
            data:data[0]
        }))
    }catch(err){
        res.send(err)
    }
})

/**
 * 删除用户
 */

 .delete(async (req,res)=>{
     let {id} = req.params
     let sql = `delete from users where id="${id}"`;

     try{
         let data = await db.query(sql);
         console.log('删除成功');
         res.send(formatData({
             data:null,
             msg:"删除成功"
         }));
     }catch(err){
         res.send(err);
     }
 })

 /**
  * 修改用户信息
  */
.put(async (req,res)=>{
    let {id} = req.params
    let str = ''
    for(let key in req.body){
        str += key + '="' + body[key] + '",'
    }
    str = str.slice(0,-1);
    let sql = `update users set ${str} where id="${id}"`

    try{
        let {affectedRows} = await db.query(sql)
        if(affectedRows){
            res.send(formatData())
        }else{
            res.send(formatData({
                data:'没有找到该条数据',
                status:400
            }))
        }
    }catch(err){
        res.send(err)
    }
})



 module.exports = Router