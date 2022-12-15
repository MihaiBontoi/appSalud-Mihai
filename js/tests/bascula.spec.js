

const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const Bascula = require('bascula.js');


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
        it('calcularIMC() == 0',function(){
            var altura = 170
            var peso = 78
            assert.deepEqual(objetoPrueba.calcularIMC(peso,altura),27, "El IMC debe ser 27");
            });
    }); 
  
    
})















    
    