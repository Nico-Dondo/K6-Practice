import http from 'k6/http'
import { sleep } from 'k6'; //Determina una pausa se tiene que importar para que sea utilizable

//Prueba de Stress es aumentar la cantidad de users (por ejemplo forzando un incremento en una detrminada duracion que no es la media normal)
export const options = {
    stages: [
        {
            duration: '1m',
            target: 100

        },
        {
            duration: '2m',
            target: 40
        },
        {
            duration: '1m',
            target: 0
        }
    ],
   
    

};

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
}