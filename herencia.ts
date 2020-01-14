class Empleado{
    nombre : string
    edad : number
    calcularSueldo(){
    }
}

class Cocinero extends Empleado{
    // sobreescritura de un metodo
    calcularSueldo(){
        return 2500
    }
}

class Mesero extends Empleado{
    // sobreescritura de un metodo
    calcularSueldo(){
        return 1200
    }
}

class Llamador extends Empleado{
    // sobreescritura de un metodo
    calcularSueldo(){
        return 1000
    }
}

let imprimirSueldo = (empleado : Empleado) => {
    console.log(`El sueldo es: ${empleado.calcularSueldo()}`)
}

let mainH = () => {
    let mozo = new Mesero()
    let cocinero = new Cocinero()
    let llamador = new Llamador()

    imprimirSueldo(mozo)
}
mainH()