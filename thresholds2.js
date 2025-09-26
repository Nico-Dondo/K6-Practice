import http from 'k6/http'; // Linea para importar http y que pueda ser llamada en la funcion de abajo
import { check } from 'k6';// Importar esta linea para poder realizar los checks
import { sleep } from 'k6';
import exec from 'k6/execution';;

export const options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<400','max<2000'],// el percentil 95 tiene que estar debajo de ese valor de milisegundos y el segundo parametro es que tiene que tener un maxio de dos segundos
        http_req_failed :['rate<0.01'],// el porcentaje de error en este caso tiene que ser menor al 1%
        http_req_sending :['p(95)<600'],// el vaor en el percentil 95 es inferior a 600 milisegundos
        http_reqs: ['count>40'],// para contar que en este caso las peticiones http sean mayor que 40
        http_reqs: ['rate>4'],// rango de mas de 4 peticiones por segundo para ejecutar esta prueba
        checks: ['rate> 0.40']
    }
};

export default function () {
    const res = http.get('https://test.k6.io');
    console.log(exec.scenario.interarinIntest)
    console.log(res.status);

    check(res, {
        'status code 200': (r) => r.status === 200,// el === es para comparar si la respuesta es igual al code 200
        'pagina de inicio': (r) => r.body.includes('Collection of simple web-pages') // en este caso es para ver si la pagina contiene esta cadena de texto
    }
    );
    sleep(2);
}
