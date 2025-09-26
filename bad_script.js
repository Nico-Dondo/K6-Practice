import http from 'k6/http';
import { sleep } from 'k6';

export default function(){
    http.get('https://self-signed.badssl.com/');
    sleep(1)
}
// k6 run .\bad_script.js --insecure-skip-tls-verify
// Se corre este comando para saltear lo que este mal en la verificacion de la autenticacion de la pagina 