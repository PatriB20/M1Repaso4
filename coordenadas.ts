export class Punto{
    private x: number;
    private y: number;

    constructor(x:number,y:number)
    {
        this.x=x;
        this.y=y;
    }
    public getX():number
    {
        return this.x
    }
    public getY():number
    {
        return this.y
    }
    public setX(newX:number)
    {
        this.x= newX
    }
    public setY(newY:number)
    {
        this.y=newY
    }
    public toString():string
    {
        let xstring =this.x
        let ystring = this.y
        return "("+xstring+","+ystring+")"
    }
    public distanciaAlOrigen():number
    {   
        let sumacuadrado=Math.pow(this.x,2)+Math.pow(this.y,2)
        let origen:number = Math.sqrt(sumacuadrado)
       return origen
    }
    public calcularDistancia(otroPunto:Punto):number
    {
        
        let a:number = this.x - otroPunto.getX()
        let b: number= this.y - otroPunto.getY()
        let suma:number =Math.pow(a,2)+Math.pow(b,2)
        let distancia: number = Math.sqrt(suma)
        return distancia
    }
    public calcularCuadrante():number
    {
        if (this.x==0 && this.y==0)
        {return 0}
        else if(this.x>0 && this.y>0)
        {return 1}
        else if(this.x<0 && this.y>=0)
        {return 2}
        else if(this.x<0 && this.y<0)
        {return 3}
        else if(this.x>=0 && this.y>0)
        {return 4}
    }
    public calcularMascercano(puntos:Punto[])
    {  let arrayp= []
        for (let i=0;i<puntos.length;i++)
       {
           let puntoCercano = this.calcularDistancia(puntos[i])
           arrayp.push(puntoCercano)
       }
       let minimo=arrayp[0]
       for(let i=0;i<arrayp.length;i++)
       { if (minimo > arrayp[i])
        {
            minimo = arrayp[i]
        }

       }
       console.log(minimo)
    }
        
 }



