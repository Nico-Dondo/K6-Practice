import http from "k6/http";
import { check } from "k6";

export default function () {
  let res = http.get("http://localhost:8000/public/crocodiles/");
  const crocodiles = res.json(); //Se parsea la variable a un json para poder interactuar y se crea la constante
  const crocodileId = crocodiles[0].id; // se crea la constante id para interactuar
  const crocodileName = crocodiles[0].name; // se crea la constante name para interactuar

  res = http.get(`http://localhost:8000/public/crocodiles/${crocodileId}`); // aca se debe usar back ticks o comillas invertidas para interactuar con la respuesta json para que la tome

  console.log(res.headers['Content-Type']); // se imprime el tipo de contenido de la respuesta en este caso al content-type, pero desde aca se puede acceder a los headers

  check(res, {
    "status code is 200": (r) => r.status === 200,
    "crocodile name": (r) => r.json().name === crocodileName,
  }
  );
}
