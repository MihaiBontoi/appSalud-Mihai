const assert = require('chai').assert;
const expect = require('chai').expect;
const Bascula = require('../src/js/bascula.js');
const Paciente = require('../src/js/paciente.js');


describe('Main Suite -- Pruebas Unitarias Clase Paciente', () => {
    describe('Constructor Paciente -- Test ', () => {
        var objetoPrueba=new Paciente("Mircea Mihai","Bontoi","05/02/2000");
        it('saludar() = string', () => {
            expect(objetoPrueba.saludar()).to.be.a('string'); 
            });
        it('obtenerNombre() = Mircea Mihai', () => {
            expect(objetoPrueba.obtenerNombre()).to.be.equal('Mircea Mihai'); 
            });
        it('modificarNombre() = Mircea M.', () => {
            expect(objetoPrueba.modificarNombre("Mircea M.")).to.be.equal('Mircea M.'); 
            });
        it('obtenerApellidos() = Bontoi', () => {
                expect(objetoPrueba.obtenerApellidos()).to.be.equal('Bontoi'); 
                });
        it('modificarApellidos() = Gonzales', () => {
                expect(objetoPrueba.modificarApellidos("Gonzalez")).to.be.equal('Gonzalez'); 
                });
        it('obtenerFechaNacimiento() = ', () => {
                    expect(objetoPrueba.obtenerFechaNacimiento()).to.be.equal('02/05/2000'); 
                    });
        it('modificarFechaNacimento() = 12/05/2000', () => {
                    fechaN = new Date('05/12/2001').toLocaleDateString('es-es', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })
                    expect(objetoPrueba.modificarFechaNacimento(fechaN)).to.be.equal('12/05/2001'); 
                    });});
    describe('Constructor Paciente -- modificarBascula', () => {
        var objetoPrueba=new Paciente("Mircea Mihai","Bontoi","02/05/2000");
        var basculaPrueba=new Bascula()
        it('modificarBascula() = ', () => {
            
            expect(objetoPrueba.modificarBascula(basculaPrueba)).to.be.a('object'); 
            });
        it('obtenerBascula() = ', () => {
            expect(objetoPrueba.obtenerBascula()).to.be.a('object'); 
            });
        })
    describe('Constructor Paciente -- calcularIMC', () => {
        var basculaPrueba=new Bascula()
        it('calcularIMC = ', () => {
            basculaPrueba.anotarPeso(78,1.80)
            expect(basculaPrueba.calcularIMC()).to.be.equal(24.07); 
                    });})




});

describe('Main Suite -- Pruebas Unitarias Profe',function(){
    var u1=new Paciente('Pedro','Ruiz del Castillo','02/16/1983');
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
        it('obtenerFechaNacimiento() = 02/16/1983',function(){
            const fn=u1.obtenerFechaNacimiento();
            expect(fn).to.be.equal('16/02/1983');
        });
    });
    
    describe('Clase Paciente -- Test Case 7' ,function(){
        it('obtenerEdad() = 39',function(){
            const resultado =u1.obtenerEdad();
            expect(resultado).to.be.equal(40);
        });
    });

    describe('Clase Paciente -- Test Case 8' ,function(){
        it('u2.obtenerFechaNacimiento() = 12/25/1995',function(){
            const u2=new Paciente('Jesús','Puente Colgante','12/25/1995');
            const fn=u2.obtenerFechaNacimiento();
            expect(fn).to.be.equal('25/12/1995');
        });
    });

    describe('Clase Paciente -- Test Case 9' ,function(){
        const u2=new Paciente('Almudena','Puente Colgante','08/20/1990');
        it('u2.obtenerFechaNacimiento() = 08/20/1990',function(){
            const fn=u2.obtenerFechaNacimiento();
            expect(fn).to.be.equal('20/08/1990');
        });

        it('u2.obtenerEdad() = 31',function(){
            const edad=u2.obtenerEdad();
            expect(edad).to.be.equal(32);
        });
    });
});

describe('Integration Suite -- Integración Paciente-Bascula',function(){
    describe('Paciente-Bascula - Test Case 1' ,function(){
        var objPaciente,objBascula;
        it('Consstuctor new Paciente()',function(){
            objPaciente=new Paciente('Pedro','Ruiz del Castillo','16/02/1983');
            const saludo=objPaciente.saludar();
            assert.isString(saludo);
        });
        it('Constructor new Bascula()',function(){
            objBascula=new Bascula();
            objBascula.anotarPeso(95.5,1.83);
            expect(objBascula.obtenerNumeroAnotaciones()).to.be.equal(1);
        });
        it('objPaciente.calcularIMC()',function(){
            expect(objPaciente.calcularIMC()).to.be.equal(-1);
        });
        it('objPaciente.modificarBascula(objBascula)',function(){
            objPaciente.modificarBascula(objBascula);
            expect(objPaciente.calcularIMC()).to.be.equal(28.52);
        });
    });
});
