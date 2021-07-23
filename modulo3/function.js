function alterar(){
    document.querySelector('#titulo').innerHTML='trocou o titulo '
    document.querySelector('#campo').value='trocou a descricao '
}
let informacao= alterar()

console.log(informacao)

// utilizando paramentros 
//  quando usamos paramentros ele poder ser usada como variavel 
//  ex: 

// function alterar(titulo,campo){
//     document.querySelector('#titulo').innerHTML=titulo
//      document.querySelector('#campo').value=campo
// }
// // passa a informação aqui 
// let informacao2= alterar("trocou o titulo","trocou o campo")

// outro ex: 

function alterar(x,y){
    total=x+y
    document.querySelector("#campo").value=total;
}

function alterar(x,y){
    total=x+y
    return total
}

let resultado=alterar(10,15)
console.log(resultado)
// outro ex:
// passa a informação aqui 
let informacao2= alterar("trocou o titulo","trocou o campo")


