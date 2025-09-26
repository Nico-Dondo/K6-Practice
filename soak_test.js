import http from 'k6/http'
import { sleep } from 'k6'; //Determina una pausa se tiene que importar para que sea utilizable

//Prueba de carga entre la ramp up y la ramp down tienen que tener el 10% del total de la pueba mas o menos
export const options = {
    stages: [
        {
            duration: '5m',
            target: 1000

        },
        {
            duration: '12h',
            target: 1000
        },
        {
            duration: '5m',
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