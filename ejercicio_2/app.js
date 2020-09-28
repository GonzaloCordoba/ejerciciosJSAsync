
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste().then(res => {
    console.log(res[0].setup);
    console.log(res[0].punchline);
});
