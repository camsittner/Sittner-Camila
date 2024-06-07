function buscaryordenar() {

informacion='';
edad = 10;
document.getElementById("females").innerHTML = ''
document.getElementById("males").innerHTML = ''

let local = document.getElementById("local").checked 
    if (local)
        {informacion='personas.json'}
    else
        {informacion = 'https://randomuser.me/api/?results=10'}

let contadormujeres =0;
let contadorvarones =0;

    fetch(informacion)
        .then(response => response.json())
        .then(data => data.results.forEach(element => {
          
        
            if (element.gender == "female"){
               
                document.getElementById("females").innerHTML += `<h5>${element.name.first} ${element.name.last} <h5/>`
                contadormujeres++
                document.getElementById("mujeres").innerHTML = `<h4>${contadormujeres}</h4>`
                
                }else{
                document.getElementById("males").innerHTML += `<h5>${element.name.first} ${element.name.last} <h5/>`
                contadorvarones++
                document.getElementById("hombres").innerHTML = `<h4>${contadorvarones}</h4>`
            }
            
            if (edad>element.dob.age){document.getElementById("fotomujer").innerHTML = `img src=${element.dob.age, element.name.first}`}
            

        }))
}
