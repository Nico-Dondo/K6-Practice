import http from 'k6/http'
import {check} from 'k6';

export default function () {
    let res = http.get('http://localhost:8000/public/crocodiles/');
    console.log(res); // este se puede comentar o no
    // para esta parte al sacar el console log se puede correr el comando k6 run --http-debug http-get.js 
    // con ese comando se ve cual es request and response por la consola.
    // tambien para ver el contenido completo del json se puede poner  k6 run --http-debug="full" http-get.js (recordar que http-get.js es el nombre de este archivo)
    res = http.get('http://localhost:8000/public/crocodiles/7/');
    check(res, {
        'status is 200': (r) => r.status === 200, //linea para que la respuesta sea igual a 200
        'Crocodile is Sobek':(r) => r.json().name ==='Sobek', //linea para verificar que trae lo que le pedimos
        'Correct day of birth is': (r) => r.json().date_of_birth === '1854-09-02'
    })
}