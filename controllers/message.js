async function getMessage(){
    try{
        //Se simula el llamado asíncrono a la base de datos
        var response = {
            message: "Bienvenido Candidato 01"
        }
        return response;
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getMessage : getMessage,
}