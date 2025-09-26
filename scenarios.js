import http from 'k6/http'; // Linea para importar http y que pueda ser llamada en la funcion de abajo
import { check } from 'k6';// Importar esta linea para poder realizar los checks

export default function () {
    const res = http.get('https://test.k6.io');
    console.log(res.status);
    console.log(res.body)
    check(res, {
        'status code 200': (r) => r.status === 200,// el === es para comparar si la respuesta es igual al code 200
        'pagina de inicio': (r) => r.body.includes('Collection of simple web-pages') // en este caso es para ver si la pagina contiene esta cadena de texto
    }
    )
}
