import http from 'k6/http';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js'; //libreria para importar aleatorios

export const options ={
    vus: 3,
    duration: '10s'
};

export default function (){
    const credentials ={
        username: 'test_ ' + randomString(6),// en las siguientes dos lineas se llama al aleatorio tanto para el nombre como para la clave en este caso
        password : 'secret_' + randomString(6)
    };
    console.log(credentials)
    http.post(
        'https://test-api.k6.io/user/register', //se utilizaesta url de k6
        JSON.stringify(credentials),
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }
    )
}
