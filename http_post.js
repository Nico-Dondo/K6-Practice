import http from 'k6/http';
import { check } from 'k6';

export default function(){

    const body = JSON.stringify({ //Json.stringify crea el objeto a json y lo parsea para que se pueda interpretar
        username: "Nico",// con muchos usuarios creados al mismo tiempo se puede poner: username: "Nico" + Date.now
        password : '123456',//Clave numerica entre comas par aque no lo tome como un number y si como un string

    });

    const params = { // Se tiene que agregar el content-type
        headers: {
            'Content-Type': 'application/json'
        }
    };
    http.post('http://localhost:8000/user/register/', body, params);// metodo para poder crear un usuario

}