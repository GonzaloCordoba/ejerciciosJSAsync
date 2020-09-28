
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("pikachu").then(res =>{
    console.log(res.forms[0].name);
    console.log("Lista de Hablidades: ");
    res.abilities.forEach( h => console.log(h.ability.name));
});
