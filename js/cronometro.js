function iniciaCronometro() {
    var segundos = 50;
    var minutos = 0;
    var segundosTexto;
    var minutosTexto;
    
    function actualizaContador(){
        segundos --;
        if (segundos < 0){
            segundos = 59;
            minutos --;
        }
        if (minutos < 0) {
            segundos = 0;
            minutos = 0;
            clearInterval(cronometro);
            timeOver();
        }

        segundosTexto = segundos;
        minutosTexto = minutos;

        /* para los casos de segundos y minutos menores a 10
        se agrega un cero, para mantener el doble digito */
        if (segundos < 10 ){
            segundosTexto = '0' + segundos;
        }
        if (minutos < 10){
            minutosTexto = '0' + minutos;
        }

        /* pasa las variables guardadas al texto html en el id minutos
        y al id segundoa */
        document.querySelector('#minutos').innerHTML = minutosTexto;
        document.querySelector('#segundos').innerHTML = segundosTexto;
    }

    cronometro = setInterval(actualizaContador,1000);
}

