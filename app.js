//@author : vitor sinedino 
//DOM elements
var btn = document.getElementById('btn1');
var text = document.getElementById('number');
var name1 = document.getElementById('name1');
var type = document.getElementById('type');
btn.addEventListener('click', atClick);
//variables that will control the flow of the fetch
id = 1;
var count = 0;
var pokeData = [{}];

getPoke(id);
//click function whith api fetch
function atClick(){
    if(count >= 1){
        name1.removeChild(pokeName);
        type.removeChild(pokeType);
    }
    id = text.value;
    if(parseInt(id) < 808) {
        getPoke(id);
        
    }
    else{
        alert("There is no such pokemon ID");
        id = 1;
        text.value = id;
        getPoke(id);
        
    }
    
}

//function that will fetch dee pokeapi data//
function getPoke(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
.then((response) =>{
    return response.json();
})
.then((data) => {
    pokeData = data;
    })
.then(() =>{
    document.getElementById('display').src = pokeData.sprites.front_default;
    pokeName = document.createTextNode(pokeData.name);
    pokeType = document.createTextNode(pokeData.types[0].type.name);
    name1.appendChild(pokeName);
    type.appendChild(pokeType);
    count += 1;
});
text.value = id;
}




