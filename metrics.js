import http from "k6/http";
import { sleep } from 'k6';
import { Counter, Trend } from 'k6/metrics';

export const options = {
    vus: 5,
    duration: "15s", thresholds: {
        http_req_duration: ['p(95)<700'],
        my_counter: ['count>10'], // Usa el nombre de la métrica como clave (string),
        response_time_news_page:['p(95)<400', 'p(90)<200']// Dos condiciones pare los percentiles
    }
};

let myCounter = new Counter('my_counter');
let newsPagerespnseTrend = new Trend ('response_time_news_page')

export default function () {
    let res = http.get('https://k6.io/');
    myCounter.add(1);
    sleep(1);
    res = http.get('https://test.k6.io/news.php');
    newsPagerespnseTrend.add(res.timings.duration);
    sleep(1);
}