alert ("Bienvenidos a EmeLashes! Les recordamos que solo estamos tomando turnos para el dia siguiente.  A continuacion, les pediremos una serie de datos para concretar su turno.")


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


const actualizado = turnos.map((pp) => {
    return {
        precio: pp.precio * 1.25
    }
})

console.log(actualizado)


let nombreCliente = prompt ("Ingrese su nombre");
let servicioRequerido = prompt ('Cual horario queres? elegi 1 para 9:00 hs, 2 para 10:30hs , 3 para 12:00 hs, 4 para 13:30 hs')


function alertTurnos() {
    if (servicioRequerido == 1) {
    alert ('Felicitaciones ' + nombreCliente + ' tu turno es manana en el horario de ' + ' ' +turno1.horario)
    }else if (servicioRequerido == 2){
    alert ('Felicitaciones ' + nombreCliente + ' tu turno es manana en el horario de ' + ' ' + turno2.horario)
    }else if (servicioRequerido == 3){
    alert ('Felicitaciones ' + nombreCliente + ' tu turno es manana en el horario de ' + ' ' + turno3.horario) 
    }else if (servicioRequerido == 4){
    alert ('Felicitaciones ' + nombreCliente + ' tu turno es manana en el horario de ' + ' ' + turno4.horario) 
    }else if (servicioRequerido == 5){
    alert ('Felicitaciones ' + nombreCliente + ' tu turno es manana en el horario de ' + ' ' + turno5.horario) 
    }
}


alertTurnos()


