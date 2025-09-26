import http from 'k6/http';
import { sleep, group } from 'k6';// se tiene que importar group

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<250']
    }
}
export default function () {

    group('Main Page', function(){
        
    });
    let res = http.get('https://test.k6.io'); // Pedido a la pagina principal de K6
    check(res, { 'status is 200': (r) => r.status === 200 });

    //Static Assets
    http.get('https://test.k6.io/static/css/site.css');
    http.get('https://test.k6.io/static/js/prisms.js');

    group ('News Page', function (){

    })

    sleep(1)
}

