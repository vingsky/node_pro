function ajax(data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST','http://127.0.0.1:9999',true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=utf-8');
    xhr.send(data);
    xhr.onreadystatechange = function(){
        if(xhr.status==200&&xhr.readyState==4){
            var res = JSON.parse(xhr.responseText);
            console.log(res,'服务器响应');
            if(res.code==1){
                alert(res.msg);
            }else{
                alert(res.msg);              
            }
        }
    }
}
function getData(){
    var name = document.getElementById('username').value;
    var pwd = document.getElementById('pwd').value;
    var obj = {};
    obj.name = name;
    obj.pwd = pwd;
    console.log(obj);
    var parm = '';
    for(var key in obj){
        parm+=key+'='+obj[key]+'&';
    }
    parm = parm.slice(0,-1);
    console.log(parm);
    ajax(parm);
}