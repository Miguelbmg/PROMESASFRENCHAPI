/*const {nombre, edad, clave } = persona;

console.log( nombre );
console.log( edad );
console.log( clave );

const retornaPersona = ({ nombre, edad }) => {

    console.log(nombre, edad);
}

retornaPersona( persona );*/

/*const useContext = ({clave, nombre:NuevoNombre, edad, rango = 'Capitan'}) => {

    //console.log(nombre, edad, rango);

    return {
        nombreClave: NuevoNombre,
        anions: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const { nombreClave, anions, latlng: {lat, lng}} = useContext( persona );

console.log(nombreClave, anions);
console.log(lat, lng);*/

/*const personajes = ['goku', 'vegeta', 'trunks'];
const [ p1, p2, p3 ] = personajes;
console.log(p1);
console.log(p2);
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);*/

import { getHeroeById } from "./index.js";

const getHeroeByIdAsync = ( id ) => {
    
    return new Promise( (resolve, reject)) => {

        setTimeout( () => {
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            }
            else {
                reject( 'No se pudo encontrar el heroe');
            }
        }, 2000 )
    }
}

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.log)
