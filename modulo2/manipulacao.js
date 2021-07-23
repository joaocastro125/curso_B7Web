function verde(){
    document.querySelector('#quadrado').classList.remove('vermelho')
    document.querySelector('#quadrado').classList.remove('azul')
    document.querySelector('#quadrado').classList.add('verde')
}
function vermelho(){
    document.querySelector('#quadrado').classList.remove('verde')
    document.querySelector('#quadrado').classList.remove('azul')
    document.querySelector('#quadrado').classList.add('vermelho')
}
function azul(){
    document.querySelector('#quadrado').classList.remove('verde')
    document.querySelector('#quadrado').classList.remove('vermelho')
    document.querySelector('#quadrado').classList.add('azul')
}


function trocar(){
    // o contains ele faz um pesquisa e verifica se tem se tiver retorna um boolean
   if(document.querySelector('#button').classList.contains('preto')){
    document.querySelector('#button').classList.remove('preto')
    document.querySelector('#button').classList.add('verde') 
}else{
    document.querySelector('#button').classList.remove('verde')
    document.querySelector('#button').classList.add('preto')

}
}

function trocarImagem(filename,animalsName){
    // o setAttribute inserir um atributo 
    document.querySelector('.imagem').setAttribute('src','image/'+filename)
    document.querySelector('.imagem').setAttribute('data-animal', animalsName)
}
function pegarAnimal(){
    let animal=document.querySelector('.imagem').getAttribute('data-animal')
    alert('o animal é :'+animal)
}