
const obtenerPokemon = require("./library");

// Codigo funcion callback
function callback(res){
    console.log(res.forms[0].name);
    console.log("Lista de Hablidades: ");
    res.abilities.forEach( h => console.log(h.ability.name));
}


// Fin codigo
//charmander,pikachu
// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("pikachu",callback);
