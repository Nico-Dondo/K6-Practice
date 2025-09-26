import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 1,
    duration: '5s',
};

export default function (data) {
    console.log('-- Vu stage --');
    console.log(data)
    sleep(1)
};
console.log('-- init stage --');

export function setup() {
    console.log('-- setup stage --');
    sleep(10);
    const data = { prueba: 'prueba' };
    return data
};

export function teardown() {
    console.log('-- Teardown Stage --');
};