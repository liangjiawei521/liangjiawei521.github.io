const multer = require("multer")  // nodejs用于上传文件的模块
const uuid = require("uuid")  //uuid用来生成唯一标识符

/*
  multer是node的中间件, 处理表单数据 主要用于上传文件  multipart/form-data
*/

// 指定存储位置
const storage = multer.diskStorage({
    // 存储位置
    destination(req, file, callback) {
        // 参数一 错误信息   参数二  上传路径（此处指定upload文件夹）
        callback(null, "upload/upload")
    },
    // 确定文件名
    filename(req, file, cb) {
    	//文件扩展名
        let extName = file.originalname.slice(file.originalname.lastIndexOf('.'))
        //新文件名
        let fileName = uuid.v1()
        cb(null, fileName + extName)
    }
})
// 得到multer对象  传入storage对象
const upload = multer({ storage })
module.exports = upload;