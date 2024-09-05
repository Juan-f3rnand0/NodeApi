    const usuario = require('../modules/usuario')

    //importar una libreria, para el cifrado de la contraseña y comparacion de contraseña 
    const bcrypt = require('bcryptjs')


    //Funcion asincronica para comparar la contraseña proporcional con el hash almacenado 

    async function comparePassword(plaintextPassword, hash) {

        const result = await bcrypt.compare(plaintextPassword,hash);
        
        return result;


    }


    //Funcion de inicio de sesión 

    const login=async(req,res)=>{
        const {email, password}=req.body //extraer el email y la contraseña 
        //del cuerpo de la solicitud 
        //Busca un usuario en la base de datos que coincida con el email proporcionado 
    const usuario = await Usuario.findOne({email})
    try{
        //Verifica que el usuario exista en la base de datos 
        if(!usuario){
            return res.status(400).json({
                msg: 'Correo no electronico no encontrado'
            })
        }

        if(usuario.estado){
            return res.status(400).json({
                msg: 'Usuario inactivo'
            })
        }

        //Compara la contraseña proporcionada con la almacenada en la base de datos 
        resultado = await comparePassword(password, usuario.password)
        if(resultado==true){
            return res.status(400).json({
                msg: 'El password es correcto '
            })
        } 
        
        else{
            return res.status(400).json({
                msg: 'El password es incorrecto'
        })

        }

    }

    catch(err){
        return res.status(400).json({
            msg: 'apreciado usuario contacte con el administrador'
            //Mensaje de error generico en caso de fallo
         })
    }


}
//Exporta la función de inicio de session para que este disponible para otros modulos 
module.exports={
    
    login

}



