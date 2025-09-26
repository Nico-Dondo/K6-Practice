import http from 'k6/http'
import { sleep } from 'k6'; //Determina una pausa se tiene que importar para que sea utilizable

//Se efectua una constante con 10 usuarios virtuales con una duracion de 10 segundos
export const options = {
    vus: 10,
    duration: '30s',
    cloud: {
        projectID: 4489222
    }
};

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
}