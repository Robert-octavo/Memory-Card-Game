function descubrir() {
  var descubiertas;
  var tarjetasPendientes;
  var totalDescubiertas = document.querySelectorAll(
    ".descubierta:not(.acertada)"
  );

  if (totalDescubiertas.length > 1) {
    return;
  }

  this.classList.add("descubierta");
  document
    .querySelector("#sonido-carta")
    .cloneNode()
    .play();

  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubiertas.length < 2) {
    return;
  }

  comparar(descubiertas);
  actualizaContador();
  tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
  if (tarjetasPendientes.length === 0) {
    setTimeout(finalizar, 1000);
  }
}

function comparar(tarjetasAComparar) {
  // EJERCICIO: compara el valor del atributo data-valor de las dos
  // tarjetas que llegan como argumento de la función descubrir().
  // Si se trata del mismo valor, ejecuta la función acierto(),
  // pasándole el argumento correspondiente.
  // Si se trata de un valor diferente, ejecuta la función error(),
  // también pasándole el argumento correspondiente.
  /* al crear el elemento en html tambien se agregi una clase data y con dataseet podemos 
  acceder a ese valor */
  if (
    tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor
  ) {
    acierto(tarjetasAComparar);
  } else {
    error(tarjetasAComparar);
  }
}
