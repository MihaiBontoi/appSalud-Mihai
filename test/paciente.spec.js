const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const Bascula = require('../src/js/bascula.js');
const Paciente = require('../src/js/paciente.js');


describe('Main Suite -- Pruebas Unitarias Clase Paciente', () => {
    describe('Constructor Paciente -- Test ', () => {
        var objetoPrueba=new Paciente("Mircea Mihai","Bontoi","02/05/2000");
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
        it('modificarFechaNacimento() = 02/05/2000', () => {
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
        var objetoPrueba=new Paciente("Mircea Mihai","Bontoi","02/05/2000");
        var basculaPrueba=new Bascula()
        it('calcularIMC = ', () => {
            basculaPrueba.anotarPeso(78,180)
            expect(basculaPrueba.calcularIMC()).to.be.equal(24.1); 
                    });})




});
