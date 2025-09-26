import http from 'k6/http'
import { sleep } from 'k6'; //Determina una pausa se tiene que importar para que sea utilizable

//Prueba de humo un solo usuario durnte 30 segundos para ver que funcione
export const options ={
vus: 10,
duration: '10s',
};

export default function (){
    http.get('https://test.k6.io');
    sleep(1);
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
}