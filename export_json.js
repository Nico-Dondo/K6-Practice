import http from 'k6/http';
import { sleep } from 'k6';

export default function(){
    http.get('https://test.k6.io');
    sleep(1)
}
// se corre el comando por consola: k6 run (nombre archivo) --summay-export=result.json
// Al correr esta prueba se crea un archivo result.json y ahi estan todos los resultados en ese formato
// otro metodo para correr es  k6 run (nombre del archvo) --out json=(nombre del archivo que se va a crear).json
