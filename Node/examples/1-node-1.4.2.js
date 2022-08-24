var http = require('http');
var querystring = require('querystring')

// 侦听服务器的request事件
http.createServer((req,res)=>{
  var postData = ''
  // 设置编码集
  req.setEncoding('utf-8')
  // 侦听请求的data事件
  req.on('data',chunk=>{
    postData+=chunk;
  })
  // 侦听请求的end事件
  req.on('end',()=>{
    res.end(postData)
  })
}).listen(8080);
console.log('服务器启动完毕')