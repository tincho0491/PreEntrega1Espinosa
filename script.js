alert("Bienvenido a la sala de espera de la clínica")

let tiempoDeEspera
let flag = true

if (flag) {
    while (1) {
        let turnosRegistrados = prompt("¿Cuántos turnos se han registrado hasta el momento?")
        if (isNaN(turnosRegistrados) || turnosRegistrados < 0) {
            alert("Por favor, ingrese un número válido (mayor o igual a 0).")
        }
        else {
            tiempoDeEspera = turnosRegistrados * 15
            alert("Se han registrado " + turnosRegistrados + " turnos. La espera estimada es de " + tiempoDeEspera + " minutos")
            flag = false
            break
        }
    }
}

//-----------JUEGO PIEDRA PAPEL O TIJERA----------------

let opcion = prompt("Desea jugar un juego mientras espera? (S/N)").toUpperCase()
let puntajeUsuario
let puntajeMaquina

while (opcion == "S") {
    alert("¡Genial! Vamos a jugar a piedra, papel o tijera. Quien primero gane 3 partidas gana el juego.")
    puntajeUsuario = 0
    puntajeMaquina = 0

    while (puntajeUsuario < 3 && puntajeMaquina < 3) {
        let eleccionUsuario = prompt("¿Piedra, papel o tijera? (P/S/T)").toUpperCase()
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
        alert("Elegiste " + eleccionUsuario + " y la máquina eligió " + eleccionMaquina + ". " + resultado)
        puntaje(resultado)
        alert("El puntaje es: " + puntajeUsuario + " - " + puntajeMaquina)
    }
    comprobarGanador()
    opcion = prompt("¿Desea volver a jugar? (S/N)").toUpperCase()

    if (opcion == "N") {
        alert("¡Gracias por jugar!")
    }
}
while (opcion != "S" && opcion != "N") {
    alert("Opción inválida. Por favor, ingrese S o N para jugar.")
    opcion = prompt("Presione S para jugar o N en caso contrario").toUpperCase()
}

//Reloj Temporizador

horas = new Contador()
horas.setCuentaInicial(Math.floor(tiempoEnMinutos / 60))
minutos = new Contador()
minutos.setCuentaInicial(tiempoEnMinutos % 60)
segundos = new Contador(0, 1, 60, 0)
Temporizador()



//DESARROLLO DE FUNCIONES

function Temporizador() {
    let intervalo = setInterval(function () {
        segundos.decrementar()
        if (segundos.getCuentaActual() == 00) {
            minutos.decrementar()
            segundos.setCuentaActual(59)
        }
        if (minutos.getCuentaActual() == 00) {
            horas.decrementar()
            minutos.setCuentaActual(59)
        }
        let tiempo = horas.getCuentaActual() + ":" + minutos.getCuentaActual() + ":" + segundos.getCuentaActual()
        console.log(tiempo)
        if (segundos.getCuentaActual() == 00 && minutos.getCuentaActual() == 00 && horas.getCuentaActual() == 00) {
            clearInterval(intervalo)
            alert("¡El tiempo de espera ha terminado!")
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


//Clase Contador

class Contador {
    constructor(cuentaInicial, paso, maximo, minimo) {
        this.cuentaInicial = cuentaInicial
        this.cuentaActual = cuentaInicial
        this.paso = paso
        this.maximo = maximo
        this.minimo = minimo
    }
    constructor() {
        this.cuentaInicial = 0
        this.cuentaActual = 0
        this.paso = 1
        this.maximo = 100
        this.minimo = 0
    }

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
        this.contador -= this.paso
        if (this.contador < this.minimo) {
            this.contador = this.minimo
        }
    }
    decrementar(n) {
        this.contador -= n
        if (this.contador < this.minimo) {
            this.contador = this.minimo
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
