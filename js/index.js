/* # Um Helpzinho.
#
#  ---- Variaveis ----
#
#  Var = Variavel que seu valor pode ser modificado facilmente em qualquer parte do codigo.
#  Let = Variavel que seu valor é modificado somente em situações especificas, como if e else.
#  Const = Variavel que seu valor nunca sera modificavel.
#
#  ----  Função  ----
# // O Nome da função nao pode haver: acentos, (-), (_) ou (.)
# // O Valor da função serve como a variavel utilizada pra realizar a função, veja o exemplo abaixo. //
# // A Função pode ser feita sem valores também. //
#
#    function NomeDaFunçao(valor1,valor2){
#       return valor1 * valor2;
#       }
#
# // Essa função é um exemplo de soma, voce pode ver como utilizamos ela abaixo. //
# // Usando de exemplo o alert para enviar ao usuario os dados recebidos. //
#
# // O Dado enviado sera o numero 2, porque 1x2 = 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          . //
#
#     alert(NomeDaFuncao(1,2));
#
# ---- XXXXXX ----
*/

// ##### JS DO APARECER DO SOBRE E MANTER O HOVER #####

// Funções
function hover(){ foto.style.transition = 'filter 0.1s ease-in-out'; foto.style.filter = 'blur(0.3vh) drop-shadow(0 0 10px white) brightness(0.3)'; }
function offhover(){ foto.style.filter = 'none'; }

//Constantes
const foto = document.querySelector('#foto');
const sobre = document.querySelector('#sobre');

if(document.hidden == false){ // deixa o 'sobre' invisivel quando inicializar o site
    sobre.style.opacity = '0';
    offhover();
}

foto.addEventListener('mouseover', function() { // adiciona o hover e o 'sobre' quando o mouse passa por cima da foto
  hover();
  sobre.style.opacity = '1'; // visivel
});

foto.addEventListener('mouseout', function() { // remove o hover e o 'sobre' quando o mouse sair de cima da foto
  sobre.style.opacity = '0'; // invisivel
  offhover();
});

sobre.addEventListener('mouseover', function() { // manter o hover quando o mouse passar pelo 'sobre'
  hover();
  sobre.style.opacity = '1';
});

/*##### Comentario| Script Acima #####

 yTwo: MANO, ESSA MERDA FICA BUGANDO QUANDO EU VOU FAZER O SCRIPT 2 VEY MEUDEUS.

 #######################
*/
// ##### FIM DESSE PEQUENO JS #####

// ##### JS DO APARECER DA JANELA SOBRE #####

//Variaveis
// NAO TEM KKSKS
//Funções
function abrirJanela(){ 
    janela.style.visibility = 'visible'; 
    janela.style.opacity = '1'; 
    fechar.style.visibility = 'visible'; 
    fechar.style.opacity = '1'; 
}
function fecharJanela(){
    janela.style.visibility = 'hidden';
    fechar.style.visibility = 'hidden';
    janela.style.opacity = '0'; 
    fechar.style.opacity = '0'; 
}
function deixarEscuro(){
    escurecer.style.visibility = 'visible';
    escurecer.style.opacity = '0.7';
}
function deixarClaro(){
    escurecer.style.visibility = 'hidden';
    escurecer.style.opacity = '0';
}

//Constantes
const janela = document.querySelector('#janela');
const fechar = document.querySelector('#fechar');
const escurecer = document.querySelector('#escurecer');

if(document.hidden == false){
    fecharJanela();
};

sobre.addEventListener('click', function() {
    if(true){ abrirJanela(); deixarEscuro(); }
    
});

foto.addEventListener('click', function() {
    if(true){ abrirJanela(); deixarEscuro(); }
});

fechar.addEventListener('click', function(){
    if(true){ fecharJanela(); deixarClaro(); }
})


