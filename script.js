alert("Bienvenido a la sala de espera de la clínica")

let tiempoDeEspera

while (1) {
    let turnosRegistrados = prompt("¿Cuántos turnos se han registrado hasta el momento?")
    if (isNaN(turnosRegistrados) || turnosRegistrados < 0) {
        alert("Por favor, ingrese un número válido (mayor o igual a 0).")
    }
    else {
        tiempoDeEspera = turnosRegistrados * 15
        alert("Se han registrado " + turnosRegistrados + " turnos. La espera estimada es de " + tiempoDeEspera + " minutos")
        break
    }
}

//-----------JUEGO PIEDRA PAPEL O TIJERA----------------
let puntajeUsuario
let puntajeMaquina

while (1) {
    let opcion = prompt("Desea jugar un juego mientras espera? (S/N)").toUpperCase()
    while (opcion == "S") {
        alert("¡Genial! Vamos a jugar a piedra, papel o tijera. Quien primero gane 3 partidas gana el juego.")
        puntajeUsuario = 0
        puntajeMaquina = 0

        while (puntajeUsuario < 3 && puntajeMaquina < 3) {
            let eleccionUsuario = prompt("¿Piedra, papel o tijera? (P/S/T)").toUpperCase()
            while (eleccionUsuario != "P" && eleccionUsuario != "S" && eleccionUsuario != "T") {
                alert("Opción inválida. Por favor, ingrese P, S o T para jugar.")
                eleccionUsuario = prompt("¿Piedra, papel o tijera? (P/S/T)").toUpperCase()
            }
            let eleccionMaquinaRandom = Math.floor(Math.random() * 3)
            let eleccionMaquina
            switch (eleccionMaquinaRandom) {
                case 0:
                    eleccionMaquina = "P"
                    break
                case 1:
                    eleccionMaquina = "T"
                    break
                case 2:
                    eleccionMaquina = "S"
                    break
            }
            let resultado = comprobarRonda(eleccionUsuario, eleccionMaquina)
            puntaje(resultado)
            alert("Elegiste " + eleccionUsuario + " y la máquina eligió " + eleccionMaquina + ". " + resultado + "\n\nEl puntaje es: " + puntajeUsuario + " - " + puntajeMaquina)

        }
        comprobarGanador()
        opcion = prompt("¿Desea volver a jugar? (S/N)").toUpperCase()
    }
    if (opcion == "N") {
        alert("¡Gracias por jugar!")
        break
    }
    else if (opcion != "S" && opcion != "N") {
        alert("Opción inválida. Por favor, ingrese S o N para jugar.")
    }
}




//Reloj Temporizador

//Clase Contador

class Contador {
    constructor(cuentaInicial, paso, maximo, minimo) {
        this.cuentaInicial = cuentaInicial
        this.cuentaActual = cuentaInicial
        this.paso = paso
        this.maximo = maximo
        this.minimo = minimo
    }

    //JavaScript no permite mas de un constructor por clase
    /* constructor() {
        this.cuentaInicial = 0
        this.cuentaActual = 0
        this.paso = 1
        this.maximo = 100
        this.minimo = 0
    } */

    incrementar() {
        this.cuentaActual += this.paso
        if (this.cuentaActual > this.maximo) {
            this.cuentaActual = this.maximo
        }
    }
    incrementar(n) {
        this.cuentaActual += n
        if (this.cuentaActual > this.maximo) {
            this.cuentaActual = this.maximo
        }
    }
    decrementar() {
        this.cuentaActual -= this.paso
        if (this.CuentaActual < this.minimo) {
            this.CuentaActual = this.minimo
        }
    }
    decrementar(n) {
        this.cuentaActual -= n
        if (this.CuentaActual < this.minimo) {
            this.CuentaActual = this.minimo
        }
    }

    //probando funcion flecha
    reset = () => {
        this.cuentaActual = this.cuentaInicial
    }

    setCuentaInicial = (n) => {
        this.cuentaInicial = n
    }

    setCuentaActual = (n) => {
        this.cuentaActual = n
    }

    setPaso = (n) => {
        this.paso = n
    }

    setMaximo = (n) => {
        this.maximo = n
    }

    setMinimo = (n) => {
        this.minimo = n
    }

    getCuentaInicial = () => {
        return this.cuentaInicial
    }

    getCuentaActual = () => {
        return this.cuentaActual
    }

    getPaso = () => {
        return this.paso
    }

    getMaximo = () => {
        return this.maximo
    }

    getMinimo = () => {
        return this.minimo
    }
}


/* 
horas = new Contador(0, 1, 24, 0)
horas.setCuentaActual(Math.floor(2 / 60))
minutos = new Contador(0, 1, 60, 0)
minutos.setCuentaActual(2 % 60)
segundos = new Contador(0, 1, 60, 0)
Temporizador()



//DESARROLLO DE FUNCIONES

function Temporizador() {
    let intervalo = setInterval(function () {
        if (segundos.getCuentaActual() == 00 && minutos.getCuentaActual() == 00 && horas.getCuentaActual() == 00) {
            clearInterval(intervalo)
            alert("¡El tiempo de espera ha terminado!")
        }
        else if (segundos.getCuentaActual() == 00) {
            if (minutos.getCuentaActual() == 00) {
                horas.decrementar(1)
                minutos.setCuentaActual(60)
            }
            minutos.decrementar(1)
            segundos.setCuentaActual(60)
        }

        segundos.decrementar(1)
        let tiempo = horas.getCuentaActual() + ":" + minutos.getCuentaActual() + ":" + segundos.getCuentaActual()
        console.log(tiempo)

    }, 100)
} */

contador1 = new Contador(9, 1, 10, 0)
contador1.decrementar()
cronometro()
//crear funcion cronometro que incremente hasta 10 cada un segundo

function cronometro() {
    let intervalo = setInterval(function () {
        if (contador1.getCuentaActual() == 0) {
            clearInterval(intervalo)
        }
        else {
            contador1.decrementar()
            console.log([contador1.getCuentaActual()])
        }
    }, 1000)
}



function comprobarRonda(Usuario, Maquina) {
    let resultado
    if (Usuario == "P" && Maquina == "S") {
        resultado = "Perdiste"
    }
    else if (Usuario == "P" && Maquina == "T") {
        resultado = "Ganaste"
    }
    else if (Usuario == "S" && Maquina == "P") {
        resultado = "Ganaste"
    }
    else if (Usuario == "S" && Maquina == "T") {
        resultado = "Perdiste"
    }
    else if (Usuario == "T" && Maquina == "P") {
        resultado = "Perdiste"
    }
    else if (Usuario == "T" && Maquina == "S") {
        resultado = "Ganaste"
    }
    else {
        resultado = "Empate"
    }
    return resultado
}

function puntaje(resultado) {
    if (resultado == "Ganaste") {
        puntajeUsuario += 1
    }
    else if (resultado == "Perdiste") {
        puntajeMaquina += 1
    }
}

function comprobarGanador() {
    if (puntajeUsuario == 3) {
        alert("¡Ganaste el juego!")
    }
    else if (puntajeMaquina == 3) {
        alert("¡Perdiste el juego!")
    }
}
