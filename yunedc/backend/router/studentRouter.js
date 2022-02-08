const express = require("express")
const router = express.Router()
const conn = require("../db/mysql")

//图片上传
const upload = require("../upload")

//图片上传
// single: 上传单个文件 
//  "file" 前端上传图片的字段名
router.post("/upload", upload.single("file"), (req, res) => {
    // 需要返回图片的访问地址    域名+上传文件夹+文件名
    // const url = "http://localhost:3000/upload/" + req.file.filename
    const url = req.file.filename
    res.json({ url })
})

//添加新班级 
router.post("/class", (req, res) => {
    //接收参数
    let { className, classroom, ht, startDate } = req.body;
    let sql = "insert into classInfo (className, classroom, ht,startDate) values (?,?,?,?)"
    conn.query(sql, [className, classroom, ht, startDate], (err, result) => {
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

// 查询班级
router.get("/class", (req, res) => {
    let { page } = req.query
    let sql;
    let data;
    if (page) {
        // 如果有page,表示查询指定页的数据
        let start = (page - 1) * 5;
        sql = `select * from classinfo order by classId desc limit ${start},5`
    } else {
        // 如果没有page,查询表中所有记录
        sql = `select * from classinfo order by classId desc`
    }

    // I/O操作
    function task1() {
        return new Promise((resolve, reject) => {
            conn.query(sql, function (err, result) {
                if (err) {
                    reject('查询失败')
                } else {
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
                    resolve(data)
                }
            })
        })
    }

    //执行完指定页的查询后，再获取总页码
    task1()
        .then(data => {
            //查询表中所有记录的总数，并存入total字段
            let sql1 = "select count(classId) as total  from classinfo";
            conn.query(sql1, function (err, result) {
                if (err) {
                    console.log('查询数据库失败');
                } else {
                    data.total = result[0].total
                    res.send(data)
                }
            })
        })
        .catch(err => {

        })

})

//查询符合条件的班级信息
//查询未开班的班级信息
router.get("/class/:classStatus", (req, res) => {
    //接收参数
    let { classStatus } = req.params;
    let sql = "select classId,className from classinfo where classStatus = ?"
    conn.query(sql, [classStatus], function (err, result) {
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
//删除班级
router.delete("/class", (req, res) => {
    //接收参数
    let { id } = req.query;
    let sql = "delete from classinfo where classId = ?"
    conn.query(sql, [id], (err, result) => {
        if (err) {
            console.log('删除失败');
            return;
        }
        let data;
        if (result.affectedRows === 1) {
            data = {
                code: 0,
                msg: '删除成功'
            }
        } else {
            data = {
                code: 1,
                msg: '删除失败'
            }
        }
        res.send(data)
    })
})

//修改班级
router.put("/class", (req, res) => {
    //接收参数

    let { classId, className, classroom, ht, startDate } = req.body;
    let sql = "update classinfo set className=?,classroom=?,ht=?, startDate=? where classId = ?"
    conn.query(sql, [className, classroom, ht, startDate, classId], (err, result) => {
        if (err) {
            console.log('服务器异常');
            return;
        }
        let data;
        if (result.affectedRows === 1) {
            data = {
                code: 0,
                msg: '更新成功'
            }
        } else {
            data = {
                code: 1,
                msg: '更新失败'
            }
        }
        res.send(data)
    })
})


//新生报名 
router.post("/student", (req, res) => {
    //接收参数
    let { name, age, gender, pay, payStatus, classId, imgUrl, tel, idCard, address } = req.body;
    let sql = "insert into stuInfo (name, age, gender, pay, payStatus,classId,imgUrl,tel,idCard,address) values (?,?,?,?,?,?,?,?,?,?)"
    // let sql = "insert into stuInfo (name, age, gender, pay, payStatus,classId,imgUrl,tel,idCard,address) values ('11','011','0','1110','2',60,'92c78df0-6dc1-11ec-b7f7-2325960cfc23.jpg','11','11','111')"
    conn.query(sql, [name, age, gender, pay, payStatus, classId, imgUrl, tel, idCard, address], (err, result) => {
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


// 查询学生
router.get("/student", (req, res) => {
    let { page, classId } = req.query
    let pageSize = 5;
    let start = (page - 1) * pageSize;
    let sql;
    let data;
    if (classId) {
        // 选择指定班级的学生信息
        sql = `select * from stuInfo,classInfo where stuInfo.classId=classInfo.classId and stuInfo.classId = ${classId} order by stuId desc limit ${start},${pageSize}`
    } else {
        //选择所有班级的学生信息
        sql = `select * from stuInfo,classInfo where stuInfo.classId=classInfo.classId order by stuId desc limit ${start},${pageSize}`
    }

    function task1() {
        return new Promise((resolve, reject) => {
            conn.query(sql, function (err, result) {
                if (err) {
                    reject('查询失败1')
                } else {
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
                    resolve(data)
                }
            })
        })
    }

    task1()
        .then(data => {
            let sql1;
            if (classId) {
                sql1 = `select count(stuId) as total  from stuInfo where classId=${classId}`;
            } else {
                sql1 = "select count(stuId) as total  from stuInfo";
            }
            conn.query(sql1, function (err, result) {
                if (err) {
                    console.log('查询数据库失败');
                } else {
                    data.total = result[0].total
                    res.send(data)
                }
            })
        })
        .catch(err => {

        })

})


//有条件的查询
router.get("/searchStudent", (req, res) => {
    let { name, classId, age } = req.query
    console.log(req.query);

    let sql = "select * from stuInfo,classInfo where stuInfo.classId=classInfo.classId"
    if (name.length != 0) {
        // "select * from stuinfo where name='aa'"
        sql += ` and name='${name}'`
    }

    if (classId != "" && classId != "0") {
        sql += ` and stuInfo.classId = ${classId}`
    }

    if (age !== "") {
        sql += ` and age=${age}`
    }

    console.log(sql);
    function task1() {
        return new Promise((resolve, reject) => {
            conn.query(sql, function (err, result) {
                if (err) {
                    reject('查询失败1')
                } else {
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
                    resolve(data)
                }
            })
        })
    }

    task1()
        .then(data => {
            let sql1;
            if (classId) {
                sql1 = `select count(stuId) as total  from stuInfo where classId=${classId}`;
            } else {
                sql1 = "select count(stuId) as total  from stuInfo";
            }
            conn.query(sql1, function (err, result) {
                if (err) {
                    console.log('查询数据库失败');
                } else {
                    data.total = result[0].total
                    res.send(data)
                }
            })
        })
        .catch(err => {

        })
})
//删除学生
router.delete("/student", (req, res) => {
    //接收参数
    let { stuId } = req.query;
    let sql = "delete from stuinfo where stuId = ?"
    conn.query(sql, [stuId], (err, result) => {
        if (err) {
            console.log('删除失败');
            return;
        }
        let data;
        if (result.affectedRows === 1) {
            data = {
                code: 0,
                msg: '删除成功'
            }
        } else {
            data = {
                code: 1,
                msg: '删除失败'
            }
        }
        res.send(data)
    })
})


//修改学生
router.put("/student", (req, res) => {
    //接收参数
    let { stuId, name, age, gender, pay, payStatus, classId, imgUrl, tel, idCard, address } = req.body;
    let sql = "update stuinfo set name=?,age=?,gender=?,pay=?,payStatus=?,classId=?,imgUrl=?,tel=?,idCard=?,address=? where stuId = ?"
    conn.query(sql, [name, age, gender, pay, payStatus, classId, imgUrl, tel, idCard, address, stuId], (err, result) => {
        if (err) {
            console.log('数据库访问失败');
            return;
        }
        let data;
        if (result.affectedRows === 1) {
            data = {
                code: 0,
                msg: '更新成功'
            }
        } else {
            data = {
                code: 1,
                msg: '更新失败'
            }
        }
        res.send(data)
    })
})

module.exports = router