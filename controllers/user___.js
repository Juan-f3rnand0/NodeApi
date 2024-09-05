//Importamos la función responde desde el modulo express

const {response} = require('express')

//Controlador para la solicitud GET a la ruta de usuario 

usuarioGet=(req, res=response)=>{
    res.json({
        msg: "GET API"
 //Devolver un objeto JSON con un mensaje indicando que se esta accediendo a la API con GET 
    })
}

//Controlador para la solicitud POST a la ruta de usuarios 

usuarioPost=(req, res=response)=>{
    res.json({
        msg: "POST API"
 //Devolver un objeto JSON con un mensaje indicando que se esta accediendo a la API con POST 
    })
}

//Controlador para la solicitud PUT  a la ruta de usuarios 

usuarioPut=(req, res=response)=>{
    res.json({
        msg: "PUT API"
 //Devolver un objeto JSON con un mensaje indicando que se esta accediendo a la API con PUT 
    })
}



//Controlador para la solicitud Delete  a la ruta de usuarios 

usuarioDelete=(req, res=response)=>{
    res.json({
        msg: "DELETE API"
 //Devolver un objeto JSON con un mensaje indicando que se esta accediendo a la API con Delete 
    })
}

module.exports={
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}
