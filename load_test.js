import http from 'k6/http'
import { sleep } from 'k6'; //Determina una pausa se tiene que importar para que sea utilizable

//Prueba de carga entre la ramp up y la ramp down tienen que tener el 10% del total de la pueba mas o menos
export const options = {
    stages: [
        {
            duration: '1m',
            target: 50

        },
        {
            duration: '2m',
            target: 20
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