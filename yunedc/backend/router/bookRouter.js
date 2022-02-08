const express = require("express")
const router = express.Router()
const conn = require("../db/db")
const upload = require("../uploadImg/upload")

//图片上传
router.post("/upload", upload.single("file"), (req, res) => {
    // 需要返回图片的访问地址    域名+文件名
    const url = "http://localhost:3000/upload/" + req.file.filename
    res.json({ url })
})

//添加新商品
router.post("/book", (req, res) => {
    //接收参数
    let { bookname, price, imgUrl } = req.body;
    let sql = "insert into product (bookname,price,imgUrl) values (?,?,?)"
    conn.query(sql, [bookname, price, imgUrl], (err, result) => {
        if (err) {
            console.log('增加失败');
            return;
        }
        let data;
        if (result.affectedRows === 1) {
            data = {
                code: 0,
                msg: '添加成功'
            }
        } else {
            data = {
                code: 1,
                msg: '添加失败'
            }
        }
        res.send(data)
    })
})

// 查询商品
router.get("/book", (req, res) => {
    let sql = "select * from product order by id desc"
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('查询数据库失败');
        } else {
            let data;
            if (result.length) {
                data = {
                    code: 0,
                    list: result
                }
            } else {
                data = {
                    code: 1,
                    msg: '没有结果 '
                }
            }
            res.send(data)
        }
    })
})

//修改商品
//更新商品
router.put("/book",(req,res)=>{
    //接收参数
    
    let { Id,bookname,price,imgUrl} = req.body;
    imgUrl = 'http://localhost:3000/upload/161648443471801.jpg'
    let sql = "update product set bookname=?,price=?,imgUrl=? where Id = ?"
    conn.query(sql,[bookname,price,imgUrl,Id],(err,result)=>{
        if (err){
            console.log('服务器异常');
            return;
        }
        let data;
        if (result.affectedRows === 1){
            data = {
                code: 0,
                msg: '更新成功'
            }
        }else{
            data = {
                code: 1,
                msg: '更新失败'
            }
        }
        res.send(data)
    })
})

//删除商品
router.delete("/book",(req,res)=>{
    //接收参数
    let { Id} = req.query;
    let sql = "delete from product where Id = ?"
    conn.query(sql,[Id],(err,result)=>{
        if (err){
            console.log('删除失败');
            return;
        }
        let data;
        if (result.affectedRows === 1){
            data = {
                code: 0,
                msg: '删除成功'
            }
        }else{
            data = {
                code: 1,
                msg: '删除失败'
            }
        }
        res.send(data)
    })
})
module.exports =  router