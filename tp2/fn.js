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

                  document.getElementById("personaje1").innerHTML = `<img src="${data[0].image}" alt="personaje1">`;
                  document.getElementById("personaje2").innerHTML = `<img src="${data[1].image}" alt="personaje2">`;
                  
                { if (data[0].gender == data[1].gender)
                  {alert("son compatibles")} else {alert("no son compatibles")} 
                }
                  })  
          }
        

            
   /* mainContainer = document.getElementById("Mostrar2");
    img = document.createElement('img');
    div = document.createElement("div");
    if(data[0].gender==data[1].gender) {img.src = "png.bien.png";
    img.innerHTML = div.innerHTML = "son compatibles";}
    else {img.src = "png.mal.jpg"; img.innerHTML = div.innerHTML = "no son compatibles";};
    mainContainer.appendChild(img);
    mainContainer.appendChild(div);*/

    


    