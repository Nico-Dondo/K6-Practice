import http from 'k6/http';
import { sleep, group, check } from 'k6';

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<250'],
        'group_duration{group:::Pagina principal}': ['p(95)<1000'],//Para e grupo principal se ponen 3::: y el nombre del grupo
        'group_duration{group:::Pagina principal::Archivos estaticos}': ['p(95)<1000'],//Para un subgrupo que esta dentro de un grupo luego del nombre se ponen 2:: y el nombre del subgrupo
    }
}
export default function () {
    group('Pagina principal', function () {
        let res = http.get('https://quickpizza.grafana.com/test.k6.io/');
        check(res, { 'status is 200': (r) => r.status === 200 });
        group('Archivos estaticos', function () {
            http.get('https://quickpizza.grafana.com/_app/immutable/assets/0.56795cc5.css'); //Peticion para otra url en este caso de Css
            http.get('https://quickpizza.grafana.com/_app/immutable/chunks/index.98b0eb20.js');// peticion para archivo de JS 
        })
    })
    group('News', function () {
        http.get('https://test.k6.io/news.php');
    })
    sleep(1)
}




