const Bascula = require('./bascula.js')
class Paciente{
    constructor(nombre,apellidos,fechaN){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.fechaN=fechaN;
    }
    saludar(){
        return "Hola soy "+ this.nombre+" " + this.apellidos;
    }
    obtenerNombre(){
        return this.nombre;
    }
    modificarNombre(nombre){
        return this.nombre = nombre ;
    }
    obtenerApellidos(){
        return this.apellidos;
    }
    modificarApellidos(apellidos){
        return this.apellidos = apellidos
    }
    obtenerFechaNacimiento(){
        return this.fechaN;
    }
    modificarFechaNacimento(fecha){
        return this.fechaN = fecha
    }
    obtenerEdad(){
        var fechaH = (new Date()).toLocaleDateString('es-es', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        return this.fechaN.getTime() - fechaH.getTime()
    }
    modificarBascula(bascula){
        return this.bascula = bascula;
    }
    obtenerBascula(){
        return this.bascula=new Bascula();
    }
    calcularIMC(){
        return this.bascula.calcularIMC();
    }


}
module.exports=Paciente;