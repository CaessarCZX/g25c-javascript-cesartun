// Evento de click en Boton (Desencadena eventos al oprimir un boton)
document.getElementById('myButton').addEventListener('click', function() {
    alert('Diste click donde no te dije.');
    document.getElementById('myButton').style.backgroundColor = 'red';
});

//Evento de cambio a una etiqueta input 
document.getElementById('inputText').addEventListener('change', function() {
    alert('El valor ha cambiado');
});

// Evento de teclado en un input
document.getElementById('inputText_2').addEventListener('keyup', function() {
    alert('Presionaste la tecla '+ event.key);
});

//Evento de carga de una imagen
document.getElementById('miImagen').addEventListener('load', function () {
    alert('Se cargo la imagen de manera exitosa');
})