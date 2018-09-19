
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

// --------- SERVICIOS ------------ //

// servicios de empleado
var empleadoServicio = require('./servicios/EmpleadoServicio')


// -------------END --------------- //

var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');

// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/

app.use(
    connection(mysql,{
        
        host: 'localhost', //'localhost',
        user: 'root',
        password : '1234',
        port : 3306, //port mysql
        database:'proyectoInmobiliaria'

    },'pool') //or single
);

// ------- Rutas para los Servicios de empleado -------- //
app.post('/empleado/registrarEmpleado', empleadoServicio.registrarEmpleado);
app.get('/empleado/listar', empleadoServicio.listar);
app.get('/empleado/buscarEmpleadoCedula', empleadoServicio.empleadoCedula);
app.get('/empleado/listarEmpleado', empleadoServicio.listarEmpleado);
app.post('/empleado/editarEmpleado', empleadoServicio.editarEmpleado);
// ------------ END -----------------------------------//

app.use(app.router);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
