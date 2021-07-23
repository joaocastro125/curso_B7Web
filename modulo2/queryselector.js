
//  document.querySelector ele substitui todos eventos anteriores 
//    o querySelectorAll-> seleciona todos os elementos 

/*
   document.getElementById("Exemplo")
// altera o conteudo no documento e o html , tggs tambem pode ser incluso
document.getElementById("Exemplo").innerHTML="emanoel <button>botao</button>"

// selecionas mais de uma classe no documento
document.getElementsByClassName('titulo')
// seleiona todas as que que precisamos 
document.getElementsByTagName('p')
// para alterar um item do array 
document.getElementsByTagName('p')[0].innerHTML='node'
// seleciona o name do input 
document.getElementsByName("email")
*/

document.querySelector('#Exemplo').innerHTML='NODE'
document.querySelector('button').innerHTML='alguma coisa'