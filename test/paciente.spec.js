const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const Paciente = require('../src/js/paciente.js');


describe('Main Suite -- Pruebas Unitarias Clase Paciente', () => {
    describe('Constructor Paciente -- Test ', () => {
        var objetoPrueba=new Paciente("Mircea Mihai","Bontoi");
        it('saludar() = string', () => {
            expect(objetoPrueba.saludar()).to.be.a('string'); 
            });
        it('obtenerNombre() = Mircea Mihai', () => {
            expect(objetoPrueba.obtenerNombre()).to.be.equal('Mircea Mihai'); 
            });
        it('modificarNombre() = Mircea M.', () => {
            expect(objetoPrueba.modificarNombre("Mircea M.")).to.be.equal('Mircea M.'); 
            });
    });
});
