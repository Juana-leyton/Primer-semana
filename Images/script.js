function cambiarMensaje(idDiv){
    let mensaje = prompt('Escribe tu mensaje')
    document.getElementById(idDiv).innerHTML= mensaje
}