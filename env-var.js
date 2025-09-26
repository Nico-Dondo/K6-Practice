import http from 'k6/http';

export default function () {
    
   // http.get ('http://localhost:8000/public/crocodiles/')
      //tambien se puede hacer de la siguiente forma: 
       http.get(`${__ENV.BASE_URL}/public/crocodiles/`);
       console.log(__ENV.BASE_URL)
}