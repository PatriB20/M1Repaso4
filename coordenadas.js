"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setX = function (newX) {
        this.x = newX;
    };
    Punto.prototype.setY = function (newY) {
        this.y = newY;
    };
    Punto.prototype.toString = function () {
        var xstring = this.x.toString();
        var ystring = this.y.toString();
        return "(" + xstring + "," + ystring + ")";
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var sumacuadrado = Math.pow(this.x, 2) + Math.pow(this.y, 2);
        var origen = Math.sqrt(sumacuadrado);
        return origen;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var a = this.x - otroPunto.getX();
        var b = this.y - otroPunto.getY();
        var suma = Math.pow(a, 2) + Math.pow(b, 2);
        var distancia = Math.sqrt(suma);
        return distancia;
    };
    Punto.prototype.calcularCuadrante = function () {
        if (this.x == 0 && this.y == 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y >= 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else if (this.x >= 0 && this.y > 0) {
            return 4;
        }
    };
    Punto.prototype.calcularMascercano = function (puntos) {
        for (var i = 0; i < puntos.length; i++) {
            var puntoCercano = Math.min(this.calcularDistancia(puntos[i]));
            console.log(puntoCercano);
        }
    };
    return Punto;
}());
exports.Punto = Punto;
