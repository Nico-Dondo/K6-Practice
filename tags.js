import http from 'k6/http';
export const options = {
    thresholds: {
        http_req_duration: ['p(95)<1000'],
        'http_req_duration{status:200}':['p(95)<1000'],// Valida los status 200 si estan bien
        'http_req_duration{status:201}':['p(95)<3000'],//Valida los status 201
    }

}
export default function () {
    http.get('https://run.mocky.io/v3/0e081e3a-c12e-4147-bac1-1ff575b12788');
    http.get('https://run.mocky.io/v3/d8e199c2-ddf6-4439-8fca-75f3b2b442b0?mocky-delay=2000ms');
}

//Ingresar a la pagina https://designer.mocky.io/ y poner para generar "new mock"
//seleccionar la respuesta para primera peticion de 200 => Genrerate http response y copiar en la primer http.get
// Para el segundo caso en este ejemplo usamos un 201 created y copiamos en el segundo get, dentro de la misma pagina se
// se pued eponer un retraso de hasta 60 segudos que es esta parte: ?mocky-delay=600ms