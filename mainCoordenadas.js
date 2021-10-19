"use strict";
exports.__esModule = true;
var coordenadas_1 = require("./coordenadas");
var triangulo_1 = require("./triangulo");
var punto1 = new coordenadas_1.Punto(2, 2);
var punto2 = new coordenadas_1.Punto(4, 2);
var punto3 = new coordenadas_1.Punto(6, 3);
var triangulo1 = new triangulo_1.Triangulo(punto1, punto2, punto3);
// console.log(punto1.distanciaAlOrigen())
// console.log(punto1.calcularDistancia(punto2))
// console.log(punto1.calcularCuadrante())
punto1.calcularMascercano([punto2, punto3]);
// console.log(triangulo1.calcularLongitudLados())
