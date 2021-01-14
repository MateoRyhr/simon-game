//obtenemos los botones de html y los guardamos como constantes
const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const verde = document.getElementById('verde')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')

//esta clase Juego va a tener todas las funciones y la logica del juego
class Juego{
    constructor(){
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }

    inicializar() {
        //btnEmpezar.style.display = 'none'
        btnEmpezar.classList.add('hide')
        this.nivel = 8
        //aca creamos un objeto colores que lleva 4 propiedades, en estas se guardan los botones.
        //JS va a guardar las constantes que ya declaramos en estas propiedades sin que lo
        //especifiquemos ya que tienen el mismo nombre
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde 
        }
    }

    generarSecuencia(){
        this.secuencia = Array(10).fill(0).map(() => Math.floor(Math.random() * 4))
    }

    siguienteNivel(){
        this.iluminarSecuencia()
    }

    transformarNumeroAColor(num){
        switch (num){
            case 0:
                return 'celeste'
                //no hace falta break ya que al ejecutar el return sale del switch
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    iluminarSecuencia(){
        for(let i = 0; i < this.nivel; i++){
            const color = this.transformarNumeroAColor(this.secuencia[i])
            console.log(color)
            setTimeout(() => this.iluminarColor(color),1000 * i)
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add(`light`)
        setTimeout(() => this.apagarColor(color),350)
    }

    apagarColor(color){
        this.colores[color].classList.remove(`light`)
    }
}

function empezarJuego(){
    let juego = new Juego()
}