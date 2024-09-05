//Importamos la funcion response desde el módulo express
const {response} = require('express')

// Importa la libreria bcryots para le cifrado y comparacon de contraeñas
const bcrypt = require('bcryptjs')

//Importar modelos
//Importar el modelo de usuario desde el modulo
const Usuario = require ('../modules/usuario')

//Controlador para la solicitud GET a la ruta de usuarios

const usuarioGet=async(req, res=response)=>{
    const body=req.query;//Extraer los parámetros de la consulta 
    const{q, nombre, page=1, limit}= req.query;
    //consulta todos los documentos de la colección de la base de datos Usuarios
    const usuarios=await usuario.find();

    res.json({ 
        //Devolver un objeto JSON con los usuarios obtenids de la BD
        usuarios 
    });
}
//controlador para la solicitud GET de promedio de usuarios
const PromGet=async(req, res=response)=>{
    const body=req.query;//Extraer los parámetros de la consulta 
    const{q, nombre, page=1, limit}= req.query;
    //consulta todos los documentos de la colección de la base de datos Usuarios
    const usuarios=await Usuario.find();
    //muestra cada documento de usuario por consola
    usuarios.forEach(numero => console.log(numero));

    res.json({
        //Devuelve un mensaje indicando que es el controlador 
        msg:msg
    
    });
}

const usuarioPost=async (req,resp=response)=>{
    const body=req.query;//Extrae los parámetros de la consulta 
    let msg='';//Inicializamos una variable para el mensaje de respuesta

    //Creamos un nuevo usuario 
    //Creamos el nuevo usuario con la solicitud 
    const usuario=new Usuario(body);
    //Extrae los datos del cuerpo de la solicitud 
    const{nombre, email, password, rol, estado}=req.body;
    try{
        //Encripta la contraseña antes de guardarla en la BD
        const salt=bcrypt.genSaltSync(10);//Genera una cadena de cifrado    
        usuario.password=bcrypt.hashSync(password, salt);//Cifrado para la contraseña con
         //la contraseña con la cadena (salt) generada  
        
         //Guarda el usuario en la base de deatos 
         await usuario.save()
            //Asigna un mensaje de exito 
            msg='Usuario registrado'
    
        }
        catch(error){
            console.log(error)//Muestra el error por consola 
            if (error){
                if(error.name=='ValidationError'){
                    console.error(Object.values(error.errors).map(val=>
                        
                        
                        
                        
                        //Muestra los mensajes de error de validacion 
                        msg=Object.values(error.errors).map(val=>

                            val.message)
                            //Asigna el mensaje de error de los errores 
                            //De respuesta 
                        
                        ))
                }
            }
  
        }

        console.log(msg);//Muestra el mensaje de respuesta por consola 

        res.json({
            //Devuelve un mensaje indicando que es el controlador 
            msg:msg
        
        });

}

const usuarioPut=async (req,resp=response)=>{
    const body=req.query;//Actualize   los parámetros de la consulta 
    //Muestra los parametros por consola 
    console.log(body);
    const{nombre, email, password, rol, estado}=req.body;

    //Busca y actualiza un usuario en la base de datos 
    const usuario=await Usuario.findOneAndUpdate({email:email},{nombre:nombre},{rol:rol})

    res.json({
        //Devuelve un mensaje que se aactualizo el usuario 
        msg:'Usuario modificado',
        //Devuelve el usuario modificado 
        usuario
    })
}




const usuarioDelete=async (req,resp=response)=>{
    const body=req.query;//Elimina los parámetros de la consulta 

    console.log(body);
    const{nombre, email, password, rol, estado}=req.body;
   //Busca y Delete un usuario en la base de datos 
   const usuario=await Usuario.findOneAndDelete({email:email},{nombre:nombre},{rol:rol})

   res.json({
    //Devuelve un mensaje que se aactualizo el usuario 
    msg:'Usuario Eliminado',
    //Devuelve el usuario modificado 
    usuario
});

}


//Exporto los controladores de las rutas de  usuario para que estén disponibles 
//Para otros modulos o archivos
module.exports={
    usuarioGet,
    PromGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}





