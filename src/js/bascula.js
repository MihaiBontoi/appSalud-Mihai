class Bascula {
    constructor() {
        this.pesos = new Array();
        this.alturas = new Array();
        this.fechas = new Array();
        this.anotaciones = 0;
    }
    obtenerNumeroAnotaciones(){
        return this.anotaciones
    }
    anotarPeso(peso,altura = "1",fecha = new Date()){
        if (peso === undefined){
            return "error,peso requerido";
        }
        this.anotaciones++;
        this.pesos.push(peso);
        this.alturas.push(altura);
        this.fechas.push(fecha);
        return;
    }
    obtenerPesoMaximo(){
        if (this.pesos.length == 0){
            return 0;}
        return this.pesos.max();
    }
    obtenerPesoMinimo(){
        if (this.pesos.length == 0){
            return 0;}
        return this.pesos.min();
    }
    calcularIMC(){
        this.imc= this.pesos.at(-1) / (this.alturas.at(-1)^2)
        return this.imc=this.imc.toFixed(2)
    }
    describirIMC(imc){
        if (imc < 0){
            return "error, IMC invalido"
        }
        if (imc < 16) {
           return "Infrapeso (delgadez severa)";
        }
        else if (imc >=16 && imc < 17){
            return "Infrapeso (delgadez moderada)"
        }
        else if (imc >=17 && imc < 18,5){
            return "Infrapeso (delgadez aceptable)"
        }
        else if (imc >=18.5 && imc < 25){
            return "Peso normal"
        }
        else if (imc >=25 && imc < 30){
            return "Sobrepeso"
        }
        else if (imc >=30 && imc < 35){
            return "Obeso (Tipo I)"
        }
        else if (imc >=35 && imc < 40){
            return "Obeso (Tipo II)"
        }
        else if (imc >=40){
            return "Obeso (Tipo III)"
        }
    }
    
  }

module.exports=Bascula;


