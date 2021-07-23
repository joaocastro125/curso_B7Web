
// variaveis são dados que são armazenados em memoria , para o javascript reconhecer que é uma variavel 
// precisa esta entre aspas

// var nome='joao'
// var sobrenome='castro'

// var nomeCompleto=nome+ ' ' +sobrenome

// alert("meu nome é : "+nomeCompleto)

// tipos de variaveis 

let nome='joao'


// a diferença entre o let ou var e  o const . quando usar o var é um processo chamado hotsing ela sera enviada para o escopo geral da sua tela usando uma variavel gobal . o let o let fica na aquele escopo especifico ou veja no escopo local  a diferença entre no var e let que var pode definir a mesma (var) e ja let não. variavel constante 
// não pode modificar o valor da constante para alterar o na const so repetir o no nova da variavel ex var nome ="joao" coloca nome.nome="pedro"


//  exemplo de var
// if(nome=='joao'){
//     var idade=90
// }

// console.log(idade)

// exemplo de let
if(nome=='joao'){
    let idade=90
}

console.log(idade)