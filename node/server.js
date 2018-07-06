const http = require('http');
const querystring = require('querystring');
const callback = (res,obj)=>{
    res.writeHead(200, {
        'content-type': 'text/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    });
    res.write(JSON.stringify(obj));
    res.end();
}
http.createServer(function (req, res) {
    // console.log(req);
    
    let body = '';
    req.on('data', function (chunk) {
        body += chunk;
        console.log(body,'1111');
    });
    req.on('end', function () {
        console.log(body,'-----');
        let parm = querystring.parse(body);
        console.log(parm);
        if (parm.name == 'weiyan' && parm.pwd == '1234') {
            callback(res,{code:1,msg:'登陆成功!'});
        }else{
            callback(res,{code:2,msg:'用户名密码错误!'});
        }
    })
    
}).listen(9999)