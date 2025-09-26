import http from 'k6/http'
import { sleep } from 'k6'; //Determina una pausa se tiene que importar para que sea utilizable

//Prueba de Spike genera picos altos de usuarios en poco tiempo
export const options = {
    stages: [
        {
            duration: '1m',
            target: 500

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

}