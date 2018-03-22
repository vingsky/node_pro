function ajax(data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST','http://127.0.0.1:9999',true);
    // xhr.open('POST','http://www.runoob.com/wp-content/themes/runoob/option/user/log.php',true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=utf-8');
    xhr.send(data);
    xhr.onreadystatechange = function(){
        if(xhr.status==200&&xhr.readyState==4){
            console.log('====================================')
            console.log(xhr.responseText);
            console.log('====================================')
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
    ajax('name=weiyan&password=kkyyww&action=signin&remember=1');
}