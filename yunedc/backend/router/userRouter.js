const express = require("express")
const router = express.Router()
const conn = require("../db/mysql")
const vertoken = require("../token/token")
const navData = {}
navData["admin"] = require("../api/adminRoutes.json")
navData["teacher"] = require("../api/teacherRoutes.json")

// 登录
router.post("/login", (req, res) => {
    let { account, pw } = req.body
    let sql = "select * from user where account = ? and pw = ?"
    conn.query(sql, [account, pw], function(err, result) {
        if (err) {
            console.log('查询数据库失败');
        } else {
            let data;
            if (result.length) {
                //==============================================调用生成token的方法
                let { role } = result[0]
                vertoken.setToken(account).then(token => {
                    data = {
                        code: 0,
                        message: '登录成功',
                        token,
                        role, //'admin' 'teacher'
                        navData: navData[role]
                            //前端获取token后存储在localStroage中,
                            //**调用接口时 设置axios(ajax)请求头Authorization的格式为`Bearer ` +token
                    }
                    res.send(data)
                })
            } else {
                data = {
                    code: 1,
                    msg: '登录失败 '
                }
                res.send(data)
            }

        }
    })
})
module.exports = router