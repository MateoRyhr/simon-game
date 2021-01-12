const btnEmpezar = document.getElementById
('btnEmpezar')
const celeste = document.getElementById('celeste')
const verde = document.getElementById('verde')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')

class Juego{
    constructor(){
        this.inicializar()
    }

    inicializar() {
        //btnEmpezar.style.display = 'none'
        btnEmpezar.classList.add('hide')
    }
}

function empezarJuego(){
    let juego = new Juego()
}