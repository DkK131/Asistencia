
//Envio de datos a la segunda pagina

const sock = io()


sock.on('Asistencia', function (ready){
    console.log(ready);
    let asis = document.getElementById('Asistencia');
    asis.innerHTML = `${ready}`;
}
)
sock.on('Hora', function (now){
    console.log(now);
    let asis = document.getElementById('Hora');
    asis.innerHTML = `${now}`;
}
)
console.log(sock);
