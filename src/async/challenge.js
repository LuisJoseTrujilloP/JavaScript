const fetchData = require ('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {

        const data = await fetchData (url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimention);

    } catch (error) {
        console.error(error);
    }
};

console.log ('Before/');
anotherFunction(API);
console.log ('After/');



// NOTAS VENTAJAS Y DESVENTAJAS

                                        // VENTAJA  

// PODEMOS USAR TRY CATCH PARA TRABAJAR LOS ERRORES, 

// MAS FACILES DE LEER, PODEMOS VER CLARAMENTE LOS LLAMADOS, FACIL ENTENDIMIENTO


                                    // DESVENTAJAS  


// TENEMOS QUE ESPERAR POR CADA UNO DE LOS LLAMADOS, ASI QUE PARA PEDIR A 1 HAY QUE ESPERAR A TODOS LOS ANTERIORES

// TAMBIEN ES INCOMPATIBLE CON LOS NAVEGADORES MAS ANTIGUOS
