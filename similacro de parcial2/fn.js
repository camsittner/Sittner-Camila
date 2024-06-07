function mayoredad(){
 let edadmayor = 0;

    fetch("https://randomuser.me/api/?results=3")
        .then(response => response.json())
        .then(data => data.results.forEach(element => {
        
            if (edadmayor < element.dob.age ){
                edadmayor=element.dob.age
               
                document.getElementById('personajemayor').innerHTML = `${edadmayor}`
                 console.log(edadmayor)
            }

        }))
    }

function nombremayor(){
   

    //let personaje1 = document.getElementById(personaje1).value

    fetch (`https://rickandmortyapi.com/api/character/${personaje1.value},${personaje2.value},${personaje3.value}`)
        .then(responde => responde.json())
        .then(data => {
            document.getElementById("nombrepersonaje1").innerHTML = `${data[0].name}`
            document.getElementById("nombrepersonaje2").innerHTML = `${data[1].name}`
            document.getElementById("nombrepersonaje3").innerHTML = `${data[2].name}`
        }

        )}





                

    


  