// Primeros pasos con DOM

// Cambio de contenido a un elemnto
document.getElementById('titulo').innerHTML = 'Este es otro texto';

//Cambio de estilo a un elemnto
document.getElementById('buttonExample').style.backgroundColor = 'red';
document.getElementById('buttonExample').innerHTML = 'This is another text';

// Agregar un elemento a la pagina
const nuevoParrafo = document.createElement('p');
nuevoParrafo.setAttribute('id', 'miNuevoParrafo');
nuevoParrafo.innerHTML = 'Este es mi parrafo nuevo';
document.body.appendChild(nuevoParrafo);

// Eliminar un elemento de nuestra pagina
const parrafoAEliminar = document.getElementById('#parrafoAEliminar');
parrafoAEliminar.node