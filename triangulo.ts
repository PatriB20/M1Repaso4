import {Punto} from "./coordenadas"
export class Triangulo {
    public vertice1:Punto
    public vertice2:Punto 
    public vertice3:Punto
    constructor(punto1:Punto,punto2:Punto,punto3:Punto)
    {
        this.vertice1=punto1
        this.vertice2=punto2
        this.vertice3=punto3
    }
    calcularLongitudLados():number[]
    {   let longitudlados= new Array()
        let lado1= this.vertice1.calcularDistancia(this.vertice2)
        let lado2=this.vertice1.calcularDistancia(this.vertice3)
        let lado3=this.vertice1.calcularDistancia(this.vertice3)
        return longitudlados=[lado1,lado2,lado3]
    }
}