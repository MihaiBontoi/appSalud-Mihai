const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const Bascula = require('../src/js/bascula.js');


describe('Main Suite -- Pruebas Unitarias Clase Bascula', () => {
    describe('Constructor Báscula -- Test peso maximo', () => {
        const objetoPrueba=new Bascula();
        it('obtenerPesoMaximo() = 0', () => {
            expect(objetoPrueba.obtenerPesoMaximo(),'El peso máximo esperado es cero').to.be.equal(0); 
            });
    })
    describe('Constructor Báscula -- Test peso minimo', () => {
        const objetoPrueba=new Bascula();
        it('obtenerPesoMinimo() = 0', () => {
            expect(objetoPrueba.obtenerPesoMinimo(),'El peso minimo esperado es cero').to.be.equal(0); 
            });    
    })
    describe('Constructor Báscula -- Test numero anotaciones', () => {
        const objetoPrueba=new Bascula();
        it('obtenerNumeroAnotaciones() == 0',function(){
            assert.deepEqual(objetoPrueba.obtenerNumeroAnotaciones(),0, "El número de anotaciones deben ser cero");
            });
    }); 
    describe('Constructor Báscula -- Test anotar pesos', () => {
        const objetoPrueba=new Bascula();
        it('anotarPesos(peso) == 0',function(){
            var peso = undefined
            assert.deepEqual(objetoPrueba.anotarPeso(peso),"error,peso requerido", "El peso debe ser introducido");
            });
    }); 
    describe('Constructor Báscula -- Test calcular imc', () => {
        const objetoPrueba=new Bascula();
        it('calcularIMC(80,176) == 25.8',function(){
            objetoPrueba.anotarPeso(80,1.76)
            assert.deepEqual(objetoPrueba.calcularIMC(),25.83, "El IMC debe ser 25.8");
            });    
    });
    describe('Constructor Báscula -- Test describir imc', () => {
        const objetoPrueba=new Bascula();
        it('descibrirIMC(-1)) == error',function(){
            assert.deepEqual(objetoPrueba.describirIMC(-1),"error, IMC invalido", "error, IMC invalido");
            });
    }); 
  
 
})

describe('Main Suite -- Pruebas Unitarias Profe',function(){
    describe('Constructor Báscula -- Test Case 1' ,function(){
        const objetoPrueba=new Bascula();
        it('obtenerNumeroAnotaciones() == 0',function(){
            assert.deepEqual(objetoPrueba.obtenerNumeroAnotaciones(),0, "El número de anotaciones deben ser cero");
        });
        it('obtenerPesoMaximo() = 0',function(){
            expect(objetoPrueba.obtenerPesoMaximo(),'El peso máximo esperado es cero').to.be.equal(0);
        });
        it('obtenerPesoMinimo() = 0',function(){
            objetoPrueba.obtenerPesoMinimo().should.to.be.equal(0);
        });
    });

    describe('Clase Báscula -- Test Case 2' ,function(){
        const objetoPrueba=new Bascula();
        it('obtenerNumeroAnotaciones() == 0',function(){
            expect(objetoPrueba.obtenerNumeroAnotaciones()).to.be.equal(0);
        });
    });
    
    describe('Clase Báscula -- Test Case 3' ,function(){
        const objetoPrueba=new Bascula();
        it('anotarPeso(70)',function(){
            objetoPrueba.anotarPeso(70);
            expect(objetoPrueba.obtenerNumeroAnotaciones()).to.be.equal(1);
        });
        it('obtenerPesoMaximo() = 70',function(){
            expect(objetoPrueba.obtenerPesoMaximo()).to.be.equal(70);
        });
        it('obtenerPesoMinimo() = 70',function(){
            expect(objetoPrueba.obtenerPesoMinimo()).to.be.equal(70);
        });;      
    });
    
    describe('Clase Báscula -- Test Case 4' ,function(){
        const objetoPrueba=new Bascula();
        it('anotarPeso(70, 30)',function(){
            objetoPrueba.anotarPeso(70);
            objetoPrueba.anotarPeso(30);
            expect(objetoPrueba.obtenerNumeroAnotaciones()).to.be.equal(2);
        });
        it('obtenerPesoMaximo() = 70',function(){
            expect(objetoPrueba.obtenerPesoMaximo()).to.be.equal(70);
        });
        it('obtenerPesoMinimo() = 30',function(){
            expect(objetoPrueba.obtenerPesoMinimo()).to.be.equal(30);
        }); 
    });
    
    describe('Clase Báscula -- Test Case 5' ,function(){
        const objetoPrueba=new Bascula();
        it('anotarPeso(85, 95, 91)',function(){
            objetoPrueba.anotarPeso(85);
            objetoPrueba.anotarPeso(95);
            objetoPrueba.anotarPeso(91);

            expect(objetoPrueba.obtenerNumeroAnotaciones()).to.be.equal(3);
        });
        it('obtenerPesoMaximo() = 95',function(){
            expect(objetoPrueba.obtenerPesoMaximo()).to.be.equal(95);
        });
        it('obtenerPesoMinimo() = 85',function(){
            expect(objetoPrueba.obtenerPesoMinimo()).to.be.equal(85);
        });
    });

    describe('Clase Báscula -- Test Case 6' ,function(){
        const objetoPrueba=new Bascula();
        it('anotarPeso(85, 95, 91-1.83)',function(){
            objetoPrueba.anotarPeso(85);
            objetoPrueba.anotarPeso(95);
            objetoPrueba.anotarPeso(91,1.83);
            expect(objetoPrueba.obtenerNumeroAnotaciones()).to.be.equal(3);
        });
        it('calcularIMC() = 27.17',function(){
            expect(objetoPrueba.calcularIMC()).to.be.equal(27.17);
        });
    });
    describe('Clase Báscula: describirIMC(imc) -- Test Case 7' ,function(){
        const objetoPrueba=new Bascula();
        it('describirIMC(0) devuelve una cadena',function(){
            assert.isString(objetoPrueba.describirIMC(0), "El método debe devolver una cadena"); 
        });
        it('describirIMC(1) = <16.00: Infrapeso (delgadez severa)',function(){
            objetoPrueba.describirIMC(1).should.to.be.equal("Infrapeso (delgadez severa)"); 
        });
        it('describirIMC(16.5) = 16.00 – 16.99: Infrapeso (delgadez moderada)',function(){
            objetoPrueba.describirIMC(16.5).should.to.be.equal("Infrapeso (delgadez moderada)"); 
        });
        it('describirIMC(17.5) = 17.00 - 18.49: Infrapeso (delgadez aceptable)',function(){
            objetoPrueba.describirIMC(17.5).should.to.be.equal("Infrapeso (delgadez aceptable)"); 
        });
        it('describirIMC(19) = 18.50 - 24.99: Peso normal',function(){
            objetoPrueba.describirIMC(19).should.to.be.equal("Peso normal"); 
        });
        it('describirIMC(25) = 25.00 - 29.99: Sobrepeso',function(){
            objetoPrueba.describirIMC(25).should.to.be.equal("Sobrepeso"); 
        });
        it('describirIMC(33) = 30.00 - 34.99: Obeso (Tipo I)',function(){
            objetoPrueba.describirIMC(33).should.to.be.equal("Obeso (Tipo I)"); 
        });
        it('describirIMC(40) = 35.00 - 40.00: Obeso (Tipo II)',function(){
            objetoPrueba.describirIMC(40).should.to.be.equal("Obeso (Tipo II)"); 
        });
        it('describirIMC(40.5) = >40.00: Obeso (Tipo III)',function(){
            objetoPrueba.describirIMC(40.5).should.to.be.equal("Obeso (Tipo III)"); 
        });
    });
});

