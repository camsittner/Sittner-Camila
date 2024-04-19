//FORMAS DE BUSCAR MAS DE UN PERSONAJE//
function valor(){
      
    let idPersonaje1=document.getElementById('idPersonaje1').value
    let idPersonaje2=document.getElementById('idPersonaje2').value

  
    fetch(`https://rickandmortyapi.com/api/character/[${idPersonaje1},${idPersonaje2}]`)
            .then (Response=>Response.json())
            .then (data=>{
                    //document.createElement(Image)
                    data.image
            })
    }


    