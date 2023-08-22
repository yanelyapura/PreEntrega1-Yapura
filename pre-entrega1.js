function auntenticarUsuario(usuario, contraseña) {
    if ((usuario == 'Yanel') && (contraseña == '1234')) {
        return true;
    } else {
        alert('Las credenciales no son válidas');
        return false;
    }
}

function darBuenosDias() {
    let usuario = prompt('Cual es tu nombre');
    alert('Bienvenido/a ' + usuario);
}

function calcularCuotas(monto, cuotas, tna) {
    // Calculamos la tasa de interés mensual
    const tasaMensual = tna / 12 / 100;

    // Calculamos el importe de cada cuota usando la fórmula de cuota fija
    const cuotaFija = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -cuotas));

    return cuotaFija.toFixed(2); // Devolvemos el importe de cada cuota con dos decimales
}

function necesitaPrestamo() {
    let prestamo = prompt('Desea sacar el prestamo? 1-si/2-no');

    if (prestamo == '1') {
        return true;
    } else if (prestamo == '2') {
        return false;
    } else {
        alert('Opción no válida');
    }
}

function solicitaPrestamo() {
    let montoFinal = parseFloat(prompt('Ingrese el monto total de su prestamo'));
    let cuotas = parseFloat(prompt('Ingresa cantidad de cuotas'));
    let montocuotas = calcularCuotas(montoFinal,cuotas,tna);
    console.log('Usted acaba de solicitar un prestamo por $' + montoFinal + ' en ' + cuotas + ' cuotas. El monto de cada cuota es de $' + montocuotas)
}


const tna = 148

let usuario, contrasenia;

do {
    usuario = prompt('Ingresa nombre de usuario');
    contrasenia = prompt('Ingresa contraseña');
} while (!auntenticarUsuario(usuario, contrasenia));

darBuenosDias();

while (necesitaPrestamo()) {
    solicitaPrestamo();
}

alert('Gracias por usar nuestro servicio.');
