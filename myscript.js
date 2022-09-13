
let selectTag = document.getElementById("selectorHorarios")

class hhTurnos  {
    constructor (servicio, lashista, horario, precio) {
    this.servicio = servicio;
    this.lashista= lashista;
    this.horario= horario;
    this.precio= precio
    }
}


const turno1 = new hhTurnos ("extensiones", "Mariana", "9:00", "1500");
const turno2 = new hhTurnos ("extensiones", "Mariana", "10:30", "1500");
const turno3 = new hhTurnos ("extensiones", "Mariana", "12:00", "1500");
const turno4 = new hhTurnos ("extensiones", "Mariana", "13:30", "1500");
const turno5 = new hhTurnos ("extensiones", "Mariana", "15:00", "1500");


const turnos = [] 
turnos.push (turno1);
turnos.push (turno2);
turnos.push (turno3);
turnos.push (turno4);
turnos.push (turno5);

turnos.forEach(hhTurnos=>{
    const option = document.createElement ('option')
    option.innerText = `${hhTurnos.horario}`
    selectTag.append(option)

})

const actualizado = turnos.map((pp) => {
    return {
        precio: pp.precio * 1.25
    }
})

console.log(actualizado)



let nombreCliente = document.getElementById("nombreCliente")

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

