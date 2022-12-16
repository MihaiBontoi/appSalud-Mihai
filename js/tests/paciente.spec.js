const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const Paciente = require('../paciente.js');


describe('Main Suite -- Pruebas Unitarias Clase Paciente', () => {
    describe('Constructor Paciente -- Test ', () => {
        const objetoPrueba=new Bascula();
        it('saludar() = string', () => {
            expect(objetoPrueba.saludar()).to.be.a('string'); 
            });
    })


})