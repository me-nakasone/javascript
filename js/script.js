function saludo_final () {
    console.log("Gracias por elegirnos, ", nombre_cliente);
    console.log("Nos estaremos contactando a la brevedad.");
}

console.log("Bienvenido a Óptica Concalvo");

let nombre_cliente = prompt("Ingrese su nombre y apellido");
let telefono = prompt("Ingrese su número de teléfono");

let producto = prompt("¿Qué producto desea comprar? Anteojos recetados | Anteojos de sol");

    if (producto == "Anteojos recetados") {
        let graduacion_izq = prompt("Ingrese la graduación para el ojo izquierdo");
        let graduacion_der = prompt("Ingrese la graduación para el ojo derecho");
        let marca_recetado = prompt("Ingrese marca y modelo elegido");
        console.log("Usted eligió anteojos recetados de la marca ", marca_recetado);
        console.log("Graduación en el ojo izquierdo: ", graduacion_izq);
        console.log("Graduación en el ojo derecho: ", graduacion_der);
    }

    else if (producto == "Anteojos de sol") {
        let marca_sol = prompt("Ingrese marca y modelo elegido");
        console.log("Usted eligió anteojos de sol de la marca ", marca_sol);   
    }
    
    else {
        console.log("Debe ingresar una de las opciones. Vuelva a intentar.")
    }


saludo_final ();

