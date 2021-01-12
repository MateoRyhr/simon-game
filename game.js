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
    }

    inicializar() {
        //btnEmpezar.style.display = 'none'
        btnEmpezar.classList.add('hide')
        this.nivel = 1
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
        this.secuencia = Array(10).fill(0).map(() => Math.floor(Math.random * 4))
    }
}

function empezarJuego(){
    let juego = new Juego()
}