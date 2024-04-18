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

   /* function comparar(){

        let p1=document.getElementById('p1').innerHTML
       

        fetch('https://rickandmortyapi.com/api/character/[0,183]'+document.getElementById('p1').innerHTML)
        .then (Response=>Response.json())
        .then (data=>{
                console.log(data.name)     
                })}*/
        
      
        /*
        function comparar(){

         let p1=document.getElementById('p1').innerHTML

         fetch('https://rickandmortyapi.com/api/character/'+p1)
        .then (Response=>Response.json())
        .then (data=>{
                 console.log(data.origin)
                })}
/*
        {if (comparar(data.gender=data.gender)){
                let tipo=document.getElementById('p1').innerHTML= 
                ` <img src="${data.image}"/>`
        } else {
                let tipo=document.getElementById('p2').innerHTML= 
                `<img src="${data.image}"/>`   
        }*/

