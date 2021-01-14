//obtenemos los botones de html y los guardamos como constantes
const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const verde = document.getElementById('verde')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const ULTIMO_NIVEL = 10

//esta clase Juego va a tener todas las funciones y la logica del juego
class Juego{
    constructor(){
        this.inicializar = this.inicializar.bind(this)
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel,500)
    }

    inicializar() {
        this.siguienteNivel = this.siguienteNivel.bind(this)//de esta el 'this' de la funcion siempre sera 'Juego', si no al usar la funcion con 'setTimeout' cambia el 'this' a 'Window' porque es un callback
        this.elegirColor = this.elegirColor.bind(this)//de esta forma siempre que llamemos a 'elegirColor' su 'this' hara referencia a 'Juego'
        this.toggleBtnEmpezar()
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

    toggleBtnEmpezar(){
        if(btnEmpezar.classList.contains('hide')) btnEmpezar.classList.remove('hide')
        else btnEmpezar.classList.add('hide')   
    }

    generarSecuencia(){
        this.secuencia = Array(ULTIMO_NIVEL).fill(0).map(() => Math.floor(Math.random() * 4))
    }

    siguienteNivel(){
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
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

    transformarColorANumero(color){
        switch (color){
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }

    iluminarSecuencia(){
        for(let i = 0; i < this.nivel; i++){
            const color = this.transformarNumeroAColor(this.secuencia[i])
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

    agregarEventosClick(){
        //los eventos son asincronos, cuando se cumplen se mandan a la cola de tareas
                                                    //en addEventListener 'this' refiere a la fuente del evento
                                                    //por eso con bind() especificamos que 'this' se refiera a 'Juego'
        this.colores.celeste.addEventListener('click',this.elegirColor)
        this.colores.verde.addEventListener('click',this.elegirColor)
        this.colores.violeta.addEventListener('click',this.elegirColor)
        this.colores.naranja.addEventListener('click',this.elegirColor)
    }

    eliminarEventosClick(){
        this.colores.celeste.removeEventListener('click',this.elegirColor)
        this.colores.verde.removeEventListener('click',this.elegirColor)
        this.colores.violeta.removeEventListener('click',this.elegirColor)
        this.colores.naranja.removeEventListener('click',this.elegirColor)
    }

    elegirColor(e){
        //el evento click tiene un atributo 'target' que nos dice donde ocurrió el evento
        const nombreColor = e.target.dataset.color
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        //si el color elegido es correcto
        if(numeroColor === this.secuencia[this.subnivel]){
           this.subnivel++
           console.log("Ahora subnivel es: " + this.subnivel)
           //Si se completa el nivel actual
           if(this.subnivel === this.nivel){
               this.nivel++
               this.eliminarEventosClick()
               if(this.nivel === (ULTIMO_NIVEL + 1)){
                this.ganar()
               } else {
                    setTimeout(this.siguienteNivel,1500)
               }
            }
        } else{
            this.perder()
        }
    }

    ganar(){
        swal('Ganaste','','success')//swal devuelve una promesa
            .then(this.inicializar)
    }

    perder(){
        swal('Perdiste','','error')
            .then(() => {
                this.eliminarEventosClick()
                this.inicializar()
            })
    }
}

function empezarJuego(){
    let juego = new Juego()
}