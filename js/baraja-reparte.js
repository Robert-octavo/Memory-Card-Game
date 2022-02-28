/* con esta funcion se cambia el orden del los elementos
  que estan en total tarjetas se devuelve el resultado
*/
function barajaTarjetas(lasTarjetas) {
  var resultado;
  var totalTarjetas = lasTarjetas.concat(lasTarjetas);
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

/* Con esta funcion seleccionamos un elemton del DOM, que tiene
la clase mesa, a tarjetasbarajadas recibe el valor retornado de la funcion
barajar tarjetas, Borramos el contenido html que tenga el div (.mesa)
*/

function reparteTarjetas(lasTarjetas) {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas(lasTarjetas);
  mesa.innerHTML = "";
  /* recorremos el arreglo */
  tarjetasBarajadas.forEach(function(elemento) {
    /*Creamos un elemnto tipo div*/
    var tarjeta = document.createElement("div");
    /*Al elemento creado le agregamos con
     innerHtml todo el contenido html que necesitamos
    y con elemento ponemos el icono que tenemos en tarjetas
    */
    tarjeta.innerHTML =
      "<div class='tarjeta' data-valor= " +
      elemento +
      ">" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";
    /* agregamos el elemento con appenchild al html */
    mesa.appendChild(tarjeta);
  });
}
