/**
 * Estructura de respuesta para la api
 */
class Response {
    constructor(status,status_code,message,respuesta = {}){
        this.status= status,
        this.status_code=status_code,
        this.message= message,
        this.data=respuesta;
    }
}    
module.exports = Response;