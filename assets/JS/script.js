const nome = document.querySelector('#pokemon');
const btn = document.querySelector('#btn');
const desc_nome = document.querySelector('.nome')
const desc_tipo = document.querySelector('.type')
const desc_img_front = document.querySelector('.img_front')
const desc_img_back = document.querySelector('.img_back')
const desc_regiao = document.querySelector('.região')
const desc_skill1 = document.querySelector('.skill1')
const desc_skill2 = document.querySelector('.skill2')
const desc_images = document.querySelector('.desc_images')

var desc = document.querySelector('.desc')
var error = document.querySelector('.error')

const normal = document.querySelector('.normal')
const shiny = document.querySelector('.shiny')


const desc_id = document.querySelector('.id')



btn.addEventListener('click', e => {
    var pk_name = nome.value.toLowerCase();
    getPokemon(pk_name);

});


function getPokemon(nm_pk){
    fetch('https://pokeapi.co/api/v2/pokemon/'+nm_pk)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        getDesc(dados);
        if(error.style.display === 'block'){
            error.style.display = 'none'
        }
        desc.style.display = 'block';


    }).catch(e => {
        if(desc.style.display === 'block'){
            desc.style.display = 'none'
        }
        error.style.display = 'block';
    })
}


function getDesc(dados){
    var nm = dados.name;
    var tipo = dados.types[0].type.name;
    var regiao = dados.location_area_encounters;
    var id = dados.id;
    var skill1 = dados.abilities[0].ability.name;

    try{
        var skill2 = dados.abilities[1].ability.name;
        desc_skill2.innerHTML = `Hidden ability: ${skill2}`
    }
    catch{
        console.log('ola')
    }
    
    var img_front = dados.sprites.front_default
    var img_back = dados.sprites.front_shiny

    desc_nome.innerHTML = `<h2>${nm.toUpperCase()}</h2>`;
    desc_tipo.innerHTML = `Type: ${tipo}`;
    desc_img_front.innerHTML = `<img id="front" src = "${img_front}"></img>`
    desc_img_back.innerHTML = `<img id="back" src = "${img_back}"></img>`
    desc_id.innerHTML = `ID: ${id}`;
    desc_skill1.innerHTML = `First ability: ${skill1}`
}