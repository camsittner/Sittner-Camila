//let frutas=['pera','manzana','frutilla','banana','anana'];
//frutas.forEach(giro =>    {console.log(giro);})

//for (const fruta of frutas){console.log(fruta)}

//for (const fruta of frutas)
//{if (fruta=='manzana'){console.log(fruta)}}

/*for (i=0; i <= frutas.length; i++) 
{ console.log($array[i])} */


/*FORMAS DE BUSCAR PERSONAJES//


function buscar(){
    let valor=document.getElementById('valor').value

    fetch('https://rickandmortyapi.com/api/character/'+valor)
    .then (Response=>Response.json())
    .then (data=>{
            console.log(data.name,data.id,data.species)
           
    })}

      
   /* fetch('https://rickandmortyapi.com/api/character/'+document.getElementById('valor').value)
    .then (Response=>Response.json())
    .then (data=>{
            console.log(data.name)
    })}*/


    //formas de buscar mas de un personaje//

    function comparar(){

        
        fetch('https://rickandmortyapi.com/api/character/[1,183]'+p1)
        .then (Response=>Response.json())
        .then (data=>{
                data.imagen     
        })
        
      
        fetch('https://rickandmortyapi.com/api/character/[1,183]'+p2)
        .then (Response=>Response.json())
        .then (data=>{
                data.imagen
        })
       /* let tipo=document.getElementById('p1').innerHTML= 
                ` <img src="${data.imagen}"/>`

        let tipo=document.getElementById('p2').innerHTML= 
                `<img src="${data.imagen}"/>`*/

        {if (comparar(data.gender=data.gender)){
                let tipo=document.getElementById('p1').innerHTML= 
                ` <img src="${data.imagen}"/>`
        } else {
                let tipo=document.getElementById('p2').innerHTML= 
                `<img src="${data.imagen}"/>`   
        }

        }}