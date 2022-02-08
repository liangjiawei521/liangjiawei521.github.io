const express = require("express")
const app = express()
const cors = require("cors")
//设置需要验证token的url,和过期时间
const expressJwt = require("express-jwt")
const vertoken = require("./token/token")

const userRouters = require("./router/userRouter")
const studentRouters = require("./router/studentRouter")

// http://localhost:3000/login
// http://localhost:3000/1.jpg

app.use(cors())
// 解析post请求的参数为json数据
app.use(express.json())

app.use(express.static('upload'))
//=============================================验证token

//解析token获取用户信息
app.use(function (req, res, next) {
  let token = req.headers['authorization'];
  if (token == undefined) {
    next();
  } else {
    vertoken.getToken(token).then((data) => {
      req.data = data;
      next();
    }).catch((error) => {
      next();
    })
  }
});

//验证token是否过期并规定那些路由不需要验证
app.use(expressJwt({
  secret: 'dkfjdjfkdfdfd',
  // 加密算法
  algorithms: ['HS256']
}).unless({
  path: ['/login']  //不需要验证的接口名称
}))

//设置托管静态目录; 项目根目录+ public.可直接访问public文件下的文件eg:http://localhost:3000/images/url.jpg

//token失效返回信息
app.use(function (err, req, res, next) {
  //token为空，或伪造，或过期
  if (err.status == 401) {
    res.send({
      code: 401,
      msg: 'token失效'
    })
  }else{
    next()
  }
})

app.use("/", userRouters)
app.use("/", studentRouters)

app.listen(3000, () => {
  console.log("服务器已开启在3000端口");
})