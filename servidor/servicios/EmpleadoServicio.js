


/**
 * Lista de usuarios
 */
exports.listar = function(req, res){
    req.getConnection(function(err,connection){
          var query = connection.query('SELECT * FROM empleado',function(err,rows){
                if(err)
                    console.log("Error Selecting : %s ",err );
                    res.send({data:rows});  
                    console.log(rows);
           });
      });
};

/**
 * Buscar empleado por cedula
 */
exports.empleadoCedula = function(req, res){
    var cedula = req.params.cedula;
    req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM empleado WHERE cedula = ?',[cedula],function(err,rows){
            if(err)
                console.log("Error Selecting : %s ",err );
                res.send({data:rows[0]});
         });
    });
};

/**
 * Lista de empleados
 */
exports.listarEmpleado = function(req, res){
    req.getConnection(function(err,connection){
          var query = connection.query('SELECT * FROM empleado',function(err,rows){
                if(err)
                    console.log("Error Selecting : %s ",err );
                    res.send({data:rows});  
           });
      });
};


/**
 * Registrar un empleado
 */
exports.registrarEmpleado = function(req, res){
    var data = JSON.parse(JSON.stringify(req.body));
    req.getConnection(function(err,connection){
        // Construimos el objeto persona que se va a registrar
        var empleado = {
            cedula  : data.empleado.cedula,
            nombre    : data.empleado.nombre,
            apellido: data.empleado.apellido,
            fecha_nacimiento: data.empleado.fechaNacimiento,
            fehca_ingreso: data.empleado.fechaIngreso,
            genero: data.empleado.genero,
            direccion: data.empleado.direccion,
            salario: data.empleado.salario,
            Ciudad: data.Ciudad.id,
            telefono: data.empleado.telefono,
            entrevista_aceptada: data.empleado.entrevistaAceptada,
            email: data.empleado.email,
            Tipo_empleado: data.Tipo_empleado.id
            
        };
        // Validamos si ya existe un empleado con la cedula
        var sql = "SELECT * FROM empleado WHERE cedula = ?";
        var validaEmpleado = connection.query(sql,[empleado.cedula], function(err, rows){
            // validamos si se presento error
            if(err){
                res.send({data:"Error al validar el empleado"});
                return;
            }
            // validamos si se encuentro algun registro de empleado
            if(rows.length > 0){
                res.send({data:"Ya hay un empleado registrado con esta cedula"});
                return;
            }                
                // Guardamos el empleado
                var queryEmpleado = connection.query("INSERT INTO empleado set ? ",empleado, function(err, rows){
                    if (err){
                        res.send({data:"Error al guardar el empleado"});
                        console.log(empleado);
                        console.log(err);
                        return;
                    }
                    // Buscamos el empleado que se guardo
                    var buscarEmpleado = connection.query('SELECT * FROM empleado WHERE cedula = ?',[persona.cedula],function(err,rows){
                        if(err){
                            res.send({data:"Error al buscar el empleado"});
                            return;
                        }
                        if(rows.length == 0){
                            res.send({data:"El empleado no se encontro"});
                            return;
                        }
                    });
                });
            });     
        });
   
};

/**
 * editar empleado
 */
exports.editarEmpleado = function(req, res){
    var data = JSON.parse(JSON.stringify(req.body));
    req.getConnection(function(err,connection){
        // Construimos el objeto persona que se va a editar
        var empleado = {
            cedula  : data.empleado.cedula,
            nombre    : data.empleado.nombre,
            apellido: data.empleado.apellido,
            fecha_Nacimiento: data.empleado.fechaNacimiento,
            fehca_Ingreso: data.empleado.fechaIngreso,
            genero: data.empleado.genero,
            direccion: data.empleado.direccion,
            salario: data.empleado.salario,
            Ciudad: data.Ciudad.id,
            telefono: data.empleado.telefono,
            entrevista_aceptada: data.empleado.entrevistaAceptada,
            email: data.empleado.email,
            Tipo_empleado: data.Tipo_empleado.id
        };

        var sql = "SELECT * FROM empleado WHERE (cedula = ? )";
        var validaEmpleado = connection.query(sql,[empleado.cedula], function(err, rows){
            // validamos si se presento error
            if(err){
                res.send({data:"Error al validar el empleado"});
                return;
            }
            // validamos si se encuentro algun registro de persona
            if(rows.length > 0){
                res.send({data:"Otro empleado tiene esta cedula"});
                return;
            }    
        });
    });
};