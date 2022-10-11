async function getVersion(){
    try{
        //Se simula el llamado asíncrono a la base de datos
        var response = {
            version: "Versión 0.0.1"
        }
        return response;
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getVersion : getVersion,
}