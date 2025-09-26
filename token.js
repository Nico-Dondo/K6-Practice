import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
    const credentials = {
        username: 'test_' + Date.now(),
        password: 'secret_' + Date.now(),
    }
    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // 1. Petición para registrar un nuevo usuario
    let res = http.post(
        'http://localhost:8000/user/register/',
        JSON.stringify(credentials),
        params
    );
    check(res, { 'Register: status is 201 Created': (r) => r.status === 201 });
    sleep(1);

    // 2. Petición para iniciar sesión con el usuario recién creado
    res = http.post(
        'http://localhost:8000/auth/token/login/',
        JSON.stringify(credentials),
        params
    );
    check(res, { 'Login: status is 200 OK': (r) => r.status === 200 });

    const accessToken = res.json().access;
    console.log(`Access Token: ${accessToken}`);
    sleep(1);

    // 3. Petición para obtener la lista de cocodrilos (con token)
    res = http.get(
        'http://localhost:8000/my/crocodiles/',
        {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        }
    );
    check(res, { 'GET crocodiles: status is 200 OK': (r) => r.status === 200 });
    sleep(1);

    // 4. Petición para crear un nuevo cocodrilo (con token)
    const newCrocodileBody = JSON.stringify({
        name: 'Random croc',
        sex: 'M',
        date_of_birth: '1900-10-28'
    });

    res = http.post(
        'http://localhost:8000/my/crocodiles/',
        newCrocodileBody,
        {
            headers: {
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json'
            }
        }
    );
    check(res, { 'POST crocodile: status is 201 Created': (r) => r.status === 201 });
    sleep(1);
    console.log(res.json().id)
}