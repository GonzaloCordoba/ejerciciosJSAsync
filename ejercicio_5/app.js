
const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function callback(res){
    res.results.forEach(persona => {
        console.log("Nombre y Apellido: "+persona.name.first+" "+persona.name.last);
        console.log("Genero: " + persona.gender);
        console.log("Pais: " + persona.location.country);
        console.log("Estado: " + persona.location.state);
        console.log("Ciudad: " + persona.location.city);
        console.log("Calle: " + persona.location.street.name + " nro: " + persona.location.street.number);
        console.log("Codigo postal: "+ persona.location.postcode);
        console.log("Email: " + persona.email);
        console.log("Nombre de usuario: " + persona.login.username);
        console.log("Contraseña: " + persona.login.password);
    })
    //console.log("Nombre y Apellido: " + res.name.first + " " + res.name.last);
}


// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(callback);
