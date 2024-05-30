//FORMAS DE BUSCAR MAS DE UN PERSONAJE//
function valor() {

  let idPersonaje1 = document.getElementById('idPersonaje1').value
  let idPersonaje2 = document.getElementById('idPersonaje2').value

  fetch(`https://rickandmortyapi.com/api/character/[${idPersonaje1},${idPersonaje2}]`)
    .then(Response => Response.json())
    .then(data => {

      document.getElementById("personaje1").innerHTML = `<img src="${data[0].image}" alt="personaje1">`;
      document.getElementById("personaje2").innerHTML = `<img src="${data[1].image}" alt="personaje2">`;

      {
        if (data[0].gender == data[1].gender) {
          document.getElementById("mostrar2").innerHTML = '<img src="imagenes/bien.png" alt="mostrar2">'
        } else { document.getElementById("mostrar2").innerHTML = '<img src="imagenes/mal.png" alt="mostrar2">' }
      }
    })
}







