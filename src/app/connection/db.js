var mysql=require('mysql')

var config={
    host: 'localhost:3306',
    user: 'root',
    password: '1234',
    database: 'proyectoinmobiliaria'
}

var con=mysql.createConnection(config);

exports.myConn= function(){
    return con;
}