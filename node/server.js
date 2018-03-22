const http = require('http');
http.createServer(function(req,res){
    console.log('====================================')
    console.log(req.query);
    console.log('====================================')
    res.writeHead(200,{'content-type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':'*'});
    res.write('魏延你好！');
    res.end();
}).listen(9999)