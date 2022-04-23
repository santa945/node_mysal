const express = require('express');
const Router = express.Router()

const db = require('../db')

const { formatData } = require('../utils')

/**
 * 获取优惠券列表
 * /member/coupon/page
 * SELECT * FROM coupon_list WHERE STATUS="2" AND consumeChannels="1"
 */

Router.post('/coupon/page', async (req, res) => {
    let status = ''
    let consumeChannels = ''
    let sql = 'select * from coupon_list'
    for (let key in req.body) {
        if (key === 'status') {
            status = req.body[key]
        } else if (key === 'consumeChannels') {
            consumeChannels = req.body[key]
        }
    }
    sql += ` where status="${status}"`;
    if (consumeChannels) { sql += ` and consumeChannels="${consumeChannels}"`; }
    // 0-未使用，1-已使用，2-已失效
    try {
        let list = await db.query(sql);
        console.log('data', list.length);
        res.send(formatData({
            data: {
                couponList: list,
                total: list.length
            }
        }))
    } catch (err) {
        console.log('err', err);
        res.send(err)
    }
})

/**
* 获取会员信息信息
* /member/getMemberInfo 
*/

Router.route('/getMemberInfo')

    .get(async (req, res) => {
        let { id } = req.params
        let sql = `select * from member_list`
        try {
            let data = await db.query(sql);
            console.log('data', data);
            res.send(formatData({
                data: data[0]
            }))
        } catch (err) {
            console.log('err', err);
            res.send(err)
        }
    })

    /**
     * 删除用户
     */

    .delete(async (req, res) => {
        let { id } = req.params
        let sql = `delete from users where id="${id}"`;

        try {
            let data = await db.query(sql);
            console.log('删除成功');
            res.send(formatData({
                data: null,
                msg: "删除成功"
            }));
        } catch (err) {
            res.send(err);
        }
    })

    /**
     * 修改用户信息
     */
    .put(async (req, res) => {
        let { id } = req.params
        let str = ''
        for (let key in req.body) {
            str += key + '="' + body[key] + '",'
        }
        str = str.slice(0, -1);
        let sql = `update users set ${str} where id="${id}"`

        try {
            let { affectedRows } = await db.query(sql)
            if (affectedRows) {
                res.send(formatData())
            } else {
                res.send(formatData({
                    data: '没有找到该条数据',
                    status: 400
                }))
            }
        } catch (err) {
            res.send(err)
        }
    })



module.exports = Router