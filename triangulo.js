"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(punto1, punto2, punto3) {
        this.vertice1 = punto1;
        this.vertice2 = punto2;
        this.vertice3 = punto3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var longitudlados = new Array();
        var lado1 = this.vertice1.calcularDistancia(this.vertice2);
        var lado2 = this.vertice1.calcularDistancia(this.vertice3);
        var lado3 = this.vertice1.calcularDistancia(this.vertice3);
        return longitudlados = [lado1, lado2, lado3];
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
