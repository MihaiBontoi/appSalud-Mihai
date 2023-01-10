const Bascula = require('./bascula.js')
class Paciente{
    constructor(nombre,apellidos,fechaN){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.fechaN=new Date(fechaN)
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
        return this.fechaN.toLocaleDateString('es-es', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          });
    }
    modificarFechaNacimento(fecha){
        return this.fechaN = fecha
    }
    obtenerEdad(){
        var d1=new Date(new Date(this.fechaN).toLocaleDateString('en-us', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          }))

        var d2=new Date()
        var dif=Math.abs(d1 - d2)
        return parseInt(new Date(dif)/(1000*60*60*24*365))
    }
    modificarBascula(bascula){
        return this.bascula = bascula;
    }
    obtenerBascula(){
        return this.bascula=new Bascula();
    }
    calcularIMC(){
        if (this.bascula === undefined) {return -1}
        return this.bascula.calcularIMC();
    }


}
module.exports=Paciente;