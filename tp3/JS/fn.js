primerarray = [];
segundoarray = [];

function primerbuscar() {
    let valor = document.getElementById("primerimput").value
    
    
    if (primerarray.includes(valor)==true){
        alert("no se puede ingresar el numero repetido")
    }

    if (primerarray.length<3 && primerarray.includes(valor)==false){
        primerarray.push(valor)
    }

    if (primerarray.length==3){
         document.getElementById("primerimput").disabled = true
         document.getElementById("primerbutton").disabled = true
    }

    if (primerarray.length==4){
        document.getElementById("buscar").disabled = true
    }

    console.log(primerarray);

}

function segundobuscar() {
    let valor = document.getElementById("segundoimput").value

    
    if (segundoarray.includes(valor)==true){
        alert("no se puede ingresar el valor repetido")
    }
 
    if (segundoarray.length<3 && segundoarray.includes(valor)==false){
         segundoarray.push(valor)
    }
 
    if (segundoarray.length==3){
         document.getElementById("segundoimput").disabled = true
         document.getElementById("segundobutton").disabled = true
    }
    
    if (segundoarray.length==4){
        document.getElementById("buscar2").disabled = true
    } 
 
     console.log(segundoarray);
 
 }

 function buscar(){
    let URL="https://rickandmortyapi.com/api/character/"+primerarray;
    console.log(URL)
    fetch (URL)
        .then(Response => Response.json())
        .then(data=>{
            document.getElementById("primergrupo").innerHTML =`<img src=${data[0].image}><img src=${data[1].image}><img src=${data[2].image}>`

        
        })
 }

 function buscar2(){
    let URL="https://rickandmortyapi.com/api/character/"+segundoarray;
    console.log(URL)
    fetch (URL)
        .then(Response => Response.json())
        .then(data=>{
            document.getElementById("segundogrupo").innerHTML =`<img src=${data[0].image}><img src=${data[1].image}><img src=${data[2].image}>`

        })
 }