//FORMAS DE BUSCAR MAS DE UN PERSONAJE//
function valor(){
      
    let idPersonaje1=document.getElementById('idPersonaje1').value
    let idPersonaje2=document.getElementById('idPersonaje2').value

  let img=document.createElement('img');
  let div=document.createElement('div');


    fetch(`https://rickandmortyapi.com/api/character/[${idPersonaje1},${idPersonaje2}]`)
            .then (Response=>Response.json())
            .then (data=>{

                  data[0].imag
                    data[1].image
                  
            })
    }

//<img src="https://e7.pngegg.com/pngimages/118/504/png-clipart-computer-icons-x-mark-wrong-s-cross-sign.png" alt="p1"/>

//<img src="https://thumbs.dreamstime.com/b/el-s%C3%ADmbolo-del-vector-icono-de-la-se%C3%B1al-marca-cotejo-aislada-en-fondo-blanco-comprob%C3%B3-o-muestra-bien-escogida-correcta-144483499.jpg" alt="p2"/>

    