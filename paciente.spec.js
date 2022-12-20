const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const Paciente = require('../src/paciente.js');


describe('Main Suite -- Pruebas Unitarias Clase Paciente', () => {
    describe('Constructor Paciente -- Test ', () => {
        var objetoPrueba=new Paciente("Mircea Mihai","Bontoi");
        it('saludar() = string', () => {
            expect(objetoPrueba.saludar()).to.be.a('string'); 
            });
        it('obtenerNombre() = Mircea Mihai', () => {
            expect(objetoPrueba.obtenerNombre()).to.be('Mircea Mihai'); 
            });
        it('modificarNombre() = Mircea M.', () => {
            expect(objetoPrueba.modificarNombre("Mircea M.")).to.be('Mircea M.'); 
            });
    });
});

//Pruebas predeterminadas
describe('Main Suite -- Pruebas Unitarias Paciente',function(){
    var u1=new Paciente('Pedro','Ruiz del Castillo','16/02/1983');
    describe('Clase Paciente -- Test Case 1' ,function(){
        it('Constructor Paciente (Pedro, Ruiz del Castillo, 16/03/1983) y ¡Saludar!',function(){
            const resultadoNombre =u1.saludar();
            expect(resultadoNombre).to.be.equal('Hola soy Pedro Ruiz del Castillo');
        });
    });
    describe('Clase Paciente -- Test Case 2' ,function(){
        it('obtenerNombre()',function(){
            const resultadoNombre =u1.obtenerNombre();
            expect(resultadoNombre).to.be.equal('Pedro');
        });
    });

    describe('Clase Paciente -- Test Case 3' ,function(){
        it('modificarNombre(Andrés)',function(){
            u1.modificarNombre('Andrés');
            const resultadoNombre =u1.obtenerNombre();
            expect(resultadoNombre).to.be.equal('Andrés');
        });
    });

    describe('Clase Paciente -- Test Case 4' ,function(){
        it('obtenerApellidos()',function(){
            const resultado =u1.obtenerApellidos();
            expect(resultado).to.be.equal('Ruiz del Castillo');
        });
    });

    describe('Clase Paciente -- Test Case 5' ,function(){
        it('modificarApellidos(Rodríguez Mas)',function(){
            u1.modificarApellidos('Rodríguez Mas');
            const resultado =u1.obtenerApellidos();
            expect(resultado).to.be.equal('Rodríguez Mas');
        });
    });

    describe('Clase Paciente -- Test Case 6' ,function(){
        it('obtenerFechaNacimiento() = 16/02/1983',function(){
            const fn=u1.obtenerFechaNacimiento();
            expect(fn).to.be.equal('16/02/1983');
        });
    });
    
    describe('Clase Paciente -- Test Case 7' ,function(){
        it('obtenerEdad() = 39',function(){
            const resultado =u1.obtenerEdad();
            expect(resultado).to.be.equal(39);
        });
    });

    describe('Clase Paciente -- Test Case 8' ,function(){
        it('u2.obtenerFechaNacimiento() = 25/12/1995',function(){
            const u2=new Paciente('Jesús','Puente Colgante','25/12/1995');
            const fn=u2.obtenerFechaNacimiento();
            expect(fn).to.be.equal('25/12/1995');
        });
    });

    describe('Clase Paciente -- Test Case 9' ,function(){
        const u2=new Paciente('Almudena','Puente Colgante','20/08/1990');
        it('u2.obtenerFechaNacimiento() = 20/08/1990',function(){
            const fn=u2.obtenerFechaNacimiento();
            expect(fn).to.be.equal('20/08/1990');
        });

        it('u2.obtenerEdad() = 31',function(){
            const edad=u2.obtenerEdad();
            expect(edad).to.be.equal(31);
        });
    });
});