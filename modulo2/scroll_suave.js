function subirtela(){
    // essa funcão vai la para o fim  E VAI PARA CIMA DO DOCUMENTO 
    // Realiza a rolagem para um conjunto de coordenadas em particular em um documento.
    // window.scrollTo(0,0)
    // NO CASO DO SCROLL SUAVE PODEMOS PASSAR O OBJETO 
    window.scrollTo({
        top:0,
        left:0,
        // significa comportamento 
        behavior:'smooth'
    })
}

function selectButton(){
    // posicao na vertical na posicao y 
    if(window.scrollY==0){
        // ocultar o botao
        document.querySelector('.scrollbutton').style.display='none'

    }else{
        // mostrar o botao
        document.querySelector('.scrollbutton').style.display='block'

    }
}


window.addEventListener('scroll',selectButton)
// O método  setInterval() oferecido das interfaces  Windowe  Worker, repetem chamadas de funções ou executam trechos de código, com um tempo de espera fixo entre cada chamada. Isso retorna um ID único para o intervalo, podendo remover-lo mais tarde apenas o chamando  clearInterval() (en-US) . Este metodo é definido pelo mixin  WindowOrWorkerGlobalScope.
// esse é um observador de eventos 
// setInterval(selectButton, 1000)