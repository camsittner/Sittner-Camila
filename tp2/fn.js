//FORMAS DE BUSCAR MAS DE UN PERSONAJE//
function valor(){
      
    let idPersonaje1=document.getElementById('idPersonaje1').value
    let idPersonaje2=document.getElementById('idPersonaje2').value

  /*Çlet img=document.createElement('img');
  img.src = 'idPersonaje1'
  document.body.appendChild(img)
  //let div=document.createElement('div');
*/

    fetch(`https://rickandmortyapi.com/api/character/[${idPersonaje1},${idPersonaje2}]`)
            .then (Response=>Response.json())
            .then (data=>{

                  document.getElementById("foto").innerHTML = `<img src="${data[0].image}" alt="foto">`;
                  document.getElementById(data[1].image)
                  
            })
  let img=document.createElement('img');
    img.src = 'idPersonaje1'
    document.body.appendChild(img)

    }


    