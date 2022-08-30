

// input de datos

let nombreCliente = prompt('Cual es tu nombre?');
let anchoProyecto = parseInt(prompt('Cual es el ancho de tu proyecto?'));
let largoProyecto = parseInt(prompt('Cual es el Largo de tu proyecto?'));

function seleccionarmaquina(){
let medidaMayor;
if (anchoProyecto > largoProyecto) {
    medidaMayor = anchoProyecto*1.1; //se le añade una margen de seguridad de 10%
}else {
    medidaMayor = largoProyecto*1.1;//se le añade una margen de seguridad de 10%
}

let modeloMaquina;

if (medidaMayor < 60) {
    modeloMaquina="RT-600";
}else if (medidaMayor<100) {
    modeloMaquina="RT-1000"
}else if (medidaMayor<150) {
    modeloMaquina="RT-1500"
}else {
    modeloMaquina="para fabricar a medida"
}

alert(`Gracias ${nombreCliente}; el modelo requerido para tu proyecto es ${modeloMaquina}`); 
}

seleccionarmaquina();
