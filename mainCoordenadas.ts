import {Punto} from "./coordenadas"
import {Triangulo} from "./triangulo"

let punto1: Punto = new Punto(2,2)
let punto2: Punto = new Punto(4,2)
let punto3: Punto = new Punto(6,3)

let triangulo1: Triangulo = new Triangulo(punto1,punto2,punto3)
// console.log(punto1.distanciaAlOrigen())
// console.log(punto1.calcularDistancia(punto2))
// console.log(punto1.calcularCuadrante())
punto1.calcularMascercano([punto2,punto3])
// console.log(triangulo1.calcularLongitudLados())
